import React from "react";
import Icon from "../Icon";
import cuid from "cuid";

const PlusCircleFill = (props) => {
  const uniqueId = cuid();
  return (
    <Icon uniqueId={uniqueId} {...props}>
      <g clipPath="url(#clip0)">
        <path d="M14.5625 10.5C14.4375 10.625 14.25 10.75 14 10.75H10.75V14C10.75 14.1875 10.625 14.375 10.5 14.5C10.375 14.625 10.1875 14.75 9.9375 14.75C9.5 14.75 9.1875 14.4375 9.1875 14V10.75H6C5.5625 10.75 5.25 10.4375 5.25 10C5.25 9.5625 5.5625 9.25 6 9.25H9.25V6C9.25 5.5625 9.5625 5.25 10 5.25C10.4375 5.25 10.75 5.5625 10.75 6V9.25H14C14.4375 9.25 14.75 9.5625 14.75 10C14.75 10.1875 14.6875 10.375 14.5625 10.5ZM17.0625 2.9375C13.125 -0.9375 6.8125 -0.9375 2.875 2.9375C-1 6.8125 -1 13.1875 2.875 17.0625C6.8125 21 13.125 21 17.0625 17.0625C21 13.1875 21 6.8125 17.0625 2.9375Z"></path>
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="20" height="20"></rect>
        </clipPath>
      </defs>
    </Icon>
  );
};

export default PlusCircleFill;
