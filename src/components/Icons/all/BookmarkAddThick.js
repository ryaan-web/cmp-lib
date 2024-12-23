import React from "react";
import Icon from "../Icon";
import cuid from "cuid";

const BookmarkAddThick = (props) => {
  const uniqueId = cuid();
  return (
    <Icon uniqueId={uniqueId} {...props}>
      <title>bookmark-add-thick</title>
      <path d="M15.32 0h-10.64c-1.199 0.011-2.169 0.981-2.18 2.179v16.861c0.017 0.517 0.44 0.929 0.959 0.929 0.177 0 0.343-0.048 0.485-0.131l-0.005 0.002 6.060-3.76 6.060 3.76c0.142 0.088 0.315 0.14 0.499 0.14 0 0 0.001 0 0.001 0h-0c0.53 0 0.96-0.43 0.96-0.96v0-16.84c-0.011-1.206-0.992-2.18-2.2-2.18-0 0-0 0-0 0v0zM15.62 17.38l-5.14-3.18c-0.138-0.081-0.303-0.129-0.48-0.129s-0.342 0.048-0.485 0.131l0.005-0.002-5.14 3.18v-15.2c0.020-0.153 0.145-0.271 0.299-0.28l0.001-0h10.64c0.168 0.011 0.3 0.15 0.3 0.319 0 0 0 0 0 0.001v-0zM12.5 7.18h-1.56v-1.56c0-0.342-0.278-0.62-0.62-0.62v0h-0.64c-0.342 0-0.62 0.278-0.62 0.62v0 1.56h-1.56c-0.342 0-0.62 0.278-0.62 0.62v0 0.64c0 0.342 0.278 0.62 0.62 0.62v0h1.56v1.56c0 0.342 0.278 0.62 0.62 0.62v0h0.64c0.342 0 0.62-0.278 0.62-0.62v0-1.56h1.56c0.342 0 0.62-0.278 0.62-0.62v0-0.64c0-0.342-0.278-0.62-0.62-0.62v0z"></path>
    </Icon>
  );
};

export default BookmarkAddThick;
