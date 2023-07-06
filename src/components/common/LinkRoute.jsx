import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import css from "../../css/LinkRoute.css";
import "bootstrap/dist/css/bootstrap.min.css";

function LinkRoute({
  link = "",
  className = "",
  children,
  color = "",
  padding = "",
  margin = "",
  fontsize = "",
  to = "",
}) {
  return (
    <Link
      href={link}
      fontsize={fontsize}
      className={className}
      color={color}
      padding={padding}
      margin={margin}
      to={to}
    >
      {children}
    </Link>
  );
}

export default LinkRoute;
