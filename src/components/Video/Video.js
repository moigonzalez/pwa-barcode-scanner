import React, { Component } from 'react';
import Quagga from 'quagga';

import { withRouter } from 'react-router';

import BarcodeInputField from '../barcodeInputField';

import VideoSkeleton from './Video.skeleton';

import './video.css';

class Video extends Component {

  constructor(props) {
    super(props);

    this.state = {
      videoInit: false,
      videoError: false,
      attempts: 0
    }

    this.videoRef = React.createRef();
  }

  componentDidMount() {
    if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {

      Quagga.init({
        inputStream : {
          name : "Live",
          type : "LiveStream",
          target: document.querySelector('#video')
        },
        numOfWorkers: 1,
        locate: true,
        decoder : {
          readers : ['ean_reader', 'ean_8_reader', 'upc_reader', 'code_128_reader']
        }
      }, (err) => {
          if (err) {
            this.setState({
              videoError: true
            });
            return;
          }
          this.onInitSuccess();
      });
      Quagga.onDetected(this.onDetected);
    }
  }

  onDetected = (result) => {
    Quagga.offDetected(this.onDetected);
    fetch(`https://world.openfoodfacts.org/api/v0/product/${result.codeResult.code}.json`)
      .then(res => res.json())
      .then(res => this.onInfoFetched(res));
  }

  onProductFound = (code) => {
    Quagga.stop();
    this.props.history.push(`/product/${code}`);
  }

  onInfoFetched = (res) => {
    const { status, code } = res;
    const attempts = this.state.attempts + 1;

    this.setState({
      attempts
    })

    if (status === 1 || this.state.attempts > 3) {
      this.onProductFound(code);
    } else {
      Quagga.onDetected(this.onDetected);
    }
  }

  onInitSuccess() {
    Quagga.start();

    this.setState({
      videoInit: true
    });
  }

  render() {
    return (
      <div>
        <div className="video__explanation">
          <p>Scan a product&apos;s barcode and get its nutritional values <span role="img" aria-label="apple">🍎</span></p>
        </div>
        <div className="video__container">
          {this.state.videoError ?
            <div className="skeleton__unsopported">
              <div>
                <p>Your device does not support camera access or something went wrong <span role="img" aria-label="thinking-face">🤔</span></p>
                <p>You can manually enter the barcode below</p>
                <BarcodeInputField />
              </div>
            </div>
            :
            <div>
              <div className="video" id="video" />
              {this.state.videoInit ? '' : <VideoSkeleton />}
            </div>
          }
        </div>
      </div>
      );
  }
}

export default withRouter(Video);
