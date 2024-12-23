import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { grey, black } from "../tokens/color";
import _noop from "lodash-es/noop";
import { cloneChildren } from "../helpers/commonHelper";

const MenuItem = (props) => {
  const {
    leftIcon = null,
    leftNode = null,
    centered = false,
    value = "",
    label = "",
    desc = "",
    disabled = false,
    selected = false,
    isCompact = false,
    fontSize = "1.8rem",
    bold = "", // may or may not be passed
    id = "", // Should be passed
    keySelected = false, // Should be passed
    _passClick = _noop, // Should be passed from wrapper component
    className = "",
    noMarginTop = false,
    isMultiliner = false,
    isVisible = true,
  } = props;

  const handleClick = (value, label) => (e) => {
    e.preventDefault();
    !disabled && _passClick(value, label);
  };

  return (
    <MenuItem.Wrapper
      className={className}
      onClick={handleClick(value, label)}
      isSelected={selected}
      id={selected ? id + "-selected" : id + "-" + value}
      aria-label={label}
      isKeySelected={keySelected}
      isCompact={isCompact}
      disabled={disabled}
      isVisible={isVisible}
    >
      <LeftSection hasDesc={!!desc.length} centered={centered}>
        {leftIcon &&
          cloneChildren(leftIcon, {
            size: 16,
            color: disabled ? grey.z400 : grey.z800,
          })}
        {leftNode && cloneChildren(leftNode)}
        <Span
          isSelected={selected}
          noMarginTop={noMarginTop}
          hasLeftIcon={!!leftIcon || !!leftNode}
          disabled={disabled}
          fontSize={fontSize}
          isMultiliner={isMultiliner}
          centered={centered}
        >
          {getBoldLabel(label, bold)}
        </Span>
      </LeftSection>
      {!!desc && <DescSpan isKeySelected={keySelected}>{desc}</DescSpan>}
    </MenuItem.Wrapper>
  );
};

const getBoldLabel = (label, str) => {
  if (!str) return label;
  const pattern = new RegExp(str, "i");
  const match = label.match(pattern);
  label = label.replace(pattern, "__anchor__");
  const splitElem = label.split("__anchor__");
  return splitElem.map((part, i) => {
    const boldElem = i != splitElem.length - 1 ? <Bold>{match}</Bold> : null;
    return (
      <React.Fragment key={part}>
        {part}
        {boldElem}
      </React.Fragment>
    );
  });
};

const Bold = styled.span`
  font-weight: 500;
  font-size: inherit;
  color: ${black};
`;

MenuItem.propTypes = {
  leftIcon: PropTypes.node,
  leftNode: PropTypes.node,
  centered: PropTypes.bool,
  text: PropTypes.string,
  label: PropTypes.string,
  desc: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  disabled: PropTypes.bool,
  selected: PropTypes.bool,
  bold: PropTypes.string,
  isVisible: PropTypes.bool,
  keySelected: PropTypes.bool,
  id: PropTypes.string,
  _passClick: PropTypes.func,
  isCompact: PropTypes.bool,
  toRight: PropTypes.bool,
  fontSize: PropTypes.string,
  className: PropTypes.string,
  noMarginTop: PropTypes.bool,
  isMultiliner: PropTypes.bool,
};

const DescSpan = styled.span`
  font-size: 1.5rem;
  color: ${(props) => (props.isKeySelected ? grey.z800 : grey.z400)};
  white-space: nowrap;
  margin-left: 2rem;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 300;
`;

const LeftSection = styled.span`
  display: flex;
  align-items: ${({ centered }) => (centered ? "center" : "unset")};
  max-width: ${(props) => (props.hasDesc ? "65%" : "100%")};
`;

const Span = styled.span`
  margin-left: ${(props) => (props.hasLeftIcon ? "1rem" : "0")};
  margin-top: ${({ noMarginTop }) => (noMarginTop ? 0 : "0.3rem")};
  font-size: ${(props) => props.fontSize};
  color: ${(props) => (props.disabled ? grey.z400 : grey.z800)};
  font-weight: 300;
  align-items: ${({ centered }) => (centered ? "center" : "unset")};
  justify-content: space-between;
  ${({ isMultiliner }) =>
    !isMultiliner &&
    css`
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    `};
  text-align: left;
`;

MenuItem.Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: ${(props) => (props.isCompact ? "1rem 1rem" : "1rem 2rem")};
  cursor: ${(props) => (props.disabled ? "initial" : "pointer")};
  display: ${(props) => (props.isVisible ? "block" : "none")};
  background-color: ${(props) =>
    props.isKeySelected
      ? grey.z95
      : props.isSelected
        ? "#E9F2FC"
        : "initial"}; // TODO
  ${(props) =>
    !props.disabled &&
    css`
      &:hover {
        background-color: ${grey.z95};
      }
      &:hover > span {
        color: ${grey.z800};
      }
    `}
`;

export {MenuItem};
