import React from "react";
import Icon from "../Icon";
import cuid from "cuid";

const DoubleArrowLeft = (props) => {
  const uniqueId = cuid();
  return (
    <Icon uniqueId={uniqueId} {...props}>
      <title>double-arrow-left</title>
      <path d="M9.66,4.64a.77.77,0,0,1,0,1.06L5.18,10.16l4.48,4.48a.77.77,0,0,1,0,1.06.75.75,0,0,1-1.06,0l-5-5a.74.74,0,0,1,0-1.06l5-5A.74.74,0,0,1,9.66,4.64Z"></path>
      <path d="M15.91,4.64a.77.77,0,0,1,0,1.06l-4.48,4.46,4.48,4.48a.77.77,0,0,1,0,1.06.75.75,0,0,1-1.06,0l-5-5a.74.74,0,0,1,0-1.06l5-5A.74.74,0,0,1,15.91,4.64Z"></path>
    </Icon>
  );
};

export default DoubleArrowLeft;
