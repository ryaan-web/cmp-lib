import React from "react";
import { css } from "styled-components";

const hexToRgb = (hex) => {
  if (!hex) {
    return null;
  }
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  const rgbObj = {
    r: result && parseInt(result[1], 16),
    g: result && parseInt(result[2], 16),
    b: result && parseInt(result[3], 16),
  };
  return result ? rgbObj : null;
};

const getRGBAFromHex = (hex, alpha) => {
  const rgbObj = hexToRgb(hex);
  return hex ? `rgba(${rgbObj.r},${rgbObj.g},${rgbObj.b},${alpha})` : null;
};

const cloneChildren = (children, newProps) => {
  if (Array.isArray(children)) {
    return children.map((ch) => (ch ? React.cloneElement(ch, newProps) : null));
  }
  return children ? React.cloneElement(children, newProps) : null;
};

const deepCopy = (obj) => {
  let returnObj = null;
  try {
    returnObj = typeof obj === "object" ? JSON.parse(JSON.stringify(obj)) : obj;
  } catch (error) {
    //do nothing
  }

  return returnObj;
};

const svgStyle = css`
  display: inline-block;
  vertical-align: middle;
  line-height: 1;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
`;

const iconStyle = css`
  display: flex;
  align-items: center;
  cursor: ${(props) => (props.showPointer ? "pointer" : "inherit")};
`;

const camelize = (name = "", firstSmall = false) => {
  return name
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return firstSmall && index === 0
        ? word.toLowerCase()
        : word.toUpperCase();
    })
    .replace(/\s|[-.]+/g, "");
};

const transitionFromAuto = (el, endHeight) => {
  el.style.height = window.getComputedStyle(el).height;
  // Force repaint
  //eslint-disable-next-line no-unused-expressions
  el.offsetHeight;
  el.style.height = endHeight + "px";
  // el.style.overflow = 'hidden'
};

const transitionToAuto = (el) => {
  const prevHeight = el.style.height;
  el.style.height = "auto";
  const endHeight = window.getComputedStyle(el).height;
  el.style.height = prevHeight;
  // Force repaint
  //eslint-disable-next-line no-unused-expressions
  el.offsetHeight;
  el.style.height = endHeight;
};

const getCDN = (link) => `https://b.zmtcdn.com/${link}`;

const onKeySelect = (func) => (e) => {
  if (e.key === "Enter" || e.keyCode === 32) {
    func(e);
  }
};

const keyCodes = {
  13: "ENTER",
  37: "LEFT",
  38: "UP",
  39: "RIGHT",
  40: "DOWN",
};

const onKeyChoose = (func) => (e) => {
  const navKey = keyCodes[e.keyCode] || false;
  if (navKey) func(e, navKey);
};

const wordSplit = (casedWord) =>
  casedWord
    .split("")
    .reduce(
      (word, letter) =>
        (word =
          letter === letter.toUpperCase()
            ? `${word} ${letter}`
            : `${word}${letter}`),
      "",
    )
    .trim();

const filterChildProps = (props, excludeKeys) => {
  return Object.keys(props)
    .filter((key) => {
      if (Array.isArray(excludeKeys)) {
        return !excludeKeys.includes(key);
      }

      return excludeKeys !== key;
    })
    .reduce((obj, key) => {
      obj[key] = props[key];
      return obj;
    }, {});
};

const mapProps = (child, extraProps) => {
  return React.cloneElement(child, { ...extraProps });
};

const debounce = function (fn, delay) {
  var timer = null;
  return window && window.clearTimeout && window.setTimeout
    ? function () {
        const context = this;
        const thisArgs = Array.prototype.slice.call(arguments);

        if (timer) {
          window.clearTimeout(timer);
        }

        timer = window.setTimeout(function () {
          fn.apply(context, thisArgs);
        }, delay);
      }
    : fn;
};

export {
  hexToRgb,
  getRGBAFromHex,
  cloneChildren,
  svgStyle,
  iconStyle,
  camelize,
  getCDN,
  onKeySelect,
  onKeyChoose,
  wordSplit,
  filterChildProps,
  transitionToAuto,
  mapProps,
  debounce,
  deepCopy,
};
