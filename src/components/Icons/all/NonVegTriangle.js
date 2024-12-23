import React from "react";
import Icon from "../Icon";
import cuid from "cuid";

const NonVegTriangle = (props) => {
  const uniqueId = cuid();
  return (
    <Icon uniqueId={uniqueId} {...props}>
      <g clipPath="url(#clip0_835:69870)">
        <path d="M20 4V16C20 18.26 18.26 20 16 20H4C1.76 20 0 18.26 0 16V4C0 1.74 1.76 0 4 0H16C18.26 0 20 1.74 20 4ZM18.34 4C18.34 2.74 17.26 1.66 16 1.66H4C2.76 1.66 1.66 2.74 1.66 4V16C1.66 17.26 2.76 18.34 4 18.34H16C17.26 18.34 18.34 17.26 18.34 16V4Z"></path>
        <path d="M9.99996 3.75L15.8333 14.5833H4.16663L9.99996 3.75Z"></path>
      </g>
      <defs>
        <clipPath id="clip0_835:69870">
          <rect width="20" height="20"></rect>
        </clipPath>
      </defs>
    </Icon>
  );
};

export default NonVegTriangle;
