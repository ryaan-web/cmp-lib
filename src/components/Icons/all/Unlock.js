import React from "react";
import Icon from "../Icon";
import cuid from "cuid";

const Unlock = (props) => {
  const uniqueId = cuid();
  return (
    <Icon uniqueId={uniqueId} {...props}>
      <title>unlock</title>
      <path d="M17.5 7.62h-11.88v-1.26c0.303-2.106 2.049-3.721 4.19-3.82l0.010-0c1.401 0.001 2.626 0.756 3.29 1.882l0.010 0.018c0.227 0.325 0.599 0.535 1.020 0.535 0.683 0 1.237-0.552 1.24-1.235v-0c-0.002-0.174-0.039-0.338-0.103-0.488l0.003 0.008c-0.043-0.156-0.119-0.29-0.221-0.401l0.001 0.001c-1.132-1.725-3.054-2.85-5.239-2.86h-0.001c-3.516 0.011-6.366 2.847-6.4 6.357l-0 0.003v1.26h-0.94c-0 0-0 0-0 0-0.678 0-1.229 0.544-1.24 1.219l-0 0.001v9.92c0 0 0 0 0 0 0 0.685 0.555 1.24 1.24 1.24 0.007 0 0.014-0 0.021-0l-0.001 0h15c0.006 0 0.013 0 0.020 0 0.685 0 1.24-0.555 1.24-1.24 0-0 0-0 0-0v0-9.92c-0.011-0.676-0.562-1.22-1.24-1.22-0.007 0-0.014 0-0.021 0l0.001-0zM9.82 16.28c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5c1.381 0 2.5 1.119 2.5 2.5v0c-0.011 1.372-1.126 2.48-2.5 2.48-0 0-0 0-0 0v0z"></path>
    </Icon>
  );
};

export default Unlock;
