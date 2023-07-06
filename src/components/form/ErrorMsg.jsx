import React from "react";
import styled from "@emotion/styled";

const LabelStyled = styled.label`
  color: ${(props) => props.color || "red"};
  font-size: 12px;
`;

function ErrorMsg({ labeldata = "", color = "" }) {
  return (
    <>
      <LabelStyled color={color}>{labeldata}</LabelStyled>
    </>
  );
}

export default ErrorMsg;
