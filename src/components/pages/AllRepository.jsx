import React from "react";
import styled from "@emotion/styled";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import Label from "../common/Label";
import ButtonComponent from "../common/ButtonComponent";
import { PageLink, RepositoryDetailModule } from "../common";

const InfoStyled = styled.div`
  box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.06);
  padding: 15px 25px 10px 25px;
  background: #fff;
  margin-top: 15px;
  min-height: 120px;
  border-radius: 4px;
  position: relative;
`;

const WrapperStyled = styled.div`
  width: 100%;
  padding-left: 50px;
  padding-top: 60px;
`;

const CreateLeadStyled = styled.div`
  @media (min-width: 768px) {
    position: absolute;
    top: 10px;
    right: 25px;
  }
`;

function AllRepository() {
  return (
    <WrapperStyled>
      <InfoStyled>
        <PageLink color="#7a7a7a" fontsize="13px">
          <FaLongArrowAltLeft /> &nbsp; Dashboard
        </PageLink>
        <Label
          headingthird="true"
          fontsize="25px"
          margin="7px 0"
          weight="300"
          color="#160f29"
        >
          All Repository
        </Label>
        <Label contentHeading content="All" fontsize="14px" margin="0"></Label>

        <CreateLeadStyled className="d-flex justify-content-end text-right">
          <ButtonComponent
            //   onClick={handlelead}
            bcolor="inherit"
            color="#7a7a7a"
            padding="0 20px"
            fontsize="13px"
            border="0"
          >
            Add
          </ButtonComponent>

          <ButtonComponent
            //   onClick={handlelead}
            bcolor="inherit"
            color="#7a7a7a"
            padding="0 20px"
            fontsize="13px"
            border="0"
          >
            Import
          </ButtonComponent>
          <ButtonComponent
            //   onClick={handlelead}
            bcolor="inherit"
            color="#7a7a7a"
            padding="0 20px"
            fontsize="13px"
            border="0"
          >
            Export
          </ButtonComponent>
        </CreateLeadStyled>
      </InfoStyled>
      <RepositoryDetailModule />
    </WrapperStyled>
  );
}

export default AllRepository;
