import React from "react";
import Icon from "../Icon";
import cuid from "cuid";

const MoonEmpty = (props) => {
  const uniqueId = cuid();
  return (
    <Icon uniqueId={uniqueId} {...props}>
      <title>moon-empty</title>
      <path d="M4.8 3.12c-0.1 1.1-0.1 2.3 0.1 3.4 0.9 4.5 4.5 8.1 8.9 8.9 0.7 0.1 1.5 0.2 2.2 0.2 0.4 0 0.8 0 1.2-0.1-1.7 2.1-4.2 3.3-6.9 3.3-0.4 0-0.7 0-1.1-0.1-4-0.5-7.2-3.7-7.7-7.7-0.3-3 0.9-6 3.3-7.9zM6.5 0.42h-0.1c-4.1 1.7-6.9 6-6.3 10.9 0.6 4.7 4.4 8.5 9 9 0.4 0.1 0.9 0.1 1.3 0.1 4.3 0 8-2.6 9.6-6.4 0.1-0.2-0.1-0.5-0.3-0.5h-0.1c-1.1 0.4-2.2 0.6-3.4 0.6-0.6 0-1.3-0.1-1.9-0.2-3.9-0.8-7-3.9-7.8-7.8-0.5-1.8-0.3-3.6 0.4-5.2 0-0.3-0.1-0.5-0.4-0.5z"></path>
    </Icon>
  );
};

export default MoonEmpty;
