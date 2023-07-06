import React from "react";
import styled from "@emotion/styled";

const WrapperStyled = styled.div`
  width: 100%;
  padding-left: 50px;
  padding-top: 100px;
`;

function Contact() {
  return (
    <WrapperStyled>
      <address>
        You can find us here:
        <br />
        GeeksforGeeks
        <br />
        5th & 6th Floor, Royal Kapsons, A- 118, <br />
        Sector- 136, Noida, Uttar Pradesh (201305)
      </address>
    </WrapperStyled>
  );
}

export default Contact;
