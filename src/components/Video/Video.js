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
      attempts: 0,
      currentCode: null
    }

    this.videoRef = React.createRef();
  }

  onInfoFetched = (res) => {
    const { status, code } = res;
    const attempts = this.state.attempts + 1;

    this.setState({
      attempts: attempts
    })

    if (status === 1) {
      this.setState({
        attempts: 0,
        currentCode: code
      });
      Quagga.onDetected(this.onDetected);
      this.props.onProductFound(res.product);
    } else if (this.state.attempts > 3) {
      Quagga.stop();
      this.props.history.push(`/product/${code}`);
    } else {
      Quagga.onDetected(this.onDetected);
    }
  }

  onDetected = (result) => {
    if (this.state.currentCode === result.codeResult.code) {
      return;
    }
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
        frequency: 4,
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
