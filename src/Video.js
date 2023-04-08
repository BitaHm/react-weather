import React from 'react';

const Video = () => {
  return (
    <video
      autoPlay
      muted
      loop
      style={{
        position: 'fixed',
        right: 0,
        bottom: 0,
        minWidth: '100%',
        minHeight: '100%',
        width: 'auto',
        height: 'auto',
        zIndex: '-1'
      }}
    >
      <source src="clouds.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default Video;