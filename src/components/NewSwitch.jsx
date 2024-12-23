import { useState } from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

import grey from "./tokens/color/grey";
import red from "./tokens/color/red";

import { fontSizes, fontWeights, lineHeight } from "./tokens/typography";
import misc from "./tokens/misc";
import getUniqueId from "./helpers/uniqueIdHelper";
import { onKeySelect } from "./helpers/commonHelper";

let size = 22;
let spacing = 2;
const totalWidth = 38;
const slideLength = totalWidth - (size + 2 * spacing + 1);

const NewSwitch = (props) => {
  const {
    labelPosition,
    offLabel,
    onLabel,
    hideAccessibleLabels = false,
    readOnly,
    id,
  } = props;
  const [on, toggleOn] = useState(props.on);

  const onToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (readOnly) return;
    toggleOn(!on);
    props.onToggle(!on);
  };

  const labelId = getUniqueId("switch-label");

  const checkbox = (
    <NewSwitch.checkbox type="checkbox" checked={on} readOnly id={id} />
  );
  const label = (
    <NewSwitch.Label
      labelPosition={labelPosition}
      key="switchLabel"
      id={labelId}
      aria-disabled={readOnly}
    >
      <span aria-hidden={on}>{offLabel}</span>
      <span aria-hidden={!on}>{onLabel}</span>
    </NewSwitch.Label>
  );

  const toggle = (
    <NewSwitch.Toggle
      on={on}
      readOnly={props.readOnly}
      key="switchToggle"
      aria-labelledby={labelId}
      aria-disabled={readOnly}
    />
  );

  let content = <>{checkbox}</>;

  if (labelPosition == "left") {
    content = (
      <>
        {checkbox}
        {hideAccessibleLabels ? null : label}
        {toggle}
      </>
    );
  } else if (labelPosition == "right") {
    content = (
      <>
        {checkbox}
        {toggle}
        {hideAccessibleLabels ? null : label}
      </>
    );
  }
  return (
    <SwitchContainer
      onClick={onToggle}
      onKeyDown={onKeySelect(onToggle)}
      tabIndex={readOnly ? -1 : 0}
      {...props}
      aria-disabled={readOnly}
    >
      {content}
    </SwitchContainer>
  );
};

const SwitchContainer = styled.div`
  display: inline-flex;
  height: ${(size + 6 * spacing) / 10}rem;
  align-items: center;
  vertical-align: middle;
  position: relative;
  cursor: pointer;
  width: ${(props) => props.width || "10rem"};
  justify-content: ${(props) => props.justifyContent};
  input:focus ~ ${NewSwitch.Toggle} {
    box-shadow: 0 0 0 2px ${red.z500};
  }

  padding: 0 3rem;
  ${(props) =>
    props.readOnly &&
    css`
      opacity: 0.4;
    `}

  @media screen and (-ms-high-contrast: active) {
    outline: 1px dotted white;
    outline-offset: 0.25em;
  }

  @media screen and (prefers-color-scheme: dark) {
    & {
      background-color: black;
    }
  }
`;

NewSwitch.checkbox = styled.input.attrs({ type: "checkbox" })`
  top: auto;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  width: 0;
  height: 0;
  white-space: nowrap;
  visibility: hidden;
`;

NewSwitch.Toggle = styled.span`
  position: relative;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  appearance: none;
  bottom: 0;
  display: inline-flex;
  vertical-align: middle;
  align-items: center;
  justify-content: center;
  width: ${totalWidth / 10}rem;
  height: ${(size + 2 * spacing) / 10}rem;
  margin-top: 0;
  margin-left: 0;
  background-color: ${(props) => (props.on === true ? red.z_red : "#ccc")};

  transition:
    background-color ${misc.shortAnimDuration} ease,
    opacity ${misc.shortAnimDuration};
  border-radius: ${(size + 2 * spacing) / 10}rem;
  outline: none;

  ${SwitchContainer}:hover &,
  ${SwitchContainer}:focus &,
  &:active {
    box-shadow: 0 0 0.5em #333;
  }
  @media screen and (prefers-reduced-motion: reduce) {
    & {
      transition: none;
    }
  }

  @media screen and (prefers-color-scheme: dark) {
    ${SwitchContainer}:hover &,
  ${SwitchContainer}:focus &,
  &:active {
      box-shadow: none;
    }
  }
  :before {
    position: absolute;
    content: "";
    height: ${size / 10}rem;
    width: ${size / 10}rem;
    left: ${spacing / 10}rem;
    background-color: white;
    margin-top: 0;
    margin-left: 0;
    outline: none;
    border-radius: 50%;
    transition:
      transform ${misc.shortAnimDuration} ease,
      opacity ${misc.shortAnimDuration};
    transform: translateX(
      ${(props) => (props.on === true ? slideLength / 10 + "rem" : 0)}
    );

    border: 0.5px solid rgba(0, 0, 0, 0.04);
    box-shadow: 0 ${(props) => (props.on === true ? 0.2 : 0.1)}rem 0.4rem
      rgba(28, 28, 28, 0.1);
    &:active {
      outline: none;
    }
    @media screen and (prefers-reduced-motion: reduce) {
      & {
        transition: none;
      }
    }

    @media screen and (prefers-color-scheme: dark) {
      background-color: black;
    }
  }

  ${(props) =>
    props.labelPosition === "left"
      ? css`
          margin-left: 3rem;
        `
      : css`
          margin-right: 3rem;
        `}
`;

NewSwitch.Label = styled.label`
  height: ${size / 10}rem;
  cursor: pointer;
  /* position: relative; */
  span {
    display: block;
    /* position: absolute; */
    font-size: ${fontSizes.z300};
    font-weight: ${fontWeights.medium};
    letter-spacing: 1px;
    text-transform: uppercase;
    color: ${grey.z700};
    ${SwitchContainer}:hover &,
    ${SwitchContainer}:focus & {
      color: ${red.z_red};
    }
    margin-left: ${(props) =>
      props.labelPosition == "left" ? "0" : spacing.small};
    margin-right: ${(props) =>
      props.labelPosition == "left" ? spacing.small : "0"};
    /* 
    In order to make the switch always the same width
    we are setting a fixed height and overlapping the switch labels
    */
    height: ${size / 10}rem;
    line-height: ${lineHeight.regular};
    &:last-child {
      /* Moves the second label up to overlap the first */
      margin-top: -2rem;
    }
    &[aria-hidden="true"] {
      visibility: hidden;
    }
    /* if the label is empty, then remove the node so it doesn't create a margin */
    &:empty {
      display: none;
    }

    @media screen and (prefers-color-scheme: dark) {
      & {
        color: white;
      }

      ${SwitchContainer}:hover &,
        ${SwitchContainer}:focus & {
        color: #fff;
      }
    }
  }
`;

NewSwitch.propTypes = {
  /** Function called on toggle */
  onToggle: PropTypes.func,
  /** State of the toggle */
  on: PropTypes.bool,
  /** Labels to show, import for accessibility */
  accessibleLabels: PropTypes.arrayOf(PropTypes.string),
  /** Hides accessibility labels */
  hideAccessibleLabels: PropTypes.bool,
  /** Locked switch */
  readOnly: PropTypes.bool,
  /** Label on left side */
  labelPosition: PropTypes.oneOf(["right", "left"]),
  justifyContent: PropTypes.oneOf([
    "right",
    "left",
    "center",
    "space-around",
    "space-between",
    "space-evenly",
  ]),
  id: PropTypes.string,
};

NewSwitch.defaultProps = {
  onToggle: null,
  on: false,
  accessibleLabels: ["Enabled", "Disabled"],
  hideAccessibleLabels: false,
  readOnly: false,
  labelPosition: "right",
  justifyContent: "start",
  id: getUniqueId("switchCheckbox"),
};

export {NewSwitch};
