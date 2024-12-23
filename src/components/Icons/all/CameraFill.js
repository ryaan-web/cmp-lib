import React from "react";
import Icon from "../Icon";
import cuid from "cuid";

const CameraFill = (props) => {
  const uniqueId = cuid();
  return (
    <Icon uniqueId={uniqueId} {...props}>
      <title>camera-fill</title>
      <path d="M15.82 4.76h-1.080l-0.86-1.72c-0.4-0.88-1.28-1.48-2.3-1.5v0h-3.36c-1.1 0.040-2.040 0.74-2.4 1.72v0.020l-0.6 1.48h-1.18c-2.24 0-4.040 1.8-4.040 4.040v6.3c0 2.3 1.88 4.18 4.2 4.18v0h11.62c2.3 0 4.18-1.88 4.18-4.18v-6.12c0 0 0-0.020 0-0.020 0-2.32-1.88-4.2-4.18-4.2v0zM10 15.84c-0.020 0-0.040 0-0.040 0-2.32 0-4.2-1.86-4.24-4.18v0c0.040-2.3 1.92-4.16 4.22-4.16 0.020 0 0.040 0 0.060 0v0c0.020 0 0.040 0 0.060 0 2.32 0 4.18 1.86 4.22 4.16v0c-0.040 2.32-1.92 4.18-4.24 4.18 0 0-0.020 0-0.040 0v0zM16.2 9.64c-0.54 0-0.96-0.42-0.96-0.94s0.42-0.96 0.96-0.96c0.52 0 0.94 0.42 0.94 0.96v0c0 0.52-0.42 0.94-0.94 0.94v0zM12.86 11.66c0 1.52-1.28 2.74-2.86 2.74s-2.86-1.22-2.86-2.74c0-1.52 1.28-2.74 2.86-2.74s2.86 1.22 2.86 2.74z"></path>
    </Icon>
  );
};

export default CameraFill;
