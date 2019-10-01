import React from 'react';

import Loader from 'react-feather/dist/icons/loader';

const VideoSkeleton = ({ error }) => (
  <div className="skeleton__video">
    {error ?
      ""
      :
      <div className="skeleton__video--loading">
        <Loader />
      </div>
      }
  </div>
);

export default VideoSkeleton;
