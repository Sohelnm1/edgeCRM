import React, { useState } from "react";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
import styled from "@emotion/styled";
import timepickercom from "../../css/timepickercom.css";

const TimePickerStyled = styled(TimePicker)({
  outline: "none",
  border: "0",
  width: "13.33%",

  color: "#7a7a7a",
  "font-size": "12px",

  "*": {
    border: "0",
    outline: "none",
  },

  "&:hover": {
    // border-bottom: 1px ridge #7a7a7a;
    "border-bottom": "1px solid",
    "border-color": "rgba(0, 0, 0, 0.12)",
  },
});

function TimePickerComp({
  placeholder = "",
  //   hourPlaceholder = "",
  name = "",
  //   secondPlaceholder = "",
}) {
  const [value, onChange] = useState("10:45");

  return (
    <TimePickerStyled
      onChange={onChange}
      value={value}
      //   placeholder={placeholder}
      //   hourPlaceholder={hourPlaceholder}
      name={name}
      //   secondPlaceholder={secondPlaceholder}
    />
  );
}

export default TimePickerComp;
