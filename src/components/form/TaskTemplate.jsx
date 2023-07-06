import React from "react";
import FormInputs from "./FormInputs";
import TextArea from "./TextArea";
import Label from "../common/Label";
import styled from "@emotion/styled";
import ButtonComponent from "../common/ButtonComponent";
import DateComp from "./DateComp";
import DropDowncom from "./DropDowncom";
import PopUpPanel from "../common/PopUpPanel";
import ErrorMsg from "./ErrorMsg";
import TimePickerComp from "./TimePickerComp";

const MeetingStyled = styled.div`
  border-bottom: 1px solid;
  border-color: rgba(0, 0, 0, 0.12);
  padding: 12px 0;
`;

const dropDownDataPriority = [
  { id: 1, value: "Other" },
  { id: 2, value: "Demo" },
  { id: 3, value: "Technically Rejected" },
  { id: 4, value: "Call Back" },
  { id: 5, value: "Non Contacted" },
  { id: 6, value: "Interested in call" },
];

const dropDownDataAssignedTo = [
  { id: 1, value: "Demo" },
  { id: 2, value: "Technically Rejected" },
  { id: 3, value: "Call Back" },
  { id: 4, value: "Non Contacted" },
  { id: 5, value: "Interested in call" },
];

function TaskTemplate({
  firstsubplace = "",
  secondsubplace = "",
  labelone = "",
  labeltwo = "",
  thirdsubplace = "",
  fourthsubplace = "",
  labelthree = "",
  fifthsubplace = "",
  sixthsubplace = "",
  labelfour = "",
  seventhsubplace = "",
  eighthsubplace = "",
}) {
  const [startDate, setStartDate] = React.useState();

  const [error, seterror] = React.useState(false);

  const [count, setCount] = React.useState();

  const [taskData, setTaskData] = React.useState({
    tasktitle: "",
    entertask: "",
    priority: "",
    assignedto: "",
    dateone: "",
  });

  const [dummySet, setDummySet] = React.useState({
    tasktitle: "",
    entertask: "",
    priority: "",
    assignedto: "",
    dateone: "",
  });

  let name, value, date;
  const handleChangenew = (e) => {
    name = e.target.name;
    value = e.target.value;
    setTaskData({ ...taskData, [name]: value });
    setCount(1);
  };

  const buttonSave = () => {};

  const handleonsubmit = (e) => {
    e.preventDefault();
    console.log(taskData);
    console.log(startDate);
    if (taskData.tasktitle.length === 0 || taskData.entertask.length === 0) {
      seterror(true);
    }
  };

  const buttonCancel = () => {
    seterror(false);
    setCount(0);
    setTaskData(dummySet);
  };

  return (
    <>
      <form onSubmit={handleonsubmit}>
        <MeetingStyled>
          <FormInputs
            // placeholder="Meeting Subject"
            placeholder={firstsubplace}
            margin="0"
            width="60%"
            paddingright="0 15px"
            placeholderfontsize="13px"
            borderb="none"
            color="#7a7a7a"
            value={taskData.tasktitle}
            name="tasktitle"
            onChange={handleChangenew}
          />
          {error && taskData.tasktitle.length <= 0 ? (
            <ErrorMsg labeldata="Please enter some data" />
          ) : (
            ""
          )}
        </MeetingStyled>

        <TextArea
          margintop="12px"
          marginleft="0"
          fontsize="13px"
          borderb="none"
          width="100%"
          height="60px"
          name="entertask"
          value={taskData.entertask}
          // placeholder="Type your agenda here"
          onChange={handleChangenew}
          placeholder={secondsubplace}
        />
        {error && taskData.entertask.length <= 0 ? (
          <ErrorMsg labeldata="Please enter some data" />
        ) : (
          ""
        )}

        <div className="row">
          <div className="col-3">
            <Label
              headingthird
              fontsize="14px"
              color="#7a7a7a"
              marginbottom="10px"
            >
              {labelone}
            </Label>

            <DropDowncom
              options={dropDownDataPriority}
              onChange={handleChangenew}
              name="priority"
              value={taskData.priority}
            />
          </div>
          <div className="col-3">
            <Label
              headingthird
              fontsize="14px"
              color="#7a7a7a"
              marginbottom="10px"
            >
              {labeltwo}
            </Label>

            <div className="wrapper d-flex">
              <DateComp
                placeholder="12-04-2023"
                width="50%"
                onChange={(date) => setStartDate(date)}
                date="dateone"
                selected={startDate}
              />
              <TimePickerComp />
            </div>
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

            <div className="wrapper d-flex">
              <DateComp
                placeholder="12-04-2023"
                width="50%"
                onChange={(date) => setStartDate(date)}
                date="dateone"
                selected={startDate}
              />
              <TimePickerComp />
            </div>
          </div>
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
              // option5="Demo"
              // option7="Technically Rejected"
              // option8="Call Back"
              // option9="Non Contacted"
              // option10="Interested in call"
              name="assignedto"
              options={dropDownDataAssignedTo}
              value={taskData.assignedto}
              onChange={handleChangenew}
            />
          </div>
        </div>

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
        />
      </form>
    </>
  );
}

export default TaskTemplate;
