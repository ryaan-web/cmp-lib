import React from "react";
import Icon from "../Icon";
import cuid from "cuid";

const Gift = (props) => {
  const uniqueId = cuid();
  return (
    <Icon uniqueId={uniqueId} {...props}>
      <title>gift</title>
      <path d="M18.1 5.24h-2.28c0.082-0.25 0.133-0.538 0.14-0.836l0-0.004c0-0.001 0-0.001 0-0.002 0-1.767-1.433-3.2-3.2-3.2-0.76 0-1.457 0.265-2.006 0.707l0.006-0.005c-0.757-1.122-2.023-1.851-3.46-1.851-2.287 0-4.143 1.846-4.16 4.129v0.002c-0.001 0.035-0.002 0.076-0.002 0.118 0 0.334 0.037 0.659 0.107 0.972l-0.006-0.029h-1.34c-1.049 0-1.9 0.851-1.9 1.9v0 2.38c0 1.049 0.851 1.9 1.9 1.9v0 5.72c0 1.58 1.28 2.86 2.86 2.86v0h10.48c1.58 0 2.86-1.28 2.86-2.86v0-5.72c1.049 0 1.9-0.851 1.9-1.9v0-2.38c0-1.049-0.851-1.9-1.9-1.9v0zM12.74 3.1c0.718 0.014 1.295 0.599 1.295 1.32 0 0.293-0.096 0.565-0.258 0.784l0.003-0.004h-2.040c-0.189-0.213-0.308-0.492-0.32-0.798l-0-0.002c0.011-0.72 0.598-1.3 1.32-1.3 0 0 0 0 0 0v0zM5 4.18c0.004-1.245 1.014-2.252 2.26-2.252 1.248 0 2.26 1.012 2.26 2.26 0 0.385-0.096 0.747-0.266 1.065l0.006-0.012h-3.96c-0.179-0.304-0.289-0.668-0.3-1.057l-0-0.003zM1.9 7.14h7.14v2.38h-7.14zM3.82 17.14v-5.72h5.22v6.68h-4.28c-0.522-0.011-0.94-0.437-0.94-0.96 0-0 0-0 0-0v0zM16.2 17.14c0 0.53-0.43 0.96-0.96 0.96v0h-4.28v-6.68h5.24zM18.1 9.52h-7.14v-2.38h7.14v2.38z"></path>
    </Icon>
  );
};

export default Gift;