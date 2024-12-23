import React from "react";
import Icon from "../Icon";
import cuid from "cuid";

const FoodIcon = (props) => {
  const uniqueId = cuid();
  return (
    <Icon uniqueId={uniqueId} {...props}>
      <g clipPath="url(#clip0_835:69868)">
        <path d="M15 10C15 12.74 12.76 15 10 15C7.24 15 5 12.74 5 10C5 7.26 7.26 5 10 5C12.74 5 15 7.24 15 10ZM20 4V16C20 18.26 18.26 20 16 20H4C1.76 20 0 18.26 0 16V4C0 1.74 1.76 0 4 0H16C18.26 0 20 1.74 20 4V4ZM18.34 4C18.34 2.74 17.26 1.66 16 1.66H4C2.76 1.66 1.66 2.74 1.66 4V16C1.66 17.26 2.76 18.34 4 18.34H16C17.26 18.34 18.34 17.26 18.34 16V4V4Z"></path>
      </g>
      <defs>
        <clipPath id="clip0_835:69868">
          <rect width="20" height="20"></rect>
        </clipPath>
      </defs>
    </Icon>
  );
};

export default FoodIcon;
