import React from "react";
import Icon from "../Icon";
import cuid from "cuid";

const HorizontalThreeDots = (props) => {
  const uniqueId = cuid();
  return (
    <Icon uniqueId={uniqueId} {...props}>
      <path d="M20 10C20 11.3142 18.9342 12.38 17.62 12.38C16.3058 12.38 15.24 11.3142 15.24 10C15.24 8.68583 16.3058 7.62 17.62 7.62C18.9342 7.62 20 8.68583 20 10ZM10 7.62C8.68583 7.62 7.62 8.68583 7.62 10C7.62 11.3142 8.68583 12.38 10 12.38C11.3142 12.38 12.38 11.3142 12.38 10C12.38 8.68583 11.3142 7.62 10 7.62ZM2.38 7.62C1.06583 7.62 0 8.68583 0 10C0 11.3142 1.06583 12.38 2.38 12.38C3.69417 12.38 4.76 11.3142 4.76 10C4.76 8.68583 3.69417 7.62 2.38 7.62Z"></path>
    </Icon>
  );
};

export default HorizontalThreeDots;
