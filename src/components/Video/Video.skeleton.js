import React from 'react';

import VideoOff from 'react-feather/dist/icons/video-off';
import Loader from 'react-feather/dist/icons/loader';

const VideoSkeleton = (props) => (
  <div className="skeleton__video">
    {props.error ?
      <div className="skeleton__video--error">
        <VideoOff />
        <div className="skeleton__message">Camera access is not enabled</div>
      </div>
      :
      <div className="skeleton__video--loading">
        <Loader />
      </div>
      }
  </div>
);

export default VideoSkeleton;
