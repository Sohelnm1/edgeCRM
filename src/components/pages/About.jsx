import React from "react";
import styled from "@emotion/styled";

const WrapperStyled = styled.div`
  width: 100%;
  padding-left: 50px;
  padding-top: 100px;
`;

function About() {
  return (
    <WrapperStyled>
      <h2>GeeksforGeeks is a computer science portal for geeks!</h2>
      Read more about us at :
      <a href="https://www.geeksforgeeks.org/about/">
        https://www.geeksforgeeks.org/about/
      </a>
    </WrapperStyled>
  );
}

export default About;
