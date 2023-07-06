import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import Label from "../common/Label";
import ButtonComponent from "../common/ButtonComponent";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import FormInputs from "../form/FormInputs";

const WrapperStyled = styled.div`
  width: 55%;
  height: 100vh;
  float: right;
  position: fixed;
  right: 0;
  top: 0;
  background-color: #fff;
  z-index: 1033;
  animation: move 0.3s linear;
  @keyframes move {
    0% {
      transform: translateX(840px);
    }
    100% {
      transform: translateX(0px);
    }
  }

  .heading {
    padding: 0px 25px;
    width: 100%;
    height: calc(1.35rem + 2.5vw);
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: linear-gradient(
        270deg,
        #366bc9 7.29%,
        rgba(255, 255, 255, 0) 75.52%
      ),
      #0b3b90;
  }
  .row {
    padding: 25px 25px;
    margin: 0;
  }
  .col {
    display: grid;
    justify-content: center;
    align-items: center;
  }
`;

const OuterContentStyled = styled.div`
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1032;
  position: fixed;
  top: 0;
  backdrop-filter: blur(5px);
`;

const FontRArrowStyled = styled(FaLongArrowAltRight)({
  animation: "arrowR 1s infinite",
  "@Keyframes arrowR": {
    "0%": { transform: "translateX(-6px)" },
    "50%": { transform: "translateX(5px)" },
    "100%": { transform: "translateX(-6px)" },
  },
});

const FontLArrowStyled = styled(FaLongArrowAltLeft)({
  animation: "arrowL 1s infinite",
  "@Keyframes arrowL": {
    "0%": { transform: "translateX(-3px)" },
    "50%": { transform: "translateX(3px)" },
    "100%": { transform: "translateX(-3px)" },
  },
});

const fieldData = [
  { label: "Contact", placeholder: "Your contact" },
  { label: "Contract Cost", placeholder: "Your contact" },
  { label: "Company Name", placeholder: "Your contact" },
  { label: "Assign To", placeholder: "Your contact" },
];

const contractFields = [
  { label: "Contract Name", placeholder: "Contract" },
  { label: "Tenure of Contract", placeholder: "Start" },
  { label: "Address", placeholder: "Your contact" },
  { label: "Line Of Business", placeholder: "Select LOB" },
];

const typesField = [
  { label: "Contract Type", placeholder: "Contract Type" },
  { label: "Status", placeholder: "Status" },
  { label: "Contact Person", placeholder: "Contact Person" },
  { label: "Business Unit", placeholder: "Business Unit" },
];

function RightPopModel({ num, onNumChange }) {
  const handlenext = () => {
    onNumChange(2);
  };

  const handlecancel = () => {
    onNumChange(null);
  };

  const handleBack = () => {
    onNumChange(1);
  };

  switch (num) {
    case 1:
      return (
        <>
          <OuterContentStyled className="content-wrapper">
            <WrapperStyled className="wrapper">
              <div className="heading">
                <Label
                  contentHeading
                  color="#fff"
                  content="Create Lead"
                  margin="0"
                  fontsize="18px"
                />
                <ButtonComponent
                  bcolor="#176ec4"
                  background="#176ec4"
                  border="0"
                  color="#fff"
                  fontsize="18px"
                  onClick={handlecancel}
                  className="arrowanimation"
                >
                  Close &nbsp;
                  <FontRArrowStyled />
                </ButtonComponent>
              </div>
              <div className="row w-100">
                <div className="col">
                  {fieldData.map((el) => {
                    return (
                      <>
                        <Label
                          contentHeading
                          content={el.label}
                          margin="30px 0 10px 0"
                          color="#14315e"
                          fontsize="14px"
                        />
                        <FormInputs
                          placeholder={el.placeholder}
                          margin="0"
                          borderb="none"
                        ></FormInputs>
                      </>
                    );
                  })}
                </div>
                <div className="col">
                  {contractFields.map((el) => {
                    return (
                      <>
                        <Label
                          contentHeading
                          content={el.label}
                          margin="30px 0 10px 0"
                          color="#14315e"
                          fontsize="14px"
                        />
                        <FormInputs
                          placeholder={el.placeholder}
                          margin="0"
                          borderb="none"
                        ></FormInputs>
                      </>
                    );
                  })}
                </div>
                <div className="col">
                  {typesField.map((el) => {
                    return (
                      <>
                        <Label
                          contentHeading
                          content={el.label}
                          margin="30px 0 0 0"
                          color="#14315e"
                          fontsize="14px"
                        />
                        <FormInputs
                          placeholder={el.placeholder}
                          margin="0"
                          borderb="none"
                        ></FormInputs>
                      </>
                    );
                  })}
                </div>
              </div>
              <ButtonComponent
                padding="17px 30px"
                margin="0 0 40px 70px"
                bcolor="#ff7a00"
                onClick={handlenext}
                border="0"
                hoverbcolor="#ff7a00"
                color="#fff"
                borderradius="5px"
              >
                Next
              </ButtonComponent>
            </WrapperStyled>
          </OuterContentStyled>
        </>
      );

    case 2:
      return (
        <>
          <OuterContentStyled className="content-wrapper">
            <WrapperStyled className="wrapper">
              <div className="heading">
                <Label
                  contentHeading
                  color="#fff"
                  content="Create Lead"
                  margin="0"
                  fontsize="18px"
                />
                <ButtonComponent
                  bcolor="#176ec4"
                  background="#176ec4"
                  border="0"
                  color="#fff"
                  fontsize="18px"
                  onClick={handlecancel}
                  className="arrowanimation"
                >
                  Close &nbsp;
                  <FontRArrowStyled />
                </ButtonComponent>
              </div>
              <ButtonComponent
                bcolor="inherit"
                background="inherit"
                border="0"
                color="black"
                fontsize="14px"
                onClick={handleBack}
                margin="18px"
              >
                <FontLArrowStyled /> &nbsp; Back
              </ButtonComponent>
              <div className="row w-100">
                <div className="col">
                  {fieldData.map((el) => {
                    return (
                      <>
                        <Label
                          contentHeading
                          content={el.label}
                          margin="30px 0 10px 0"
                          color="#14315e"
                          fontsize="14px"
                        />
                        <FormInputs
                          placeholder={el.placeholder}
                          margin="0"
                          borderb="none"
                        ></FormInputs>
                      </>
                    );
                  })}
                </div>
                <div className="col">
                  {contractFields.map((el) => {
                    return (
                      <>
                        <Label
                          contentHeading
                          content={el.label}
                          margin="30px 0 10px 0"
                          color="#14315e"
                          fontsize="14px"
                        />
                        <FormInputs
                          placeholder={el.placeholder}
                          margin="0"
                          borderb="none"
                        ></FormInputs>
                      </>
                    );
                  })}
                </div>
              </div>
              <ButtonComponent
                // className="btn btn-secondary"
                padding="17px 30px"
                margin="0 0 40px 70px"
                bcolor="#ff7a00"
                onClick={handlecancel}
                border="0"
                hoverbcolor="#ff7a00"
                color="#fff"
                borderradius="5px"
                // className="position-absolute bottom-0 "
              >
                Submit
              </ButtonComponent>
            </WrapperStyled>
          </OuterContentStyled>
        </>
      );

    default:
      console.log("tested");
      break;
  }
}

export default RightPopModel;
