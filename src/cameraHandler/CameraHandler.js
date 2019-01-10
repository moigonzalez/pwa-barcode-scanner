import React, { lazy, Component, Suspense } from 'react';
import { Camera } from 'react-feather';

const Video = lazy(() => import('../videoComponent'));

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
        {this.state.isCameraSupported ?
          <div>Camera is not supported 😢</div>
        :
        this.state.isCamEnabled ?
          <Suspense fallback={<div>Loading...</div>}>
            <Video />
          </Suspense>
          :
          <div>Waiting for cam to be enabled...</div>
        }
        <button className="btn__round camera__enable" onClick={this.onCamEnabled}>
          <Camera />
        </button>
      </>
    );
  }
}

export default CameraHandler;
