import React from 'react';

import Loader from 'react-feather/dist/icons/loader';

const VideoSkeleton = (props) => (
  <div className="skeleton__video">
    {props.error ?
      ""
      :
      <div className="skeleton__video--loading">
        <Loader />
      </div>
      }
  </div>
);

export default VideoSkeleton;
