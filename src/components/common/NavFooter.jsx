import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "@emotion/styled";
import PageLink from "./PageLink";
import MaterialIcon from "./MaterialIcon";
import EdgeCrm from "../svgs/EdgeCrm";
import NavFooter from "../../css/NavFooter.css";
import "bootstrap/dist/js/bootstrap.js";

const LogoStyled = styled.div`
  background-color: ${(props) => props.backcolor};
  background: linear-gradient(
      270deg,
      #366bc9 7.29%,
      rgba(255, 255, 255, 0) 75.52%
    ),
    #0b3b90;
  -webkit-box-shadow: 0 10px 25px -24px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0 10px 25px -24px rgba(0, 0, 0, 0.75);
  box-shadow: 0 10px 25px -24px rgba(0, 0, 0, 0.75);
  padding: 0px 0;
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    padding: 25px 0;
  }
  position: fixed;
  right: 0;
  left: 0;
  z-index: 1030;
  padding: 10px 5px;
`;

function Nav({ backcolor = "" }) {
  return (
    <LogoStyled backcolor={backcolor}>
      <div className="logo-style d-md-flex align-items-center">
        <EdgeCrm />
      </div>
      <div className="icons-div d-md-flex align-items-center">
        <PageLink padding="8px 8px">
          <MaterialIcon className="" padding="0" width="24px" height="24px">
            search
          </MaterialIcon>
        </PageLink>

        <PageLink padding="8px 8px">
          <MaterialIcon className="" padding="0" width="24px" height="24px">
            add_circle_outline
          </MaterialIcon>
        </PageLink>

        <PageLink padding="8px 8px">
          <MaterialIcon className="" padding="0" width="24px" height="24px">
            notification_important
          </MaterialIcon>
        </PageLink>

        <PageLink padding="8px 8px">
          <MaterialIcon className="" padding="0" width="24px" height="24px">
            apps
          </MaterialIcon>
        </PageLink>

        <PageLink fontsize="14px" padding="8px 19px 8px 5px">
          Hi, Edge Consultant
        </PageLink>
      </div>
    </LogoStyled>
  );
}
export default Nav;
