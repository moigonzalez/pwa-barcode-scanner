import React, { Component } from 'react';

class CameraHandler extends Component {

  state = {
    isCameraSupported: false
  }

  componentWillMount() {
    if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      this.setState({
        isCameraSupported: true
      })

      // navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
      //     //video.src = window.URL.createObjectURL(stream);
      //     video.srcObject = stream;
      //     video.play();
      // });
    }
  }

  render() {
    console.log(this.state.isCameraSupported);

    const output = this.state.isCameraSupported ? <div>Camera supported</div> : <div>Camera not supported</div>;

    return (output);
  }
}

export default CameraHandler;
