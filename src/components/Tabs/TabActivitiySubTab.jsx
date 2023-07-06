import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import styled from "@emotion/styled";
import MessageBoxSvg from "../svgs/MessageBoxSvg";
import Tabactivitysub from "../../css/Tabactivitysub.css";

const SvgMessageBoxStyled = styled.div`
  width: 100%;
  height: auto;
  margin: 75px 0;
  justify-content: center;
  display: flex;
`;

const TabStyled = styled(Tab)({
  color: "#160f29",
  textTransform: "none",
  "&.Mui-selected": {
    color: "#ff7a00",
  },
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;
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

function TabActivitiySubTab() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Box>
        <Box>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <TabStyled label="All" />
            <TabStyled label="Meeting" />
            <TabStyled label="Call" />
            <TabStyled label="Task" />
            <TabStyled label="Update" />
            <TabStyled label="Email" />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <SvgMessageBoxStyled>
            <MessageBoxSvg />
          </SvgMessageBoxStyled>
        </TabPanel>
        <TabPanel value={value} index={1}>
          Second
        </TabPanel>
        <TabPanel value={value} index={2}>
          Third
        </TabPanel>
        <TabPanel value={value} index={3}>
          Fourth
        </TabPanel>
        <TabPanel value={value} index={4}>
          fifth
          <SvgMessageBoxStyled>
            <MessageBoxSvg />
          </SvgMessageBoxStyled>
        </TabPanel>
        <TabPanel value={value} index={5}>
          Six
        </TabPanel>
      </Box>
    </>
  );
}

export default TabActivitiySubTab;
