import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextArea from "../form/TextArea";
import TabActivitiySubTab from "./TabActivitiySubTab";
import Tabactivity from "../../css/Tabactivity.css";
import styled from "@emotion/styled";
import PopUpPanel from "../common/PopUpPanel";
import { ActivityBar } from "../common";
import "bootstrap/dist/css/bootstrap.min.css";

const TabStyled = styled(Tab)({
  color: "#160f29",
  textTransform: "none",
  "&.Mui-selected": {
    color: "#160f29",
    borderBottom: "3px Solid #0d47a1",
  },
});

function TabPanel(props) {
  const { children, value, index, className, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 1 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function TabActivity() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Box sx={{ width: "100%", boxShadow: "0px 4px 18px rgba(0,0,0,.06)" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <TabStyled label="Activity" />
            <TabStyled label="Campaign Emailers" />
            <TabStyled label="Logs" />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <TabActivitiySubTab />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <img
            src="https://testing.edgecrm.in/images/brainstorming.svg"
            width="50%"
            className="activitytab"
          ></img>
        </TabPanel>
        <TabPanel value={value} index={2}>
          {/* <TextArea
            padding="0 15px"
            margin="0"
            borderb="none"
            width="100%"
            height="150px"
            placeholder="Type your updates here"
            placeholderfontsize="15px"
          /> */}
          <ActivityBar />
        </TabPanel>
        <TabPanel value={value} index={3}>
          three
        </TabPanel>
        <TabPanel value={value} index={4}>
          Item four
        </TabPanel>
        <TabPanel value={value} index={5}>
          Item five
        </TabPanel>
      </Box>
    </>
  );
}

export default TabActivity;
