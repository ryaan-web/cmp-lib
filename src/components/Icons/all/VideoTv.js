import React from "react";
import Icon from "../Icon";
import cuid from "cuid";

const VideoTv = (props) => {
  const uniqueId = cuid();
  return (
    <Icon uniqueId={uniqueId} {...props}>
      <title>video-tv</title>
      <path d="M15.72 3.74h-4.24l2.12-2.1c0.12-0.14 0.2-0.3 0.2-0.5 0-0.38-0.32-0.7-0.72-0.7-0.18 0-0.36 0.060-0.48 0.18v0l-2.78 2.78-1.64-2.040c-0.14-0.14-0.34-0.24-0.56-0.24-0.4 0-0.72 0.32-0.72 0.72 0 0.18 0.060 0.36 0.16 0.48v0l1.2 1.42h-3.98c-1.96 0-3.56 1.6-3.56 3.58v0 6.9c0 1.98 1.6 3.58 3.56 3.58v0h11.44c1.96 0 3.56-1.6 3.56-3.58v0-6.9c0-1.98-1.6-3.58-3.56-3.58v0zM17.86 14.22c0 1.18-0.96 2.14-2.14 2.14v0h-11.44c-1.18 0-2.14-0.96-2.14-2.14v0-6.9c0-1.18 0.96-2.14 2.14-2.14v0h11.44c1.18 0 2.14 0.96 2.14 2.14v0zM14.28 19.7c0 0.4-0.32 0.72-0.7 0.72h-7.16c-0.38 0-0.7-0.32-0.7-0.72s0.32-0.72 0.7-0.72v0h7.16c0.38 0.020 0.7 0.34 0.7 0.72v0zM12.44 11.34l-3.54 2.020c-0.58 0.34-1.040 0.080-1.040-0.58v-4.020c0-0.64 0.46-0.96 1.040-0.58l3.54 2.020c0.26 0.080 0.44 0.3 0.44 0.58s-0.18 0.5-0.44 0.56v0z"></path>
    </Icon>
  );
};

export default VideoTv;
