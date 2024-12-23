import React from "react";
import Icon from "../Icon";
import cuid from "cuid";

const BookmarkAdd = (props) => {
  const uniqueId = cuid();
  return (
    <Icon uniqueId={uniqueId} {...props}>
      <title>bookmark-add</title>
      <path d="M12.38 7.8h-1.66v-1.68c0-0.26-0.22-0.46-0.48-0.46v0h-0.48c-0.26 0-0.48 0.2-0.48 0.46v0 1.68h-1.66c-0.26 0-0.48 0.2-0.48 0.48v0 0.46c0 0.28 0.22 0.48 0.48 0.48v0h1.66v1.68c0 0.26 0.22 0.46 0.48 0.46v0h0.48c0.26 0 0.48-0.2 0.48-0.46v0-1.68h1.66c0.26 0 0.48-0.2 0.48-0.48v0-0.46c0-0.28-0.22-0.48-0.48-0.48v0zM15.020 0.9h-10.020c-1.060 0-1.92 0.84-1.92 1.9v0 16.42c0 0.28 0.16 0.5 0.36 0.62v0c0.12 0.060 0.24 0.1 0.38 0.1s0.24-0.040 0.36-0.1v0l5.82-3.52 5.82 3.52c0.1 0.060 0.24 0.1 0.38 0.1v0c0 0 0 0 0 0 0.12 0 0.24-0.040 0.34-0.1v0c0.22-0.12 0.36-0.34 0.36-0.62v-16.46c-0.020-1.040-0.86-1.86-1.88-1.86v0zM15.48 17.96l-5.1-3.080c-0.12-0.060-0.24-0.1-0.38-0.1s-0.26 0.040-0.38 0.1v0l-5.1 3.080v-15.24c0.040-0.22 0.22-0.4 0.46-0.4 0 0 0 0 0.020 0v0h10.020c0 0 0 0 0 0 0.24 0 0.44 0.2 0.46 0.44v0z"></path>
    </Icon>
  );
};

export default BookmarkAdd;
