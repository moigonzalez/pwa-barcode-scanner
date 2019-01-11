import React, { Component } from 'react';

import Quagga from 'quagga';
import VideoSkeleton from './Video.skeleton';

import styles from './video.css';

class Video extends Component {

  constructor(...props) {
    super(...props);

    this.state = {
      videoInit: false,
      videoError: false
    }

    this.videoRef = React.createRef();
  }

  onDetected(result) {
    Quagga.stop();
    window.location.pathname = `/product/${result.codeResult.code}`;
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
          Quagga.start();

          this.setState({
            videoInit: true
          })
      });
      Quagga.onDetected(this.onDetected);
    }
  }

  render() {
    return (
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
      );
  }
}

export default Video;
