import React, { useEffect, useRef, useState } from "react";
import { MaterialIcon, PageLink, SideBar, AddAttachment } from "../common";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "@emotion/styled";
import Repositries from "../../css/RepositoryPage.css";
import Label from "../common/Label";
import AccordionItem from "../common/AccordionItem";
import FormInputs from "../form/FormInputs";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import TabActivity from "../Tabs/TabActivity";
import BasicTabs from "../Tabs/TabTest";
import ButtonComponent from "../common/ButtonComponent";
import PopUpPanel from "../common/PopUpPanel";
import ErrorMsg from "../form/ErrorMsg";
import RightPopModel from "../popModel/RightPopModel";

const InfoStyled = styled.div`
  box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.06);
  padding: 15px 25px 10px 25px;
  background: #fff;
  margin-top: 15px;
  min-height: 120px;
  border-radius: 4px;
  position: relative;
`;

const CreateLeadStyled = styled.div`
  @media (min-width: 768px) {
    position: absolute;
    top: 10px;
    right: 25px;
  }
`;

const RepositoryStyled = styled.div`
  padding: 15px;
  background: #f9f9f9;
`;

const WrapperStyled = styled.div`
  width: 100%;
  padding-left: 50px;
  padding-top: 50px;
`;

// setUserData((prevState) => ({
//   userdata: {
//     // object that we want to update
//     ...prevState.userdata, // keep all other key-value pairs
//     name: "something", // update the value of specific key
//   },
// }));
// console.log(userdata);

function RepositoryPage({ num = "" }) {
  const [count, setCount] = React.useState();

  const [userdata, setUserData] = React.useState({
    contactnum1: "1112334455",
    contactnum2: "7897545673",
    emailid: "nmm@gmail.com",
    name: "Mr. Erik Lensherr Schwarjhaneagar",
    cname: "Solar Expert",
    designation: "",
    department: "",
    website: "",
    IndustryType: "",
    Source: "",
    AssignedTo: "",
    Description: "",
    CompanyAddress: " ",
    City: "",
    State: "",
    Country: "",
    PostalCode: "",
    test: "",
  });

  const [newData, setNewData] = React.useState({
    contactnum1: "",
    contactnum2: "",
    emailid: "",
    name: "",
    cname: "",
    designation: "",
    department: "",
    website: "",
    IndustryType: "",
    Source: "",
    AssignedTo: "",
    Description: "",
    CompanyAddress: " ",
    City: "",
    State: "",
    Country: "",
    PostalCode: "",
    test2: "",
  });

  const presentData = useRef(userdata);

  let name, value;
  const handleonchange = (e) => {
    e.preventDefault();
    name = e.target.name;
    value = e.target.value;
    setCount(1);
    console.log(name);

    // setNewData({ ...newData, [name]: value });

    setUserData({ ...userdata, [name]: value });
  };

  const [error, seterror] = React.useState(false);

  const patternEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const patternNumber = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;

  const buttonSave = (e) => {
    e.preventDefault();
    console.log(userdata);

    if (
      userdata.name.length === 0 ||
      userdata.contactnum1.length === 0 ||
      userdata.contactnum2.length === 0 ||
      userdata.emailid.length === 0 ||
      patternNumber.test(userdata.contactnum1) === false ||
      patternEmail.test(userdata.emailid) === false ||
      userdata.emailid.length === 0 ||
      patternNumber.test(userdata.contactnum2) === false
    ) {
      seterror(true);
    }

    presentData.current = userdata;
  };

  // const handleonSubmit = (e) => {};

  const buttonCancel = () => {
    seterror(false);
    setCount(0);
    setUserData(presentData.current);
  };

  const [switchval, setSwitchVal] = useState();

  const handlelead = () => {
    setSwitchVal(1);
  };

  const onChange = (newnum) => {
    setSwitchVal(newnum);
  };

  return (
    <>
      <WrapperStyled>
        <RepositoryStyled className="RepositoryPage-wrapper">
          <InfoStyled>
            <PageLink color="#7a7a7a" fontsize="13px">
              <FaLongArrowAltLeft /> &nbsp; Repository List
            </PageLink>
            <Label
              headingthird="true"
              fontsize="25px"
              margin="7px 0"
              weight="300"
              color="#160f29"
            >
              Mr. Erik Lensherr Schwarjhaneagar
            </Label>
            <Label
              contentHeading
              content="Solar expert"
              fontsize="14px"
              margin="0"
            ></Label>

            <CreateLeadStyled className="d-flex justify-content-end text-right">
              <ButtonComponent
                onClick={handlelead}
                bcolor="inherit"
                color="#7a7a7a"
                padding="0 20px"
                fontsize="13px"
                border="0"
              >
                Create Lead
              </ButtonComponent>

              <ButtonComponent
                onClick={handlelead}
                bcolor="inherit"
                color="#7a7a7a"
                padding="0 20px"
                fontsize="13px"
                border="0"
              >
                Next
              </ButtonComponent>
            </CreateLeadStyled>
          </InfoStyled>

          <div className="main-div-accordion-plus-another d-md-flex">
            <div className="only-accrod">
              <AccordionItem
                id="flush-headingOne"
                collapse="flush-collapseOne"
                mainheading="Contact information"
              >
                <Label headingthird fontsize="12px" color="#7a7a7a">
                  Contact Number 1
                </Label>
                <FormInputs
                  placeholder="9090909090"
                  margin="0"
                  width="100%"
                  placeholderfontsize="12px"
                  borderb="none"
                  color="#7a7a7a"
                  value={userdata.contactnum1}
                  // defaultValue={userdata.contactnum1}
                  name="contactnum1"
                  onChange={handleonchange}
                />
                {/* <input
                  onChange={testhandlechange}
                  placeholder="enter some value"
                  type="text"
                  defaultValue={testnew}
                  // ref="fieldname"
                  // value={test}
                ></input> */}
                {/* <button onClick={cancelbtntest} type="submit">
                  cancel
                </button> */}
                {error && userdata.contactnum1.length <= 0 ? (
                  <ErrorMsg labeldata="Please Enter some data" />
                ) : (
                  ""
                )}
                <Label headingthird fontsize="12px" color="#7a7a7a">
                  Contact Number 2
                </Label>
                <FormInputs
                  placeholder="9090909090"
                  margin="0"
                  width="100%"
                  borderb="none"
                  placeholderfontsize="12px"
                  color="#7a7a7a"
                  value={userdata.contactnum2}
                  // defaultValue={userdata.contactnum2}
                  name="contactnum2"
                  onChange={handleonchange}
                />
                {error && userdata.contactnum2.length <= 0 ? (
                  <ErrorMsg labeldata="Please Enter some data" />
                ) : (
                  ""
                )}
                <Label headingthird fontsize="12px" color="#7a7a7a">
                  Email Id
                </Label>
                <FormInputs
                  placeholder="Email Id"
                  margin="0"
                  width="100%"
                  borderb="none"
                  placeholderfontsize="12px"
                  color="#7a7a7a"
                  value={userdata.emailid}
                  // defaultValue={userdata.emailid}
                  name="emailid"
                  onChange={handleonchange}
                />
                {error && userdata.emailid.length <= 0 ? (
                  <ErrorMsg labeldata="Please Enter some data" />
                ) : (
                  ""
                )}
              </AccordionItem>

              <AccordionItem
                id="flush-headingTwo"
                collapse="flush-collapseTwo"
                mainheading="About Mr. Erik Lensherr Schwarjhaneagar"
              >
                <Label headingthird fontsize="12px" color="#7a7a7a">
                  Name
                </Label>
                <FormInputs
                  placeholder="Mr. Erik Lensherr Schwarjhaneagar"
                  margin="0"
                  width="100%"
                  borderb="none"
                  placeholderfontsize="12px"
                  color="#7a7a7a"
                  value={userdata.name}
                  name="name"
                  onChange={handleonchange}
                />
                {error && userdata.name.length <= 0 ? (
                  <ErrorMsg labeldata="Please Enter some data" />
                ) : (
                  ""
                )}
                <Label headingthird fontsize="12px" color="#7a7a7a">
                  Company Name
                </Label>
                <FormInputs
                  placeholder="Solar expert"
                  margin="0"
                  width="100%"
                  borderb="none"
                  placeholderfontsize="12px"
                  color="#7a7a7a"
                  value={userdata.cname}
                  name="cname"
                  onChange={handleonchange}
                />
                <Label headingthird fontsize="12px" color="#7a7a7a">
                  Designation
                </Label>

                <FormInputs
                  placeholder="Designation"
                  margin="0"
                  width="100%"
                  borderb="none"
                  placeholderfontsize="12px"
                  color="#7a7a7a"
                  value={userdata.designation}
                  name="designation"
                  onChange={handleonchange}
                />
                <Label headingthird fontsize="12px" color="#7a7a7a">
                  Department
                </Label>
                <FormInputs
                  placeholder="Department"
                  margin="0"
                  width="100%"
                  borderb="none"
                  placeholderfontsize="12px"
                  color="#7a7a7a"
                  value={userdata.department}
                  name="department"
                  onChange={handleonchange}
                />
                <Label headingthird fontsize="12px" color="#7a7a7a">
                  Website
                </Label>
                <FormInputs
                  placeholder="Website"
                  margin="0"
                  width="100%"
                  borderb="none"
                  placeholderfontsize="12px"
                  color="#7a7a7a"
                  value={userdata.website}
                  name="website"
                  onChange={handleonchange}
                />
                <Label headingthird fontsize="12px" color="#7a7a7a">
                  Industry Type
                </Label>
                <FormInputs
                  placeholder="Industry Type"
                  margin="0"
                  width="100%"
                  borderb="none"
                  placeholderfontsize="12px"
                  color="#7a7a7a"
                  value={userdata.IndustryType}
                  name="IndustryType"
                  onChange={handleonchange}
                />
                <Label headingthird fontsize="12px" color="#7a7a7a">
                  Source
                </Label>
                <FormInputs
                  placeholder="Source"
                  margin="0"
                  width="100%"
                  borderb="none"
                  placeholderfontsize="12px"
                  color="#7a7a7a"
                  value={userdata.Source}
                  name="Source"
                  onChange={handleonchange}
                />
                <Label headingthird fontsize="12px" color="#7a7a7a">
                  Assigned To
                </Label>
                <FormInputs
                  placeholder="Assigned To"
                  margin="0"
                  width="100%"
                  borderb="none"
                  placeholderfontsize="12px"
                  color="#7a7a7a"
                  value={userdata.AssignedTo}
                  name="AssignedTo"
                  onChange={handleonchange}
                />
                <Label headingthird fontsize="12px" color="#7a7a7a">
                  Description
                </Label>
                <FormInputs
                  placeholder="Description"
                  margin="0"
                  width="100%"
                  borderb="none"
                  placeholderfontsize="12px"
                  color="#7a7a7a"
                  value={userdata.Description}
                  name="Description"
                  onChange={handleonchange}
                />
              </AccordionItem>

              <AccordionItem
                id="flush-headingThree"
                collapse="flush-collapseThree"
                mainheading="Contact Address"
              >
                <Label headingthird fontsize="12px" color="#7a7a7a">
                  Company Address
                </Label>
                <FormInputs
                  placeholder="Company Address"
                  margin="0"
                  width="100%"
                  borderb="none"
                  placeholderfontsize="12px"
                  color="#7a7a7a"
                  value={userdata.CompanyAddress}
                  name="CompanyAddress"
                  onChange={handleonchange}
                />
                <Label headingthird fontsize="12px" color="#7a7a7a">
                  City
                </Label>

                <FormInputs
                  placeholder="City"
                  margin="0"
                  width="100%"
                  borderb="none"
                  placeholderfontsize="12px"
                  color="#7a7a7a"
                  value={userdata.City}
                  name="City"
                  onChange={handleonchange}
                />
                <Label headingthird fontsize="12px" color="#7a7a7a">
                  State
                </Label>
                <FormInputs
                  placeholder="State"
                  margin="0"
                  width="100%"
                  borderb="none"
                  placeholderfontsize="12px"
                  color="#7a7a7a"
                  value={userdata.State}
                  name="State"
                  onChange={handleonchange}
                />
                <Label headingthird fontsize="12px" color="#7a7a7a">
                  Country
                </Label>
                <FormInputs
                  placeholder="Country"
                  margin="0"
                  width="100%"
                  borderb="none"
                  placeholderfontsize="12px"
                  color="#7a7a7a"
                  value={userdata.Country}
                  name="Country"
                  onChange={handleonchange}
                />
                <Label headingthird fontsize="12px" color="#7a7a7a">
                  Postal Code
                </Label>
                <FormInputs
                  placeholder="Enter Postal Code"
                  margin="0"
                  width="100%"
                  borderb="none"
                  placeholderfontsize="12px"
                  color="#7a7a7a"
                  value={userdata.PostalCode}
                  name="PostalCode"
                  onChange={handleonchange}
                />
              </AccordionItem>

              <AccordionItem
                id="flush-headingFour"
                collapse="flush-collapseFour"
                mainheading="Mr. Erik Lensherr Schwarjhaneagar Leads (0)"
              >
                <Label headingthird fontsize="12px" color="#7a7a7a">
                  No data Found
                </Label>
              </AccordionItem>

              <AccordionItem
                id="flush-headingFive"
                collapse="flush-collapseFive"
                mainheading="Files"
              >
                <AddAttachment />
              </AccordionItem>
            </div>

            <div className="update-activity-section">
              <div className="d-flex flex-wrap">
                <BasicTabs />
              </div>
              <div className="for-style d-flex flex-wrap">
                <TabActivity />
              </div>
              <div className="for-style-paddding d-flex flex-wrap"></div>
            </div>
          </div>
        </RepositoryStyled>
      </WrapperStyled>
      <PopUpPanel
        className="d-flex justify-content-center align-items-center animantionClass"
        count={count}
        padding="20px 32px"
        onClick={buttonCancel}
        onClick1={buttonSave}
        hoverbcolor="rgba(255,173,173,.3)"
        // transformt="0"
        // animation=`${bottomUpanim} 0.7s linear`
      />
      <RightPopModel num={switchval} onNumChange={onChange} />
      {/* <OuterContentStyled></OuterContentStyled> */}
    </>
  );
}

export default RepositoryPage;
