import React from "react";
import Icon from "../Icon";
import cuid from "cuid";

const AddEdit = (props) => {
  const uniqueId = cuid();
  return (
    <Icon uniqueId={uniqueId} {...props}>
      <path d="M16.66 11.9c-0.522 0.011-0.94 0.437-0.94 0.96 0 0 0 0 0 0v-0 3.32c0 0.006 0 0.013 0 0.020 0 1.049-0.851 1.9-1.9 1.9-0 0-0 0-0 0h-10c-0.006 0-0.013 0-0.020 0-1.049 0-1.9-0.851-1.9-1.9 0-0.007 0-0.014 0-0.021v0.001-10c0-0 0-0 0-0 0-1.049 0.851-1.9 1.9-1.9 0.007 0 0.014 0 0.021 0h3.319c0.467-0.070 0.822-0.469 0.822-0.95s-0.354-0.88-0.817-0.949l-0.005-0.001h-3.32c-0 0-0 0-0 0-2.103 0-3.809 1.699-3.82 3.799v10.001c0 2.11 1.71 3.82 3.82 3.82v0h10c2.101-0.011 3.8-1.717 3.8-3.82 0-0 0-0 0-0v0-3.32c0-0.53-0.43-0.96-0.96-0.96v0zM18.96 1.040c-0.648-0.647-1.542-1.047-2.53-1.047s-1.882 0.4-2.53 1.047l0-0-6.9 6.92c-0.072 0.074-0.132 0.16-0.178 0.254l-0.003 0.006v0.080s0 0 0 0.060l-1.54 5.18c-0.027 0.084-0.042 0.18-0.042 0.28 0 0.265 0.108 0.506 0.282 0.68l0 0c0.174 0.173 0.413 0.28 0.678 0.28 0.001 0 0.002 0 0.002 0h-0c0.039 0.006 0.084 0.009 0.13 0.009s0.091-0.003 0.135-0.009l-0.005 0.001 5.18-1.5h0.14c0.1-0.048 0.186-0.108 0.26-0.18l-0 0 6.92-7c0.647-0.648 1.047-1.542 1.047-2.53s-0.4-1.882-1.047-2.53l0 0zM7.62 12.38l0.52-1.9 1.38 1.38zM17.62 4.76l-6.2 6.22-2.4-2.36 6.22-6.24c0.305-0.305 0.725-0.493 1.19-0.493 0.929 0 1.683 0.753 1.683 1.683 0 0.465-0.188 0.885-0.493 1.19v0z"></path>
    </Icon>
  );
};

export default AddEdit;
