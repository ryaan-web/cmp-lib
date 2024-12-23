import React from "react";
import Icon from "../Icon";
import cuid from "cuid";

const Delivery = (props) => {
  const uniqueId = cuid();
  return (
    <Icon uniqueId={uniqueId} {...props}>
      <title>delivery</title>
      <path d="M16.56 11.24c0.535 0.006 1.043 0.115 1.506 0.31l-0.026-0.010-1.8-6.22h0.64c0.53 0 0.96-0.43 0.96-0.96s-0.43-0.96-0.96-0.96v0h-1.18l-0.46-1.5c-0.034-0.107-0.082-0.2-0.142-0.283l0.002 0.003-0.080-0.080-0.18-0.16-0.1-0.040c-0.058-0.028-0.125-0.049-0.196-0.060l-0.004-0h-2.34c-0.042-0.006-0.089-0.010-0.138-0.010-0.53 0-0.96 0.43-0.96 0.96s0.43 0.96 0.96 0.96c0.049 0 0.097-0.004 0.143-0.011l-0.005 0.001h1.46l1.58 5.3-2.86 2.86c-0.351 0.349-0.836 0.565-1.37 0.565-1.074 0-1.945-0.871-1.945-1.945 0-0.539 0.22-1.028 0.574-1.38l0-0 0.48-0.46c0.153-0.169 0.246-0.394 0.246-0.642 0-0.511-0.399-0.929-0.903-0.958l-0.003-0h-3.84c-4.44 0.040-5.62 4.9-5.62 7.54 0.009 0.291 0.147 0.549 0.358 0.719l0.002 0.001c0.288-1.985 1.978-3.492 4.020-3.492 2.232 0 4.044 1.802 4.060 4.031v0.002c-0.019 0.346-0.062 0.668-0.127 0.982l0.007-0.042h4.3c-0.071-0.281-0.115-0.604-0.12-0.937l-0-0.003c0-0 0-0 0-0 0-2.246 1.815-4.069 4.059-4.080h0.001zM3.44 5.94h6.24c0.53 0 0.96-0.43 0.96-0.96s-0.43-0.96-0.96-0.96v0h-6.24c-0.53 0-0.96 0.43-0.96 0.96s0.43 0.96 0.96 0.96v0zM16.56 11.88c-1.9 0-3.44 1.54-3.44 3.44s1.54 3.44 3.44 3.44c1.9 0 3.44-1.54 3.44-3.44v0c0-1.9-1.54-3.44-3.44-3.44v0zM16.56 16.88c-0.006 0-0.013 0-0.020 0-0.862 0-1.56-0.698-1.56-1.56s0.698-1.56 1.56-1.56c0.862 0 1.56 0.698 1.56 1.56v0c-0.011 0.85-0.692 1.538-1.538 1.56l-0.002 0zM4.38 11.88c-1.9 0-3.44 1.54-3.44 3.44s1.54 3.44 3.44 3.44c1.9 0 3.44-1.54 3.44-3.44v0c0-1.9-1.54-3.44-3.44-3.44v0zM4.38 16.88c-0.862 0-1.56-0.698-1.56-1.56s0.698-1.56 1.56-1.56c0.862 0 1.56 0.698 1.56 1.56v0c-0.011 0.857-0.703 1.549-1.559 1.56l-0.001 0z"></path>
    </Icon>
  );
};

export default Delivery;
