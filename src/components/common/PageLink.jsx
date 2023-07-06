import React from "react";
import styled from "@emotion/styled";

const AnchorStyled = styled.a`
  padding: ${(props) => props.padding || "8px 5px"};
  margin: ${(props) => props.margin};
  text-align: left;
  color: ${(props) => props.color || "#fff"};
  text-decoration: none;
  font-size: ${(props) => props.fontsize};
  &:hover {
    border-radius: 50%;
    background: hsla(0, 0%, 100%, 0.25);
    transition: all 0.25s ease;
    transform-origin: 90px 90px;
  }
`;

const PageLink = ({
  link = "",
  className = "",
  children,
  color = "",
  padding = "",
  margin = "",
  fontsize = "",
  value = "",
  index = "",
}) => {
  return (
    <AnchorStyled
      // target="_blank"
      rel="noreferrer"
      href={link}
      fontsize={fontsize}
      className={className}
      color={color}
      padding={padding}
      margin={margin}
      value={value}
      index={index}
    >
      {children}
    </AnchorStyled>
  );
};

export default PageLink;
