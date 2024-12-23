import styled from "styled-components";
import {Link} from "../Link";
import spacing from "../tokens/spacing";
import PropTypes from "prop-types";
import grey from "../tokens/color/grey";
import ChevronRight from "../Icons/all/ChevronRight";
import { link as linkColor } from "../tokens/colors";

const Breadcrumb = (props) => {
  return (
    <Breadcrumb.Ele aria-label="Breadcrumb" {...props}>
      {props.children}
    </Breadcrumb.Ele>
  );
};

Breadcrumb.Separator = styled.div`
  margin-left: ${spacing.xsmall};
  color: ${grey.z400};
  cursor: default;
  font-size: 1.2rem;
  @media (max-width: 480px) {
    display: none;
  }
`;

Breadcrumb.Ele = styled.div`
  span {
    font-size: 1.2rem;
  }

  & > a {
    font-weight: 300;
    color: ${grey.z600};
  }

  & > a:visited:hover:not(last-child) > span {
    @media (min-width: 481px) {
      color: ${linkColor.defaultHover};
    }
  }

  & > a:first-child span {
    padding-left: 0;
    border-left: 0;
  }

  & > a:last-child {
    margin-right: 0;
    color: ${grey.z300};
    cursor: default;
    pointer-events: none;
  }

  & > a:last-child:visited span {
    color: ${grey.z300};
  }

  & > a:last-child ${Breadcrumb.Separator} {
    display: none;
  }

  & > a:first-child {
    color: ${linkColor.defaultColor};
  }

  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    span {
      font-size: 1.4rem;
      padding: 0;
      border-bottom: 1px solid ${grey.z200};
      border-radius: 0;
      width: 100%;
      padding: 1.5rem 0;
      color: ${grey.z900} !important;
    }

    & > a:last-child span {
      color: ${grey.z300} !important;
    }
  }

  & > a:last-child i svg {
    fill: ${grey.z300};
  }
`;

Breadcrumb.Chevron = styled(ChevronRight)`
  @media (min-width: 481px) {
    display: none !important;
  }
`;

const StyledLink = styled(Link)`
  @media (max-width: 480px) {
    span {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;

Breadcrumb.Link = (props) => (
  <StyledLink {...props} activeColor={grey.z600}>
    {/* eslint-disable-next-line react/prop-types */}
    {props.children}
    <Breadcrumb.Separator>/</Breadcrumb.Separator>
    {!!props.isMobile && <Breadcrumb.Chevron />}
  </StyledLink>
);

Breadcrumb.propTypes = {
  children: PropTypes.element.isRequired,
};

Breadcrumb.Link.propTypes = {
  linkTo: PropTypes.string,
  isMobile: PropTypes.bool,
};

Breadcrumb.Link.defaultProps = {
  isMobile: true,
};

export {Breadcrumb};
