import React from "react";
import styled from "@emotion/styled";

const WrapperStyled = styled.div`
  width: 100%;
  padding-left: 50px;
  padding-top: 100px;
`;

function Home() {
  return (
    <WrapperStyled>
      <h1>Welcome to the world of Geeks!</h1>
    </WrapperStyled>
  );
}

export default Home;
