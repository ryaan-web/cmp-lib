import React from "react";
import Icon from "../Icon";
import cuid from "cuid";

const ShareThick = (props) => {
  const uniqueId = cuid();
  return (
    <Icon uniqueId={uniqueId} {...props}>
      <title>share-thick</title>
      <path d="M0.96 19.22h-0.18c-0.44-0.086-0.769-0.463-0.78-0.919l-0-0.001c-0.12-4.14 0.96-7.42 3.18-9.72 1.617-1.626 3.757-2.729 6.147-3.035l0.053-0.005v-3.82c0.027-0.509 0.446-0.912 0.959-0.912 0.228 0 0.438 0.080 0.603 0.213l-0.002-0.001 8.76 7.8c0.185 0.175 0.3 0.423 0.3 0.697 0 0.001 0 0.002 0 0.003v-0c0 0.001 0 0.002 0 0.003 0 0.274-0.115 0.522-0.3 0.697l-0 0-8.76 7.88c-0.165 0.138-0.379 0.221-0.613 0.221-0.14 0-0.273-0.030-0.393-0.084l0.006 0.002c-0.324-0.151-0.547-0.468-0.56-0.838l-0-0.002v-3.8c-0.001 0-0.003 0-0.005 0-3.407 0-6.331 2.062-7.594 5.006l-0.021 0.054c-0.145 0.313-0.444 0.532-0.797 0.56l-0.003 0zM10.32 11.72c0 0 0 0 0 0 0.523 0 0.949 0.418 0.96 0.939l0 0.001v2.58l6.4-5.72-6.42-5.72v2.6c0 0.53-0.43 0.96-0.96 0.96v0c-2.266 0.098-4.292 1.050-5.78 2.54l-0 0c-1.232 1.31-2.089 2.985-2.393 4.846l-0.007 0.054c1.96-2.040 4.7-3.080 8.2-3.080z"></path>
    </Icon>
  );
};

export default ShareThick;
