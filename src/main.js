import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import CameraHandler from './cameraHandler';

const App = () => (
  <>
    <h1>PWA Barcode Scanner</h1>
    <CameraHandler />
  </>
);

ReactDOM.render(<App />, document.getElementById('root'));
