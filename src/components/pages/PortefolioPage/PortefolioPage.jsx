import React from "react";
import styled from "styled-components";
import SectionNavBar from "../../reusable-ui/SectionNavBar";
import PortefolioProject from "./PortefolioProject";

export default function PortefolioPage() {
  return (
    <PortefolioPageStyled>
      <SectionNavBar />
      <div className="content">
        <h1>PORTEFOLIO</h1>
        <div className="project">
          <PortefolioProject label={"GAME DESIGN"} />
          <PortefolioProject label={"UX / UI DESIGN"} />
          <PortefolioProject label={"PRINT"} />
          <PortefolioProject label={"CONCEPT ART"} />
          <PortefolioProject label={"GALLERY"} />
        </div>
      </div>
    </PortefolioPageStyled>
  );
}

const PortefolioPageStyled = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #282828;
  color: white;
  .content {
    display: flex;
    align-items: center;
    flex-direction: column;
    h1 {
      font-size: 70px;
      text-align: left;
    }
    .project {
      border-top: 1px solid white;
      border-bottom: 1px solid white;
      height: 70vh;
      width: 80%;
      background-color: #3d3d3d;
    }
  }
`;
