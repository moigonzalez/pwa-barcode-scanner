import React, { Component } from 'react';

import css from './cameraHandler.css';

class CameraHandler extends Component {

  constructor(...props) {
    super(...props);

    this.videoRef = React.createRef();
  }

  static state = {
    isCameraSupported: false,
  }

  componentWillMount() {
    if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {

      this.setState({
        isCameraSupported: true
      })

      navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
        this.videoRef.current.srcObject = stream;
        this.videoRef.current.play();
      });
    }
  }

  render() {
    return (<video ref={this.videoRef}></video>);
  }
}

export default CameraHandler;
