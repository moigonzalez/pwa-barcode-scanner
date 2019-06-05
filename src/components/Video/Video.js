import React, { Component } from "react";
import { withRouter } from "react-router";

import Quagga from "quagga";
import VideoSkeleton from "./Video.skeleton";

import styles from "./video.css";

class Video extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videoInit: false,
      videoError: false,
      detected: {}
    };

    this.videoRef = React.createRef();
  }

  onProductFound = code => {
    Quagga.stop();
    this.props.history.push(`/product/${code}`);
  };

  onDetected = result => {
    this.setState(prevState => ({
      detected: {
        ...prevState.detected,
        [result]: (prevState.detected[result] || 0) + 1
      }
    }));

    if (this.state.detected[result] > 2) {
      this.setState({ detected: {} });
      Quagga.offDetected(this.onDetected);
      fetch(
        `https://world.openfoodfacts.org/api/v0/product/${
          result.codeResult.code
        }.json`
      )
        .then(res => res.json())
        .then(({ code }) => this.onProductFound(code));
    }
  };

  onInitSuccess() {
    Quagga.start();

    this.setState({
      videoInit: true
    });
  }

  componentDidMount() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      Quagga.init(
        {
          inputStream: {
            name: "Live",
            type: "LiveStream",
            target: document.querySelector("#video")
          },
          numOfWorkers: 1,
          locate: true,
          decoder: {
            readers: [
              "ean_reader",
              "ean_8_reader",
              "upc_reader",
              "code_128_reader"
            ]
          }
        },
        err => {
          if (err) {
            this.setState({
              videoError: true
            });
            return;
          }
          this.onInitSuccess();
        }
      );
      Quagga.onDetected(this.onDetected);
    }
  }

  render() {
    return (
      <div>
        <div className="video__explanation">
          <p>Scan product's barcode and get its nutritional values 🍎</p>
        </div>
        <div className="video__container">
          {this.state.videoError ? (
            <VideoSkeleton error={true} />
          ) : (
            <div>
              <div className="video" id="video" />
              {this.state.videoInit ? "" : <VideoSkeleton />}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default withRouter(Video);
