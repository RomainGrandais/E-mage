import React from "react";
import styled from "styled-components";
import ProjectNavBar from "../../../reusable-ui/ProjectNavBar";

export default function UiUxPage() {
  return (
    <UiUxPageStyled>
      <ProjectNavBar label={"GAME DESIGN"} />
    </UiUxPageStyled>
  );
}

const UiUxPageStyled = styled.div`
  width: 100%;
  height: 600vh;

  /* &::before {
    content: "";
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url("../../../../../public/illustration site internet/portefolio/UxUI/background.png");
    background-size: cover;
    background-repeat: no-repeat;
    z-index: -1;
  } */
`;
