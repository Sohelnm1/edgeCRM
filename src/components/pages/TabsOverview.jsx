import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Paper from "@mui/material/Paper";
import styled from "@emotion/styled";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";

const WrapperStyled = styled.div`
  width: 100%;
  padding-left: 50px;
  padding-top: 100px;
  color: black;
`;

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
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function TabsOverview() {
  const [value, setValue] = React.useState(0);
  return (
    <>
      <WrapperStyled>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              // textColor="primary"
              // indicatorColor="primary"
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            >
              <Tab label="First"> </Tab>
              <Tab label="second"> </Tab>
              <Tab label="Third"> </Tab>
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            First panel
            <div>
              <h1>
                {" "}
                This will be first component box in which display got displayed{" "}
              </h1>
            </div>
          </TabPanel>
          <TabPanel value={value} index={1}>
            Second panel
          </TabPanel>
          <TabPanel value={value} index={2}>
            Third panel
          </TabPanel>
        </Box>
        <h3>TAB NO: {value} clicked!</h3>
      </WrapperStyled>
    </>
  );
}

export default TabsOverview;
