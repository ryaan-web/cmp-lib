import React from "react";
import Icon from "../Icon";
import cuid from "cuid";

const LinkedinFill = (props) => {
  const uniqueId = cuid();
  return (
    <Icon uniqueId={uniqueId} {...props}>
      <title>linkedin-fill</title>
      <path d="M4.54 6.62v12.88h-4.28v-12.88h4.28zM4.82 2.64c0 1.24-0.92 2.22-2.42 2.22h-0.020c-1.44 0-2.38-0.98-2.38-2.22 0-1.26 0.96-2.22 2.42-2.22s2.38 0.96 2.4 2.22zM20 12.12v7.38h-4.28v-6.88c0-1.74-0.62-2.92-2.18-2.92-1.18 0-1.88 0.8-2.2 1.56-0.12 0.28-0.14 0.66-0.14 1.060v7.18h-4.28c0 0 0.060-11.66 0-12.88h4.28v1.82c0.58-0.86 1.58-2.12 3.86-2.12 2.82 0 4.94 1.84 4.94 5.8z"></path>
    </Icon>
  );
};

export default LinkedinFill;
