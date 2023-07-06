import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "@emotion/styled";

const TextAreaStyled = styled.textarea`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  font-size: ${(props) => props.fontsize};
  border: none;
  background: none;
  outline: none;
  margin-top: ${(props) => props.margintop || "12px"}; 
  margin-left: ${(props) => props.marginleft || "12px"}; 
  border-bottom: ${(props) => props.borderb || "1px solid #828282"};
  margin: ${(props) => props.margin || "50px 0 0"}
  padding: ${(props) => props.padding};
  color: ${(props) => props.color};
  // box-shadow: 0px 4px 18px rgba(0,0,0,.06);

    &:focus,
  &:hover {
    // border-bottom: 1px ridge #7a7a7a;
    border-bottom: 1px solid;
    border-color: rgba(0, 0, 0, 0.12);
  }

  &::placeholder {
    font-weight: ${(props) => props.placeholderweight};
    font-size: ${(props) => props.placeholderfontsize};
    line-height: 19px;
    letter-spacing: 0.02em;
    color: rgba(80, 80, 80, 0.4);
  }
`;

const TextArea = ({
  margintop = "",
  marginleft = "",
  className = "",
  placeholder = "write something",
  row = "",
  width = "",
  height = "",
  fontsize = "",
  placeholderweight = "",
  placeholderfontsize = "",
  padding = "",
  margin = "",
  borderb = "",
  children,
  color = "",
  onChange = "",
  name = "",
  value = "",
}) => {
  return (
    <TextAreaStyled
      width={width}
      row={row}
      className={className}
      placeholder={placeholder}
      height={height}
      fontsize={fontsize}
      placeholderweight={placeholderweight}
      placeholderfontsize={placeholderfontsize}
      padding={padding}
      margin={margin}
      borderb={borderb}
      margintop={margintop}
      marginleft={marginleft}
      color={color}
      onChange={onChange}
      name={name}
      value={value}
    >
      {children}
    </TextAreaStyled>
  );
};

export default TextArea;
