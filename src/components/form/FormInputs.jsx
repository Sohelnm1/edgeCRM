import React from "react";
import styled from "@emotion/styled";
import "bootstrap/dist/css/bootstrap.min.css";

const FormInputStyled = styled.input`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding-right: ${(props) => props.paddingright};
  font-size: 12px;
  border: none;
  background: none;
  outline: none;
  margin-top: 12px;
  border-bottom: ${(props) => props.borderb || "1px solid #7a7a7a"};
  margin: ${(props) => props.margin || "50px 0 0"};

  &::placeholder {
    font-weight: ${(props) => props.placeholderweight};
    font-size: ${(props) => props.placeholderfontsize};
    line-height: 19px;
    letter-spacing: 0.02em;
    color: rgba(80, 80, 80, 0.4);
  }
  &:focus,
  &:hover {
    // border-bottom: 1px ridge #7a7a7a;
    border-bottom: 1px solid;
    border-color: rgba(0, 0, 0, 0.12);
  }
`;

const FormInputs = ({
  paddingright = "",
  className = "",
  type = "",
  placeholder = "Write something",
  height = "",
  width = "",
  placeholderweight = "",
  placeholderfontsize = "",
  margin = " ",
  onChange,
  value = "",
  borderb = "",
  name = "",
  defaultValue = "",
}) => {
  return (
    <FormInputStyled
      type={type}
      placeholder={placeholder}
      height={height}
      width={width}
      placeholderweight={placeholderweight}
      placeholderfontsize={placeholderfontsize}
      className={`input-field ${className ? className : "message-box"}`}
      onChange={onChange}
      margin={margin}
      value={value}
      borderb={borderb}
      name={name}
      paddingright={paddingright}
      defaultValue={defaultValue}
    ></FormInputStyled>
  );
};
export default FormInputs;
