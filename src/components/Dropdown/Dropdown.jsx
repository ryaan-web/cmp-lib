import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
// import { grey, white, green, red } from "../tokens/color";

import grey from "../tokens/color/grey";
import white from "../tokens/color/white";
import green from "../tokens/color/green";
import red from "../tokens/color/red";
import DownTriangle from "../Icons/all/DownTriangle";
import { cloneChildren, onKeyChoose } from "../helpers/commonHelper";
import OnClickOutside from "../HOC/OnClickOutside";
import misc from "../tokens/misc";

const getLeftSectionMargin = ({ isCompact, isCentered }) => {
  if (isCentered) {
    return "0 2rem";
  }

  return `0 ${isCompact ? 0.5 : 2}rem 0 0`;
};

const Dropdown = (props) => {
  const {
    value,
    width,
    rightIcon,
    onSelect,
    children,
    leftIcon = null,
    leftNode = null,
    helperText = "",
    errorText = "",
    showArrow = false,
    className = "",
    isCompact = false,
    borderColor = "",
    isNaked,
    isTransparent,
    staticHeader,
    maxMenuHeight,
    isCentered,
    placeholder,
    shouldChange,
    noMarginTop = false,
    heading = "",
    fontSize = "",
    borderRadius = "",
    customPadding = "",
  } = props;
  const [isMenuOpen, toggleMenu] = useState(false);
  const [label, setLabel] = useState(value);
  const [selectedChild, setSelectedChild] = useState(0);
  const toggle = () => toggleMenu(!isMenuOpen);
  const openMenu = () => toggleMenu(true);
  const closeMenu = () => {
    toggleMenu(false);
    setSelectedChild(0);
  };
  const changeOnSelect = (val, label) => {
    setLabel(label);
    onSelect(val);
    setSelectedChild(0);
  };
  const handleOnSelect = (val, label) => {
    if (typeof shouldChange === "function") {
      if (shouldChange(val)) {
        changeOnSelect(val, label);
      }
    } else {
      changeOnSelect(val, label);
    }
    closeMenu();
  };

  useEffect(() => {
    setLabel(value);
  }, [value]);

  const randomId = "id-" + (Math.random() * 10).toFixed(3);

  const showText = errorText ? errorText : helperText ? helperText : "";
  const isError = !!errorText;

  const handleItemSelect = (e, key) => {
    e.preventDefault();
    if (children && children.length) {
      const handleUpKeyPress = () => {
        if (!selectedChild) {
          setSelectedChild(1);
        } else {
          if (selectedChild !== 1) setSelectedChild(selectedChild - 1);
        }
      };

      const handleDownKeyPress = () => {
        if (!selectedChild) setSelectedChild(1);
        if (selectedChild !== children.length)
          setSelectedChild(selectedChild + 1);
      };

      const handleEnterKeyPress = () => {
        if (selectedChild) {
          const selected = childValueLabelMapping[selectedChild] || {};
          const { value = "", label = "" } = selected;
          handleOnSelect(value, label);
        }
      };

      switch (key) {
        case "UP":
          handleUpKeyPress();
          break;
        case "DOWN":
          handleDownKeyPress();
          break;
        case "ENTER":
          handleEnterKeyPress();
          break;
      }
    }
  };

  const childValueLabelMapping = {};
  const renderModifiedChildren = (children) => {
    const modifiedChildren = React.Children.map(children, (ch, i) => {
      const keySelected = selectedChild === i + 1;
      childValueLabelMapping[i + 1] = {
        value: ch.props.value,
        label: ch.props.label,
      };
      return cloneChildren(ch, {
        _passClick: handleOnSelect,
        id: randomId,
        keySelected,
      });
    });
    return modifiedChildren;
    // return children.map((ch, i) => {
    //   const keySelected = selectedChild === i + 1;
    //   childValueLabelMapping[i + 1] = {
    //     value: ch.props.value,
    //     label: ch.props.label
    //   };
    //   return cloneChildren(ch, {
    //     _passClick: handleOnSelect,
    //     id: randomId,
    //     keySelected
    //   });
    // });
  };

  const getLeftSectionText = () => {
    if (staticHeader) {
      return cloneChildren(staticHeader);
    }

    if (label) {
      return label;
    }

    return placeholder;
  };

  return (
    <OnClickOutside
      handleClickOutside={closeMenu}
      width={width}
      className={className}
    >
      <DropdownWrapper
        width={width}
        aria-describedby={`dropdown-help-${randomId}`}
        aria-activedescendant={randomId + "-selected"}
        onFocus={openMenu}
        onBlur={closeMenu}
        onKeyDown={onKeyChoose(handleItemSelect)}
        tabIndex="0"
      >
        <HeaderWrapper
          isMenuOpen={isMenuOpen}
          isError={isError}
          onMouseDown={toggle}
          isCompact={isCompact}
          borderColor={borderColor}
          isNaked={isNaked}
          isTransparent={isTransparent}
          heading={heading}
          borderRadius={borderRadius}
          customPadding={customPadding}
        >
          <LeftSection
            isCompact={isCompact}
            isTransparent={isTransparent}
            isCentered={isCentered}
          >
            {heading && <Heading>{heading}</Heading>}
            <LeftSectionContent isCentered={isCentered}>
              {!!leftIcon &&
                cloneChildren(leftIcon, {
                  size: heading ? 13 : 16,
                  color: isTransparent ? white : grey.z800,
                })}
              {!!leftNode && !leftIcon && cloneChildren(leftNode)}
              <Span
                hasLeftIcon={!!leftIcon || !!leftNode}
                isTransparent={isTransparent}
                hasNoMargin={isNaked || noMarginTop}
                isPlaceholder={!label}
                heading={heading}
                fontSize={fontSize}
              >
                {getLeftSectionText()}
              </Span>
            </LeftSectionContent>
          </LeftSection>
          <RightSection isMenuOpen={isMenuOpen}>
            {cloneChildren(rightIcon, {
              size: 14,
              color: isTransparent ? white : grey.z400,
            })}
          </RightSection>
        </HeaderWrapper>
        {!!showText && (
          <HelperText isError={isError} id={`dropdown-help-${randomId}`}>
            {showText}
          </HelperText>
        )}
        <MenuHolder
          showArrow={showArrow}
          isOpen={isMenuOpen}
          heading={heading}
          borderRadius={borderRadius}
        >
          {isMenuOpen && (
            <>
              {showArrow && (
                <React.Fragment>
                  <MenuHolder.Arrow />
                  <Cover />
                </React.Fragment>
              )}
              <MenuWrapper maxMenuHeight={maxMenuHeight}>
                {renderModifiedChildren(children)}
              </MenuWrapper>
            </>
          )}
        </MenuHolder>
      </DropdownWrapper>
    </OnClickOutside>
  );
};

const getCommonTop = (showArrow) => (showArrow ? "5.8rem" : "5.3rem");

const getTop = ({ showArrow, heading }, isMobile) => {
  if (showArrow && heading) {
    return isMobile ? "5.7rem" : "6.5rem";
  }

  if (heading) {
    return isMobile ? "5.2rem" : "6rem";
  }

  return getCommonTop(showArrow);
};

const MenuHolder = styled.span`
  position: absolute;
  top: ${(props) => getTop(props)}; // TODO
  width: 100%;
  border-radius: ${({ borderRadius }) =>
    borderRadius ? borderRadius : misc.radius};
  background: ${white};
  box-shadow: 0px 1px 8px rgba(28, 28, 28, 0.15);
  z-index: 10;
  opacity: ${(props) => (props.isOpen ? "1" : "0")}; // TODO
  transition:
    opacity,
    transform ${misc.animationDuration} ease; // TODO transition
  transform: translateY(${(props) => (props.isOpen ? "0" : "-1rem")});

  @media (max-width: 480px) {
    top: ${(props) => getTop(props, true)};
  }
`;

const MenuWrapper = styled.section`
  margin: 1rem 0;
  max-height: ${(props) => props.maxMenuHeight};
  overflow-y: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const Cover = styled.span`
  position: absolute;
  right: 1.5rem;
  width: 2.5rem;
  height: 1rem;
  top: 0;
  background: white;
`;

MenuHolder.Arrow = styled.div`
  position: absolute;
  width: 1.4rem;
  height: 1.4rem;
  transform: rotate(45deg);
  top: -7px;
  right: 2rem;
  background: white;
  box-shadow: 0px -1px 3px rgba(28, 28, 28, 0.15);
`;

const RightSection = styled.span`
  transform: ${(props) =>
    props.isMenuOpen ? "rotate(180deg)" : "none"}; // TODO
  transition: transform ${misc.animationDuration};
`;

const HelperText = styled.p`
  font-size: 11px;
  margin: 2px 0;
  color: ${(props) => (props.isError ? red.z400 : grey.z400)}; // TODO
`;

Dropdown.propTypes = {
  value: PropTypes.string,
  width: PropTypes.string,
  leftIcon: PropTypes.node,
  leftNode: PropTypes.node,
  rightIcon: PropTypes.node,
  children: PropTypes.node,
  onSelect: PropTypes.func.isRequired,
  helperText: PropTypes.string,
  errorText: PropTypes.string,
  showArrow: PropTypes.bool,
  className: PropTypes.string,
  isCompact: PropTypes.bool,
  borderColor: PropTypes.string,
  isNaked: PropTypes.bool,
  isTransparent: PropTypes.bool,
  staticHeader: PropTypes.node,
  maxMenuHeight: PropTypes.string,
  isCentered: PropTypes.bool,
  placeholder: PropTypes.string,
  shouldChange: PropTypes.func,
  noMarginTop: PropTypes.bool,
  heading: PropTypes.string,
  fontSize: PropTypes.string,
  borderRadius: PropTypes.string,
  customPadding: PropTypes.string,
};

Dropdown.defaultProps = {
  label: "Choose...",
  value: "",
  width: "",
  leftIcon: null,
  leftNode: null,
  rightIcon: <DownTriangle />,
  children: null,
  showArrow: false,
  isNaked: false,
  isTransparent: false,
  staticHeader: null,
  maxMenuHeight: "30rem",
  isCentered: false,
  placeholder: "",
  noMarginTop: false,
  heading: "",
  fontSize: "",
  borderRadius: "",
  customPadding: "",
};

const getFontSize = ({ heading, fontSize }, isMobile = false) => {
  if (fontSize) {
    return fontSize;
  }
  if (isMobile) {
    return heading ? "1.4rem" : "1.8rem";
  }
  return heading ? "1.6rem" : "1.8rem";
};
const Span = styled.span`
  margin-left: ${(props) => (props.hasLeftIcon ? "1rem" : "0")};
  margin-top: ${(props) => (props.hasNoMargin ? 0 : `0.2rem`)};
  color: ${(props) => getTextColor(props)};
  font-size: ${(props) => getFontSize(props)};
  font-weight: 300;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 480px) {
    font-size: ${(props) => getFontSize(props, true)};
  }
`;

const LeftSection = styled.div`
  margin: ${(props) => getLeftSectionMargin(props)};
  width: ${({ isCentered }) => (isCentered ? "100%" : "inherit")};
`;

const LeftSectionContent = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  white-space: nowrap;
  justify-content: ${({ isCentered }) => (isCentered ? "center" : "unset")};
`;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.isNaked ? `flex-end` : `space-between`)};
  padding: ${(props) => getPadding(props)};
  font-size: 18px;
  height: ${({ heading }) => (heading ? 6 : 4.8)}rem;
  border: ${(props) => getBorder(props)};
  border-radius: ${({ borderRadius }) =>
    borderRadius ? borderRadius : misc.radius};
  cursor: pointer;
  background: ${(props) => getBGColor(props)};

  @media (max-width: 480px) {
    height: ${({ heading }) => (heading ? 5.2 : 4.8)}rem;
  }
`;

const Heading = styled.div`
  font-size: 1.4rem;
  color: ${grey.z500};
  line-height: 1.8rem;

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const getBGColor = (props) => {
  return props.isError
    ? red.z100
    : props.isTransparent
      ? "transparent"
      : "#fff";
};

const getPadding = (props) => {
  if (props.isError) {
    return props.isCompact ? "1.5rem 1rem" : "1.5rem 1.85rem";
  } else {
    if (props.isNaked) {
      return "1rem 0";
    } else if (props.customPadding) {
      return props.customPadding;
    } else if (props.isMenuOpen) {
      return props.isCompact ? "1.5rem 1.05rem" : "1.5rem 1.9rem";
    } else {
      return props.isCompact ? "1.65rem 1.15rem" : "1.65rem 2rem";
    }
  }
};

const getBorder = (props) => () => {
  if (props.isNaked) {
    return "none";
  } else if (props.isError) {
    return `2px solid ${red.z600}`;
  } else {
    if (props.isMenuOpen) {
      return `2px solid ${props.borderColor ? props.borderColor : green.z500}`;
    } else {
      return "1px solid " + grey.z300;
    }
  }
};

const getTextColor = (props) => {
  if (props.isTransparent) {
    return white;
  }

  if (props.isPlaceholder) {
    return grey.z300;
  }

  return grey.z800;
};

const DropdownWrapper = styled.div`
  position: relative;
  width: ${(props) => (props.width ? props.width : misc.dropdown.defaultWidth)};
`;

export {Dropdown};
