import React from "react";
import Icon from "../Icon";
import cuid from "cuid";

const CameraAdd = (props) => {
  const uniqueId = cuid();
  return (
    <Icon uniqueId={uniqueId} {...props}>
      <title>camera-add</title>
      <path d="M8.82 7.32c-0.020 0-0.040 0-0.060 0-2.32 0-4.2 1.86-4.24 4.16v0c0.040 2.32 1.92 4.18 4.24 4.18 0.020 0 0.040 0 0.060 0v0c0 0 0.020 0 0.040 0 2.32 0 4.2-1.86 4.24-4.18v0c-0.040-2.3-1.92-4.16-4.24-4.16-0.020 0-0.040 0-0.060 0h0.020zM8.82 14.22c-0.020 0-0.020 0-0.020 0-1.52 0-2.78-1.2-2.84-2.74v0c0.040-1.52 1.26-2.74 2.8-2.74 0.020 0 0.040 0 0.060 0v0c0 0 0.020 0 0.040 0 1.54 0 2.78 1.22 2.8 2.74v0c-0.060 1.54-1.3 2.74-2.84 2.74 0 0 0 0 0 0v0zM16.66 10.42c-0.12 0-0.24 0.1-0.24 0.24v0 4.34c0 1.42-1.16 2.56-2.58 2.56 0 0 0 0 0 0h-9.82c0 0 0 0 0 0-1.42 0-2.58-1.14-2.6-2.56v-6.22c0.020-1.34 1.1-2.42 2.44-2.42 0.020 0 0.020 0 0.040 0v0h0.38c0.3 0 0.54-0.16 0.66-0.4v-0.020l0.94-1.98c0.2-0.4 0.58-0.68 1.060-0.68v0h2.32c0 0 0 0 0 0 0.48 0 0.88 0.28 1.080 0.68v0l0.94 1.98c0.12 0.26 0.36 0.42 0.66 0.42h0.44s0-0.84 0-1.080c0-0.24-0.060-0.46-0.16-0.66v0.020l-0.58-1.28c-0.42-0.9-1.34-1.52-2.38-1.52 0 0 0 0 0 0h-2.32c0 0 0 0 0 0-1.060 0-1.96 0.62-2.38 1.52v0l-0.74 1.58c-2.1 0.020-3.8 1.72-3.82 3.8v0 6.22c0 0 0 0.020 0 0.020 0 2.22 1.8 4 4.020 4 0 0 0 0 0 0h9.82c0 0 0 0 0 0 2.2 0 4-1.78 4-3.98v-4.34c0-0.14-0.1-0.24-0.22-0.24v0zM19.28 5.42h-1.9v-1.9c0-0.4-0.32-0.72-0.72-0.72s-0.7 0.32-0.7 0.72v0 1.9h-1.92c-0.38 0-0.7 0.32-0.7 0.7s0.32 0.72 0.7 0.72v0h1.92v1.9c0 0.4 0.32 0.72 0.7 0.72s0.72-0.32 0.72-0.72v0-1.9h1.9c0.4 0 0.72-0.32 0.72-0.72s-0.32-0.7-0.72-0.7v0z"></path>
    </Icon>
  );
};

export default CameraAdd;
