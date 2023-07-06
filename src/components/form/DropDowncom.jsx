import React from "react";
import styled from "@emotion/styled";

const SelectStyled = styled.select`
  width: ${(props) => props.width};
  border: none;
  background: none;
  font-size: 12px;
  color: ${(props) => props.color};
  outline: none;
  appearance: unset;

  &:hover {
    // border-bottom: 1px ridge #7a7a7a;
    border-bottom: 1px solid;
    border-color: rgba(0, 0, 0, 0.12);
    appearance: revert;
  }
`;

const OptionStyled = styled.option`
  font-size: 13px;
`;

function DropDowncom(props) {
  const {
    width = "",
    color = "",
    onChange = "",
    name = "",
    value = "",
    options = [],
    optionsone = [],
  } = props;
  return (
    <>
      <form action="">
        <SelectStyled
          id="lang"
          width={width}
          color={color}
          onChange={onChange}
          name={name}
          value={value}
        >
          {options.map((el) => (
            <>
              <option key={el.id}>{el.value}</option>
            </>
          ))}

          {optionsone.map((el) => (
            <>
              <option key={el.id}>{el.value}</option>
            </>
          ))}
        </SelectStyled>
      </form>
    </>
  );
}

export default DropDowncom;
