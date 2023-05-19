import React, { useEffect, useRef } from "react";

const DashVideoPlayer = ({ videoUrl }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const dashjs = require("dashjs").MediaPlayer().create();
      dashjs.initialize(videoRef.current, videoUrl, false);
    }
  }, [videoUrl]);

  return (
    <div>
      <video ref={videoRef} controls />
    </div>
  );
};

export default DashVideoPlayer;
