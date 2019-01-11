class DataHandler {
  static cameraPermissionGranted() {
    localStorage.setItem('CAM_PERMISSION', 'true');
  }

  static isCameraPermissionGranted() {
    return localStorage.getItem('CAM_PERMISSION') !== null;
  }
}

export default DataHandler;
