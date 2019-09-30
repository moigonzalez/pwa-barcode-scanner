import React, { lazy, Component, Suspense } from 'react';

import Camera from 'react-feather/dist/icons/camera';
import ArrowDown from 'react-feather/dist/icons/arrow-down';
import dataHandler from '../dataHandler';

import BarcodeInputField from '../barcodeInputField';

import './cameraHandler.css';

const Video = lazy(() => import('../Video'));

class CameraHandler extends Component {

  constructor(...props) {
    super(...props);

    this.state = {
      isCameraSupported: false,
      isCamEnabled: dataHandler.isCameraPermissionGranted()
    };
  }

  componentWillMount() {
    if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      this.setState({
        isCameraSupported: true
      });
    }
  }

  onCamEnabled = () => {
    dataHandler.cameraPermissionGranted();
    this.setState({
      isCamEnabled: true
    });
  }

  render() {
    return (
      <>
        {this.state.isCameraSupported ?
          this.state.isCamEnabled ?
          <Suspense fallback={<div>Loading...</div>}>
            <Video />
          </Suspense>
          :
          <div className="cameraHandler__message">Enable your camera with the button below
          <br/>
          <div className="cameraHandler__messageIcon"><ArrowDown size={35}/></div>
          </div>
          :
          <div className="cameraHandler__unsopported">
            <div>
              <p>Your device does not support camera access or something went wrong <span role="img" aria-label="thinking-face">🤔</span></p>
              <p>You can enter the barcode below</p>
              <BarcodeInputField />
            </div>
          </div>
        }
        {this.state.isCamEnabled ?
          ''
          :
          <button type="button" aria-label="Enable Camera" className="btn__round camera__enable" onClick={this.onCamEnabled}>
            <Camera />
          </button>
        }
      </>
    );
  }
}

export default CameraHandler;
