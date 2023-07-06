import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import styled from "@emotion/styled";
import { PageLink } from "../common";
import TextArea from "../form/TextArea";
import FormTemplate from "../template/FormTemplate";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { withStyles } from "@mui/styles";
import { makeStyles } from "@mui/styles";
import Tabtest from "../../css/Tabtest.css";
import { Styles } from "@mui/styles";
import MeetingTemplate from "../form/MeetingTemplate";
import TaskTemplate from "../form/TaskTemplate";
import GmailTemp from "../form/GmailTemp";
import DropDowncom from "../form/DropDowncom";
import PopUpPanel from "../common/PopUpPanel";
import { set } from "date-fns";
import ErrorMsg from "../form/ErrorMsg";

const TabStyled = styled(Tab)({
  color: "#160f29",
  textTransform: "none",
  "&.Mui-selected": {
    color: "#160f29",
    borderBottom: "3px Solid #0d47a1",
  },
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div hidden={value !== index}>
      {value === index && (
        <Box sx={{ p: 1 }}>
          <Typography variant="p">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

// const dropdowndatameeting = {
//   option1: "Call",
//   option2: "Appointment",
//   option3: "Personal Meeting",
//   option4: "Call",
//   option5: "Demo",
// };

const meetingFormLabelpholder = {
  firstsubplace: "Meeting Subject",
  secondsubplace: "Date",
  thirdsubplace: "Start Time",
  forthsubplace: "End Time",
  labelone: "Meeting Location",
  fifthsubplace: "Enter A Location",
  sixthsubplace: "Meeting Link",
  seventhsubplace: "Type your agenda here",
  labeltwo: "Type",
  eighthsubplace: "Meeting Type",
  labelthree: "Reminder",
  ninethsubplace: "Date",
  tenthsubplac: "Time",
};

const callFormLabelpHolder = {
  firstsubplace: "Call Subject",
  secondsubplace: "Date",
  thirdsubplace: "Start Time",
  forthsubplace: "End Time",
  labelone: "Meeting Location",
  fifthsubplace: "Call Link",
  sixthsubplace: "Call Link",
  seventhsubplace: "Type your agenda here",
  labeltwo: "Call Purpose",
  eighthsubplace: "Call Purpose",
  labelthree: "Reminder",
  ninethsubplace: "Date",
  tenthsubplace: "Time",
  labelfour: "Call Result",
  eleventhsubplace: "Select Call Result",
};

const taskTempLabelpHolder = {
  firstsubplace: "Task Title",
  secondsubplace: "Enter Your Task",
  labelone: "Priority",
  thirdsubplace: "19-04-2023",
  fourthsubplace: "14:02",
  labelthree: "Start*",
  fifthsubplace: "19-04-2023",
  sixthsubplace: "14:02",
  labelfour: "Assigned To",
  seventhsubplace: "Edge Consultant",
  labeltwo: "Start*",
  eighthsubplace: "Task Priority",
};

const dropDownDataMeeting = [
  { id: 1, value: "Call" },
  { id: 2, value: "Appointment" },
  { id: 3, value: "Personal Meeting" },
  { id: 4, value: "Demo" },
];

const dropDownDataCallPurpose = [
  { id: 1, value: "Sales" },
  { id: 2, value: "Support" },
  { id: 3, value: "Collection" },
  { id: 4, value: "Other" },
  { id: 5, value: "Demo" },
];

const dropDownDataCallResult = [
  { id: 1, value: "Technically Rejected" },
  { id: 2, value: "Call Back" },
  { id: 3, value: "Non Contacted" },
  { id: 4, value: "Interested in call" },
];

export default function BasicTabs() {
  const [values, setValue] = React.useState(1);
  const [error, seterror] = React.useState(false);
  const [count, setCount] = React.useState();

  const [updatecount, setUpdateCount] = React.useState({
    textarea: "",
  });

  let name, value;
  const handletextarea = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUpdateCount({ ...updatecount, [name]: value });
    setCount(1);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const buttonSave = () => {
    console.log(updatecount);
    if (updatecount.textarea.length === 0) {
      seterror(true);
    }
  };

  const buttonCancel = () => {
    seterror(false);
    setCount(0);
    setUpdateCount(({} = ""));
    console.log(updatecount);
  };

  return (
    <Box sx={{ width: "100%", boxShadow: "0px 4px 18px rgba(0,0,0,.06)" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={values}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <PageLink
            color="#160f29"
            padding="15px"
            margin="0 15px"
            fontsize="15px"
            value={values}
            index={0}
          >
            Next Section &nbsp;
            <FaLongArrowAltRight />
          </PageLink>
          <TabStyled label="Update" />
          <TabStyled label="Meeting" />
          <TabStyled label="Call" />
          <TabStyled label="Task" />
          <TabStyled label="Email" />
        </Tabs>
      </Box>
      <TabPanel value={values} index={0} />
      <TabPanel value={values} index={1}>
        <TextArea
          padding="0 15px"
          margin="0"
          borderb="none"
          width="100%"
          height="150px"
          name="textarea"
          value={updatecount.textarea}
          placeholder="Type your updates here"
          placeholderfontsize="15px"
          onChange={handletextarea}
        />
        {error && updatecount.textarea.length <= 0 ? (
          <ErrorMsg labeldata="Please Enter some data" />
        ) : (
          ""
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
        ></PopUpPanel>
      </TabPanel>

      <TabPanel value={values} index={2}>
        <MeetingTemplate
          sectionone
          sectiontwo
          sectionthree
          sectionfour
          sectionfive
          // options={callOptions}
          // firstsubplace="Meeting Subject"
          // secondsubplace="Date"
          // thirdsubplace="Start Time"
          // forthsubplace="End Time"
          // labelone="Meeting Location"
          // fifthsubplace="Enter A Location"
          // sixthsubplace="Meeting Link"
          // seventhsubplace="Type your agenda here"
          // labeltwo="Type"
          // eighthsubplace="Meeting Type"
          // labelthree="Reminder"
          // ninethsubplace="Date"
          // tenthsubplace="Time"
          {...meetingFormLabelpholder}
          meetingData={dropDownDataMeeting}
        />
      </TabPanel>
      <TabPanel value={values} index={3}>
        <MeetingTemplate
          sectionone
          sectionthree
          sectionfour
          sectionfive
          sectionfivesub
          // firstsubplace="Call Subject"
          // secondsubplace="Date"
          // thirdsubplace="Start Time"
          // forthsubplace="End Time"
          // labelone="Meeting Location"
          // fifthsubplace="Call Link"
          // sixthsubplace="Call Link"
          // seventhsubplace="Type your agenda here"
          // labeltwo="Call Purpose"
          // eighthsubplace="Call Purpose"
          // labelthree="Reminder"
          // ninethsubplace="Date"
          // tenthsubplace="Time"
          // labelfour="Call Result"
          // eleventhsubplace="Select Call Result"
          {...callFormLabelpHolder}
          callPurpose={dropDownDataCallPurpose}
          callResult={dropDownDataCallResult}
          // {...dropdowndatacallresult}
        />
      </TabPanel>
      <TabPanel value={values} index={4}>
        <TaskTemplate
          // firstsubplace="Task Title"
          // secondsubplace="Enter Your Task"
          // labelone="Priority"
          // thirdsubplace="19-04-2023"
          // fourthsubplace="14:02"
          // labelthree="Start*"
          // fifthsubplace="19-04-2023"
          // sixthsubplace="14:02"
          // labelfour="Assigned To"
          // seventhsubplace="Edge Consultant"
          // labeltwo="Start*"
          // eighthsubplace="Task Priority"
          {...taskTempLabelpHolder}
        />
      </TabPanel>
      <TabPanel value={values} index={5}>
        <GmailTemp />
      </TabPanel>
    </Box>
  );
}
