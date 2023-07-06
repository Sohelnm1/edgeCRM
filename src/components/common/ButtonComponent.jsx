import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import styled from "@emotion/styled";

const ButtonStyled = styled.button`
  margin: ${(props) => props.margin};
  font-weight: ${(props) => props.weight};
  font-size: ${(props) => props.fontsize};
  // line-height: 0;
  padding: ${(props) => props.padding};
  background-color: ${(props) => props.bcolor};
  background: ${(props) => props.background};
  color: ${(props) => props.color};
  border-radius: ${(props) => props.borderradius};
  border: ${(props) => props.border};
  transform: ${(props) => props.transform};
  transition: ${(props) => props.transition};

  &:hover {
    background: ${(props) => props.hoverbcolor};
    color: "#e5384f";
    transform: scale(1.05);
  }
`;

const ButtonComponent = ({
  type = "",
  text = "",
  className = "",
  weight = "",
  fontsize = "",
  padding = "",
  margin = "",
  onClick = "",
  bcolor = " ",
  borderradius = "",
  color = "",
  children,
  border = "",
  transform = "",
  transition = "",
  hoverbcolor = "",
  paddinghover = "",
  background = "",
}) => {
  return (
    <ButtonStyled
      text={text}
      border={border}
      className={className}
      type={type}
      fontsize={fontsize}
      weight={weight}
      padding={padding}
      margin={margin}
      onClick={onClick}
      bcolor={bcolor}
      borderradius={borderradius}
      color={color}
      transform={transform}
      transition={transition}
      hoverbcolor={hoverbcolor}
      paddinghover={paddinghover}
      background={background}
    >
      {children}
    </ButtonStyled>
  );
};

export default ButtonComponent;
