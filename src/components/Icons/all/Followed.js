import React from "react";
import Icon from "../Icon";
import cuid from "cuid";

const Followed = (props) => {
  const uniqueId = cuid();
  return (
    <Icon uniqueId={uniqueId} {...props}>
      <g clipPath="url(#clip0)">
        <path d="M3.125 13.3333C3.125 13.5543 3.2128 13.7663 3.36908 13.9226C3.52536 14.0789 3.73732 14.1667 3.95833 14.1667C4.17935 14.1667 4.39131 14.0789 4.54759 13.9226C4.70387 13.7663 4.79167 13.5543 4.79167 13.3333C4.79167 11.6667 6.83333 10.2083 9.16667 10.2083C11.5 10.2083 13.5417 11.6667 13.5417 13.3333C13.5417 13.5543 13.6295 13.7663 13.7857 13.9226C13.942 14.0789 14.154 14.1667 14.375 14.1667C14.596 14.1667 14.808 14.0789 14.9643 13.9226C15.1205 13.7663 15.2083 13.5543 15.2083 13.3333C15.2083 11.4417 13.7417 9.76667 11.675 9C12.0527 8.68202 12.3522 8.28135 12.5501 7.82903C12.7481 7.37671 12.8393 6.88489 12.8167 6.39167C12.8167 3.71667 11.3167 2.5 9.16667 2.5C7.01667 2.5 5.51667 3.71667 5.51667 6.39167C5.49502 6.88557 5.58751 7.37782 5.78696 7.83018C5.9864 8.28254 6.28743 8.68284 6.66667 9C4.59167 9.76667 3.125 11.4417 3.125 13.3333ZM9.16667 4.16667C10.575 4.16667 11.15 4.80833 11.15 6.39167C11.15 6.81667 11.15 8.125 9.16667 8.125C7.18333 8.125 7.18333 6.81667 7.18333 6.39167C7.18333 4.80833 7.75833 4.16667 9.16667 4.16667Z"></path>
        <path d="M11.6667 16.875H4.16667C3.50363 16.875 2.86774 16.6116 2.3989 16.1428C1.93006 15.6739 1.66667 15.038 1.66667 14.375V4.16667C1.66667 3.50363 1.93006 2.86774 2.3989 2.3989C2.86774 1.93006 3.50363 1.66667 4.16667 1.66667H14.375C15.038 1.66667 15.6739 1.93006 16.1428 2.3989C16.6116 2.86774 16.875 3.50363 16.875 4.16667V11.6667C16.875 11.8877 16.9628 12.0996 17.1191 12.2559C17.2754 12.4122 17.4873 12.5 17.7083 12.5C17.9293 12.5 18.1413 12.4122 18.2976 12.2559C18.4539 12.0996 18.5417 11.8877 18.5417 11.6667V4.16667C18.5417 3.0616 18.1027 2.00179 17.3213 1.22039C16.5399 0.438987 15.4801 0 14.375 0L4.16667 0C3.0616 0 2.00179 0.438987 1.22039 1.22039C0.438987 2.00179 0 3.0616 0 4.16667L0 14.375C0 15.4801 0.438987 16.5399 1.22039 17.3213C2.00179 18.1027 3.0616 18.5417 4.16667 18.5417H11.6667C11.8877 18.5417 12.0996 18.4539 12.2559 18.2976C12.4122 18.1413 12.5 17.9293 12.5 17.7083C12.5 17.4873 12.4122 17.2754 12.2559 17.1191C12.0996 16.9628 11.8877 16.875 11.6667 16.875Z"></path>
        <path d="M19.7582 12.9501C19.6807 12.872 19.5886 12.81 19.487 12.7677C19.3855 12.7254 19.2765 12.7036 19.1665 12.7036C19.0565 12.7036 18.9476 12.7254 18.846 12.7677C18.7445 12.81 18.6523 12.872 18.5749 12.9501L14.9999 16.5334L13.3332 14.8251C13.1763 14.6682 12.9634 14.58 12.7415 14.58C12.5196 14.58 12.3068 14.6682 12.1499 14.8251C11.9929 14.982 11.9048 15.1949 11.9048 15.4168C11.9048 15.6387 11.9929 15.8515 12.1499 16.0084L14.4082 18.3334C14.4857 18.4116 14.5778 18.4735 14.6794 18.5159C14.7809 18.5582 14.8899 18.5799 14.9999 18.5799C15.1099 18.5799 15.2188 18.5582 15.3203 18.5159C15.4219 18.4735 15.5141 18.4116 15.5915 18.3334L19.7582 14.1668C19.8415 14.0888 19.9078 13.9946 19.9532 13.89C19.9986 13.7853 20.022 13.6725 20.022 13.5584C20.022 13.4444 19.9986 13.3316 19.9532 13.2269C19.9078 13.1223 19.8415 13.0281 19.7582 12.9501V12.9501Z"></path>
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="20" height="20"></rect>
        </clipPath>
      </defs>
    </Icon>
  );
};

export default Followed;
