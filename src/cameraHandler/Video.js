import React, { Component } from 'react';

import Quagga from 'quagga';

class Video extends Component {

  constructor(...props) {
    super(...props);

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
              console.log(err);
              return
          }
          Quagga.start();
      });
      Quagga.onDetected(this.onDetected);
    }
  }

  render() {
    return (<div id="video"></div>);
  }
}

export default Video;
