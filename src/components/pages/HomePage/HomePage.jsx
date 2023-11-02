import React from "react";
import styled from "styled-components";

export default function HomePage() {
  return (
    <HomePageStyled>
      <div className="background">
        {/* <video autoPlay loop muted src={videoBackground} /> */}
        {/* <NavBar /> */}
      </div>
    </HomePageStyled>
  );
}

const HomePageStyled = styled.div`
  height: 100vh;

  .background {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }

  .background video {
    position: absolute;
    min-width: 100%;
    min-height: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -100;
  }
`;
