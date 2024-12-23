import React from "react";
import Icon from "../Icon";
import cuid from "cuid";

const AppleFill = (props) => {
  const uniqueId = cuid();
  return (
    <Icon uniqueId={uniqueId} {...props}>
      <title>apple-fill</title>
      <path d="M12.32 3.66c-0.7 0.9-1.9 1.6-3.060 1.56-0.22-1.16 0.32-2.36 1-3.16 0.72-0.88 1.96-1.58 3.040-1.64 0.18 1.22-0.32 2.4-0.98 3.24zM18.080 15.080c-0.46 1.040-0.68 1.52-1.28 2.44-0.84 1.28-2.020 2.88-3.5 2.9-1.3 0-1.62-0.86-3.4-0.84-1.76 0-2.14 0.86-3.44 0.84-1.46-0.020-2.58-1.46-3.42-2.74-2.34-3.6-2.58-7.82-1.14-10.060 1.020-1.58 2.64-2.52 4.18-2.52s2.52 0.86 3.8 0.86c1.26 0 2.020-0.86 3.8-0.86 1.36 0 2.8 0.74 3.82 2.020-3.36 1.86-2.8 6.68 0.58 7.96z"></path>
    </Icon>
  );
};

export default AppleFill;
