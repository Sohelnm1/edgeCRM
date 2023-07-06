import React from "react";
import FormInputs from "./FormInputs";
import styled from "@emotion/styled";
import Label from "../common/Label";
import { MaterialIcon } from "../common";
import TextArea from "./TextArea";
import ButtonComponent from "../common/ButtonComponent";
import DateComp from "./DateComp";
import TimePickerComp from "./TimePickerComp";
import DropDowncom from "./DropDowncom";
import "bootstrap/dist/css/bootstrap.min.css";
import PopUpPanel from "../common/PopUpPanel";
import ErrorMsg from "./ErrorMsg";

const MeetingStyled = styled.div`
  border-bottom: 1px solid;
  border-color: rgba(0, 0, 0, 0.12);
  padding: 12px 0;
`;

const LastSectionStyled = styled.div`
  padding-top: 6px;
`;

const MeetingTemplate = (props) => {
  const {
    sectionone = false,
    sectiontwo = false,
    sectionthree = false,
    sectionfour = false,
    sectionfive = false,
    sectionfivesub = false,
    firstsubplace = "",
    secondsubplace = "",
    thirdsubplace = "",
    forthsubplace = "",
    fifthsubplace = "",
    sixthsubplace = "",
    seventhsubplace = "",
    eighthsubplace = "",
    ninethsubplace = "",
    tenthsubplace = "",
    labelone = "",
    labeltwo = "",
    labelthree = "",
    labelfour = "",
    eleventhsubplace = "",
    callPurpose = [],
    meetingData = [],
    callResult = [],
  } = props;
  const [startDate, setStartDate] = React.useState();
  const [count, setCount] = React.useState();
  const [error, seterror] = React.useState(false);

  const [formData, setFormData] = React.useState({
    msubject: "",
    mlocation: "",
    mlink: "",
    textarea: "",
    callpurpose: "",
    callresult: "",
  });

  const [dummySet, setDummySet] = React.useState({
    msubject: "",
    mlocation: "",
    mlink: "",
    textarea: "",
    callpurpose: "",
    callresult: "",
  });

  let name, value;
  const handleChange = (e) => {
    name = e.target.name;
    value = e.target.value;
    setCount(1);
    setFormData({ ...formData, [name]: value });
    console.log(startDate);
  };

  const buttonSave = (e) => {};

  const handleonSubmit = (e) => {
    e.preventDefault();
    if (
      formData.msubject.length === 0 ||
      formData.mlocation.length === 0 ||
      formData.mlink.length === 0 ||
      formData.textarea.length === 0
    ) {
      seterror(true);
    }
    console.log(formData);
  };

  const buttonCancel = () => {
    seterror(false);
    setCount(0);
    setFormData(dummySet);
  };

  return (
    <>
      <form onSubmit={handleonSubmit}>
        {sectionone && (
          <MeetingStyled className="d-md-flex w-100 ">
            <FormInputs
              // placeholder="Meeting Subject"
              placeholder={firstsubplace}
              margin="0"
              width="60%"
              paddingright="0 15px"
              placeholderfontsize="13px"
              borderb="none"
              color="#7a7a7a"
              value={formData.msubject}
              name="msubject"
              onChange={handleChange}
            />
            {error && formData.msubject.length <= 0 ? (
              <ErrorMsg labeldata="Please Enter some data" />
            ) : (
              ""
            )}

            {/* Date comp ******  */}

            <DateComp
              placeholder="Start Date"
              onChange={(date) => setStartDate(date)}
              selected={startDate}
              name="startDate"
              dateFormat="dd/MM/yyyy"
            />

            <TimePickerComp
              placeholder="Start Time"
              // hourPlaceholder="Start"
              // secondPlaceholder="Time"
              name="test"
            />

            <TimePickerComp
              placeholder="Start Time"
              // hourPlaceholder="Start"
              // secondPlaceholder="Time"
              name="test"
            />
          </MeetingStyled>
        )}

        {sectiontwo && (
          <MeetingStyled>
            <Label
              headingthird
              fontsize="14px"
              color="#7a7a7a"
              marginbottom="10px"
            >
              {labelone}
            </Label>
            <FormInputs
              placeholder={fifthsubplace}
              margin="0"
              width="60%"
              paddingright="0 15px"
              placeholderfontsize="13px"
              borderb="none"
              color="#7a7a7a"
              name="mlocation"
              value={formData.mlocation}
              onChange={handleChange}
            />
            {error && formData.mlocation.length <= 0 ? (
              <ErrorMsg labeldata="Please Enter some data" />
            ) : (
              ""
            )}
          </MeetingStyled>
        )}

        {sectionthree && (
          <MeetingStyled className="d-flex">
            <FormInputs
              // placeholder="Meeting Link"
              placeholder={sixthsubplace}
              margin="0"
              width="45%"
              paddingright="0 15px"
              placeholderfontsize="13px"
              borderb="none"
              color="#7a7a7a"
              value={formData.mlink}
              name="mlink"
              onChange={handleChange}
            />
            {error && formData.mlink.length <= 0 ? (
              <ErrorMsg labeldata="Please Enter some data" />
            ) : (
              ""
            )}
            <MaterialIcon padding="0" color="#7a7a7a">
              launch
            </MaterialIcon>
          </MeetingStyled>
        )}
        {sectionfour && (
          <MeetingStyled>
            <TextArea
              margintop="0"
              marginleft="0"
              fontsize="13px"
              borderb="0"
              width="690px"
              height="120px"
              name="textarea"
              value={formData.textarea}
              // placeholder="Type your agenda here"
              placeholder={seventhsubplace}
              onChange={handleChange}
            />
            {error && formData.textarea.length <= 0 ? (
              <ErrorMsg labeldata="Please Enter some data" />
            ) : (
              ""
            )}
          </MeetingStyled>
        )}
        {sectionfive && (
          //   <div className="d-md-flex">
          <LastSectionStyled className="d-md-flex p-r-1">
            <div className="col-3">
              <Label
                headingthird
                fontsize="14px"
                color="#7a7a7a"
                marginbottom="10px"
              >
                {labeltwo}
              </Label>

              <DropDowncom
                width="100%"
                color="#333"
                options={callPurpose}
                optionsone={meetingData}
                name="callpurpose"
                value={formData.callpurpose}
                onChange={handleChange}
              />
            </div>
            <div className="col-3">
              <Label
                headingthird
                fontsize="14px"
                color="#7a7a7a"
                marginbottom="10px"
              >
                {labelthree}
              </Label>
              <div className="d-flex">
                <DateComp
                  placeholder="12-04-2023"
                  onChange={(date) => setStartDate(date)}
                  selected={startDate}
                  name="startDate"
                  dateFormat="dd/MM/yyyy"
                />

                <TimePickerComp
                  placeholder="Start Time"
                  // hourPlaceholder="Start"
                  // secondPlaceholder="Time"
                  name="test"
                />
              </div>
            </div>

            {sectionfivesub && (
              <div className="col-3">
                <Label
                  headingthird
                  fontsize="14px"
                  color="#7a7a7a"
                  marginbottom="10px"
                >
                  {labelfour}
                </Label>
                <DropDowncom
                  width="100%"
                  color="#333"
                  options={callResult}
                  name="callresult"
                  value={formData.callresult}
                  onChange={handleChange}
                />
              </div>
            )}
          </LastSectionStyled>
          //   </div>
        )}

        <PopUpPanel
          count={count}
          position="inherit"
          boxshadow="none"
          textalign="left"
          width="100%"
          transformt="none"
          padding="16px 25px"
          onClick={buttonCancel}
          onClick1={buttonSave}
          paddinghover="16px 26px"
        ></PopUpPanel>
      </form>
    </>
  );
};

export default MeetingTemplate;
