import React from "react";
import Icon from "../Icon";
import cuid from "cuid";

const Hourglass = (props) => {
  const uniqueId = cuid();
  return (
    <Icon uniqueId={uniqueId} {...props}>
      <g clipPath="url(#clip0)">
        <path d="M17.5 18.3333H16.6667C16.6392 17.1133 16.3363 15.9152 15.7808 14.8286C15.2252 13.742 14.4313 12.795 13.4584 12.0583C13.1151 11.8462 12.8415 11.5383 12.6712 11.1726C12.5009 10.8068 12.4414 10.3992 12.5 10C12.4761 9.60682 12.5486 9.21375 12.7112 8.85501C12.8739 8.49626 13.1218 8.18271 13.4334 7.94167C14.41 7.20669 15.208 6.26062 15.7679 5.17407C16.3278 4.08753 16.635 2.88856 16.6667 1.66667H17.5C17.721 1.66667 17.933 1.57887 18.0893 1.42259C18.2456 1.26631 18.3334 1.05435 18.3334 0.833333C18.3334 0.61232 18.2456 0.400358 18.0893 0.244078C17.933 0.0877974 17.721 0 17.5 0L2.50002 0C2.27901 0 2.06704 0.0877974 1.91076 0.244078C1.75448 0.400358 1.66669 0.61232 1.66669 0.833333C1.66669 1.05435 1.75448 1.26631 1.91076 1.42259C2.06704 1.57887 2.27901 1.66667 2.50002 1.66667H3.33335C3.36382 2.8888 3.67054 4.08819 4.2305 5.17492C4.79046 6.26165 5.58915 7.20753 6.56669 7.94167C6.90532 8.15708 7.1739 8.46643 7.33964 8.83195C7.50538 9.19747 7.56111 9.60334 7.50002 10C7.52398 10.3932 7.45147 10.7862 7.2888 11.145C7.12612 11.5037 6.87823 11.8173 6.56669 12.0583C5.59004 12.7933 4.79201 13.7394 4.23214 14.8259C3.67227 15.9125 3.36503 17.1114 3.33335 18.3333H2.50002C2.27901 18.3333 2.06704 18.4211 1.91076 18.5774C1.75448 18.7337 1.66669 18.9457 1.66669 19.1667C1.66669 19.3877 1.75448 19.5996 1.91076 19.7559C2.06704 19.9122 2.27901 20 2.50002 20H17.5C17.721 20 17.933 19.9122 18.0893 19.7559C18.2456 19.5996 18.3334 19.3877 18.3334 19.1667C18.3334 18.9457 18.2456 18.7337 18.0893 18.5774C17.933 18.4211 17.721 18.3333 17.5 18.3333ZM7.60002 13.3333C8.10706 12.942 8.51362 12.4356 8.78606 11.8559C9.05849 11.2763 9.18897 10.6401 9.16669 10C9.22453 9.35538 9.10993 8.70697 8.83463 8.12123C8.55933 7.53549 8.13324 7.03349 7.60002 6.66667C6.81652 6.08434 6.17543 5.33176 5.72505 4.46565C5.27467 3.59954 5.02677 2.64251 5.00002 1.66667H15C14.9762 2.64043 14.7322 3.59615 14.2862 4.46211C13.8402 5.32806 13.2039 6.08177 12.425 6.66667C11.9134 7.05533 11.502 7.56061 11.2252 8.14041C10.9483 8.72022 10.814 9.35778 10.8334 10C10.7755 10.6446 10.8901 11.293 11.1654 11.8788C11.4407 12.4645 11.8668 12.9665 12.4 13.3333C13.0889 13.852 13.6656 14.5048 14.0953 15.2524C14.525 16.0001 14.7987 16.827 14.9 17.6833C14.2635 17.0245 13.5009 16.5006 12.6577 16.1428C11.8144 15.785 10.9077 15.6006 9.99169 15.6006C9.07565 15.6006 8.16898 15.785 7.32572 16.1428C6.48245 16.5006 5.71985 17.0245 5.08335 17.6833C5.18668 16.8257 5.463 15.998 5.89559 15.2502C6.32818 14.5025 6.90802 13.8504 7.60002 13.3333V13.3333Z"></path>
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="20" height="20"></rect>
        </clipPath>
      </defs>
    </Icon>
  );
};

export default Hourglass;
