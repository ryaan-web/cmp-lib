import React from "react";
import Icon from "../Icon";
import cuid from "cuid";

const Instruction = (props) => {
  const uniqueId = cuid();
  return (
    <Icon uniqueId={uniqueId} {...props}>
      <title>instruction</title>
      <path d="M16.66 4.28v1.44c0 0.133-0.107 0.24-0.24 0.24v0h-12.84c-0.133 0-0.24-0.107-0.24-0.24v0-1.44c0-0.133 0.107-0.24 0.24-0.24v0h12.84c0.133 0 0.24 0.107 0.24 0.24v0zM14.52 9.040h-10.94c-0.133 0-0.24 0.107-0.24 0.24v0 1.44c0 0.133 0.107 0.24 0.24 0.24v0h10.94c0.133 0 0.24-0.107 0.24-0.24v0-1.44c0-0.133-0.107-0.24-0.24-0.24v0zM8.82 14.040h-5.24c-0.133 0-0.24 0.107-0.24 0.24v0 1.44c0 0.133 0.107 0.24 0.24 0.24v0h5.24c0.124-0.011 0.22-0.114 0.22-0.239 0-0 0-0.001 0-0.001v0-1.44c0-0 0-0.001 0-0.001 0-0.126-0.096-0.229-0.219-0.239l-0.001-0z"></path>
    </Icon>
  );
};

export default Instruction;
