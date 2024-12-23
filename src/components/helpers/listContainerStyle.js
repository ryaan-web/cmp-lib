import { css } from "styled-components";

const listContainerStyle = css`
  background: #eceeef;
  border-radius: 4px;
  padding: 16px;
  font-size: 16px;
  line-height: 24px;
`;

const containerStyle = css`
  max-width: 90rem;
  padding: 0;
  margin: 0;
`;

const visuallyHidden = css`
  border: 0;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  width: 1px;
  margin: -1px;
  padding: 0;
  position: absolute;
  overflow: hidden;
`;

export default listContainerStyle;

export { containerStyle, visuallyHidden };
