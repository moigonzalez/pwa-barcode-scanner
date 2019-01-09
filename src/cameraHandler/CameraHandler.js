import React, { lazy, Component, Suspense } from 'react';
const Video = lazy(() => import('./Video'));

import css from './cameraHandler.css';

class CameraHandler extends Component {

  constructor(...props) {
    super(...props);

    this.state = {
      isCameraSupported: false,
      isCamEnabled: false
    };
  }

  onCamEnabled = () => {
    console.log(this.state.isCamEnabled);
    this.setState({
      isCamEnabled: true
    });
  }

  componentWillMount() {
    if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      this.setState({
        isCameraSupported: true
      });
    }
  }

  render() {
    return (
      <>
        <button onClick={this.onCamEnabled}>Activate camera</button>
        {this.state.isCamEnabled ?
          <Suspense fallback={<div>Loading...</div>}>
            <Video />
          </Suspense>
          :
          <div>Waiting for cam to be enabled...</div>
        }
      </>
    );
  }
}

export default CameraHandler;
