import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "@emotion/styled";
import datecom from "../../css/datecom.css";

const DateStyled = styled(DatePicker)({
  outline: "none",
  border: "none",
  // width: `${(props) => props.width || "100%"}`,
  width: "100%",
  color: "#7a7a7a",
  "font-size": "12px",

  // "& .react-datepicker-wrapper": {
  //   width: `${(props) => props.datepickwidth}`,
  // },

  "&:hover": {
    // border-bottom: 1px ridge #7a7a7a;
    "border-bottom": "1px solid",
    "border-color": "rgba(0, 0, 0, 0.12)",
  },
});

const DateWrapperStyled = styled.div`
  width: ${(props) => props.datepickwidth};
`;

function DateComp({
  placeholder = "",
  width = "",
  onChange = "",
  date = "",
  value = "",

  selected = "",
  datepickwidth = "",
  name = "",
  dateFormat = "",
}) {
  // const [startDate, setStartDate] = React.useState();
  return (
    <DateWrapperStyled datepickwidth={datepickwidth}>
      <DateStyled
        selected={selected}
        // onChange={(date) => setStartDate(date)}
        placeholderText={placeholder}
        width={width}
        date={date}
        onChange={onChange}
        datepickwidth={datepickwidth}
        name={name}
        dateFormat={dateFormat}
        // value={value}
      />
    </DateWrapperStyled>
  );
}

export default DateComp;
