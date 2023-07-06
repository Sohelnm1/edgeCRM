import React from "react";
import PageLink from "./PageLink";
import styled from "@emotion/styled";
import css from "../../css/MaterialIcon.css";
import "bootstrap/dist/css/bootstrap.min.css";

const LiStyled = styled.li`
  list-style: none;

  padding: ${(props) => props.padding || "10px 5px"};
  color: ${(props) => props.color};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

function MaterialIcon({
  className = "",
  children,
  color = "",
  padding = "",
  width = "",
  height = "",
}) {
  return (
    <>
      <LiStyled
        color={color}
        className=""
        padding={padding}
        width={width}
        height={height}
      >
        <span
          className={`material-icons material-icons-outlined ${
            className ? className : ""
          }`}
        >
          {children}
        </span>
      </LiStyled>
    </>
  );
}

export default MaterialIcon;
