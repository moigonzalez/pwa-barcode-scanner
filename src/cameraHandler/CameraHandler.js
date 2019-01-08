import React, { Component } from 'react';
import Quagga from 'quagga';

import css from './cameraHandler.css';

class CameraHandler extends Component {

  constructor(...props) {
    super(...props);

    this.videoRef = React.createRef();
  }

  static state = {
    isCameraSupported: false,
  }

  onDetected(result) {
    console.log(result);
    console.log('detected!');
    Quagga.stop();
  }

  componentDidMount() {
    if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {

      this.setState({
        isCameraSupported: true
      })

      Quagga.init({
        inputStream : {
          name : "Live",
          type : "LiveStream",
          target: document.querySelector('#video')    // Or '#yourElement' (optional)
        },
        numOfWorkers: 1,
        locate: true,
        decoder : {
          readers : ['ean_reader', 'ean_8_reader', 'upc_reader', 'code_128_reader']
        }
      }, (err) => {
          if (err) {
              console.log(err);
              return
          }
          console.log("Initialization finished. Ready to start");
          Quagga.start();
      });
      Quagga.onDetected(this.onDetected);
    }
  }

  render() {
    return (<div id="video"></div>);
  }
}

export default CameraHandler;
