import React from "react";
import Icon from "../Icon";
import cuid from "cuid";

const FacebookCircle = (props) => {
  const uniqueId = cuid();
  return (
    <Icon uniqueId={uniqueId} {...props}>
      <path d="M0 10C0 4.5 4.5 0 10 0C15.5 0 20 4.5 20 10C20 15.5 15.5 20 10 20C4.5 20 0 15.5 0 10ZM10.75 15.4375V10.1875H12.1875L12.375 8.375H10.75V7.5C10.75 7.0625 10.8125 6.8125 11.5 6.8125H12.375V5H10.9375C9.1875 5 8.625 5.875 8.625 7.3125V8.375H7.5V10.1875H8.5625V15.4375C8.5625 15.4375 10.75 15.4375 10.75 15.4375Z"></path>
    </Icon>
  );
};

export default FacebookCircle;
