import React from "react";
import Icon from "../Icon";
import cuid from "cuid";

const RadioCircle = (props) => {
  const uniqueId = cuid();
  return (
    <Icon uniqueId={uniqueId} {...props}>
      <path d="M10 1.42C14.7387 1.42 18.58 5.26125 18.58 10C18.58 14.7387 14.7387 18.58 10 18.58C5.26125 18.58 1.42 14.7387 1.42 10C1.42 5.26125 5.26125 1.42 10 1.42V1.42ZM10 0C4.47688 0 0 4.47688 0 10C0 15.5231 4.47688 20 10 20C15.5231 20 20 15.5231 20 10C20 4.47688 15.5231 0 10 0Z"></path>
    </Icon>
  );
};

export default RadioCircle;
