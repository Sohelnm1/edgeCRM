import React from "react";
import PageLink from "./PageLink";
import styled from "@emotion/styled";
import MaterialIcon from "./MaterialIcon";
import SideBarcss from "../../css/SideBarcss.css";
import LinkRoute from "./LinkRoute";
import "bootstrap/dist/css/bootstrap.min.css";

const SideBarStyled = styled.div`
  width: 50px;
  position: fixed;
  height: 100%;
  top: 0;
  left: 0;
  overflow: visible;
  z-index: 1030;
  transition: all 0.3s ease;
  background: #ffffff;
  box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.06);
`;

const UlStyled = styled.ul`
  list-style: none;
  padding: 7px;
  margin: 0;
`;

const ImgStyled = styled.img`
  border-radius: 50%;
  width: 35px;
  display: block;
  max-width: 100%;
  height: auto;
  padding: 8px 0;
`;

function SideBar() {
  const handleClick = (e) => {
    e.preventDefault();
  };
  return (
    <SideBarStyled>
      <UlStyled>
        <LinkRoute to="/">
          <ImgStyled
            src="https://media.istockphoto.com/id/1176363686/vector/smiling-young-asian-girl-profile-avatar-vector-icon.jpg?s=612x612&w=0&k=20&c=QuyZJNKexFQgDPr9u91hKieWKOYbaFxPb0b0gwmd-Lo="
            alt="profile image"
          />
        </LinkRoute>

        <LinkRoute to="/">
          <MaterialIcon>dashboard</MaterialIcon>
        </LinkRoute>

        <LinkRoute to="/about">
          <MaterialIcon>date_range</MaterialIcon>
        </LinkRoute>

        <LinkRoute to="/contact">
          <MaterialIcon> card_travel</MaterialIcon>
        </LinkRoute>

        <LinkRoute>
          <MaterialIcon> person_pin</MaterialIcon>
        </LinkRoute>

        <LinkRoute>
          <MaterialIcon> wb_incandescent</MaterialIcon>
        </LinkRoute>

        <LinkRoute to="/repository/1576">
          <MaterialIcon>local_library</MaterialIcon>
        </LinkRoute>

        <LinkRoute to="/repository">
          <MaterialIcon> campaign</MaterialIcon>
        </LinkRoute>

        <LinkRoute to="/tabpaneloverview">
          <MaterialIcon> support_agent</MaterialIcon>
        </LinkRoute>

        <LinkRoute>
          <MaterialIcon> gavel</MaterialIcon>
        </LinkRoute>

        <LinkRoute to="/Form">
          <MaterialIcon> insights</MaterialIcon>
        </LinkRoute>
      </UlStyled>
    </SideBarStyled>
  );
}

export default SideBar;
