import React, { Component } from 'react';
import { withRouter } from 'react-router';

import Quagga from 'quagga';
import VideoSkeleton from './Video.skeleton';

import styles from './video.css';

class Video extends Component {

  constructor(props) {
    super(props);

    this.state = {
      videoInit: false,
      videoError: false,
      attemps: 0
    }

    this.videoRef = React.createRef();
  }

  onInfoFetched = (res) => {
    const { status, code } = res;
    const attemps = this.state.attemps + 1;

    console.log('status', status);

    console.log('attemps', attemps);

    this.setState({
      attemps: attemps
    })

    if (status === 1 || this.state.attemps > 3) {
      this.onProductFound(code);
    } else {
      Quagga.onDetected(this.onDetected);
    }
  }

  onProductFound = (code) => {
    Quagga.stop();
    this.props.history.push(`/product/${code}`);
  }

  onDetected = (result) => {
    Quagga.offDetected(this.onDetected);
    fetch(`https://world.openfoodfacts.org/api/v0/product/${result.codeResult.code}.json`)
      .then(res => res.json())
      .then(res => this.onInfoFetched(res));
  }

  onInitSuccess() {
    Quagga.start();

    this.setState({
      videoInit: true
    });
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

  render() {
    return (
      <div>
        <div className="video__explanation">
          <p>Scan product's barcode and get its nutritional values 🍎</p>
        </div>
        <div className="video__container">
          {this.state.videoError ?
            <VideoSkeleton error={true}/>
            :
            <div>
              <div className="video" id="video"></div>
              {this.state.videoInit ? '' : <VideoSkeleton />}
            </div>
          }
        </div>
      </div>
      );
  }
}

export default withRouter(Video);
