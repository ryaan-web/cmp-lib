import React from "react";
import Icon from "../Icon";
import cuid from "cuid";

const Bookmarks = (props) => {
  const uniqueId = cuid();
  return (
    <Icon uniqueId={uniqueId} {...props}>
      <path d="M15.4167 0H4.58338C4.03085 0 3.50094 0.219493 3.11024 0.610194C2.71954 1.00089 2.50005 1.5308 2.50005 2.08333V19.275C2.49893 19.3705 2.51692 19.4653 2.55296 19.5538C2.589 19.6422 2.64236 19.7226 2.70991 19.7901C2.77745 19.8577 2.85782 19.911 2.94629 19.9471C3.03475 19.9831 3.12953 20.0011 3.22505 20C3.39613 19.9972 3.561 19.9354 3.69172 19.825L10 14.4833L16.3084 19.825C16.4391 19.9354 16.604 19.9972 16.775 20C16.8706 20.0011 16.9653 19.9831 17.0538 19.9471C17.1423 19.911 17.2226 19.8577 17.2902 19.7901C17.3577 19.7226 17.4111 19.6422 17.4471 19.5538C17.4832 19.4653 17.5012 19.3705 17.5 19.275V2.08333C17.5 1.5308 17.2806 1.00089 16.8899 0.610194C16.4992 0.219493 15.9693 0 15.4167 0V0ZM16.25 18.1333L10.8334 13.525C10.6061 13.3366 10.3202 13.2335 10.025 13.2335C9.72988 13.2335 9.44397 13.3366 9.21672 13.525L3.75005 18.1333V2.08333C3.75005 1.86232 3.83785 1.65036 3.99413 1.49408C4.15041 1.3378 4.36237 1.25 4.58338 1.25H15.4167C15.6377 1.25 15.8497 1.3378 16.006 1.49408C16.1623 1.65036 16.25 1.86232 16.25 2.08333V18.1333Z"></path>
      <path d="M13.3337 3.54199H6.66699C6.50123 3.54199 6.34226 3.60784 6.22505 3.72505C6.10784 3.84226 6.04199 4.00123 6.04199 4.16699C6.04199 4.33275 6.10784 4.49172 6.22505 4.60893C6.34226 4.72614 6.50123 4.79199 6.66699 4.79199H13.3337C13.4994 4.79199 13.6584 4.72614 13.7756 4.60893C13.8928 4.49172 13.9587 4.33275 13.9587 4.16699C13.9587 4.00123 13.8928 3.84226 13.7756 3.72505C13.6584 3.60784 13.4994 3.54199 13.3337 3.54199V3.54199Z"></path>
      <path d="M10.0003 6.875H6.66699C6.50123 6.875 6.34226 6.94085 6.22505 7.05806C6.10784 7.17527 6.04199 7.33424 6.04199 7.5C6.04199 7.66576 6.10784 7.82473 6.22505 7.94194C6.34226 8.05915 6.50123 8.125 6.66699 8.125H10.0003C10.1661 8.125 10.3251 8.05915 10.4423 7.94194C10.5595 7.82473 10.6253 7.66576 10.6253 7.5C10.6253 7.33424 10.5595 7.17527 10.4423 7.05806C10.3251 6.94085 10.1661 6.875 10.0003 6.875Z"></path>
    </Icon>
  );
};

export default Bookmarks;