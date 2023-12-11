import React from "react";
import styled from "styled-components";
import ProjectNavBar from "../../../reusable-ui/ProjectNavBar";
import fortress from "../../../../../public/illustration site internet/portefolio/LengendOfFortress/FOL1.png";
import Charactere from "./Charactere";
import Fortress from "./Fortress";
import Description from "./Description";
import Logo from "./Logo";
import UxUi from "./UXUI";

export default function GameDesignPage() {
  return (
    <GameDesignPageStyled>
      <ProjectNavBar label={"GAME DESIGN"} />
      <div className="first"></div>
      <Charactere />
      <div className="fortress-picture">
        <img src={fortress} alt="" />
      </div>
      <Fortress />
      <Description />
      <Logo />
      <UxUi />
    </GameDesignPageStyled>
  );
}

const GameDesignPageStyled = styled.div`
  width: 100%;
  height: 665vh;
  overflow: hidden;
  color: #ffffff;

  &::before {
    content: "";
    position: absolute;
    height: 665vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url("../../../../../public/illustration site internet/portefolio/LengendOfFortress/FOND_3.png");
    background-size: 100% auto; // Largeur à 100%, hauteur auto pour garder les proportions
    background-position: top center; // Centrer l'image
    background-repeat: no-repeat; // Ne pas répéter l'image
    z-index: -1;
  }
  .first {
    width: 100%;
    height: 80vh;
  }

  .fortress-picture {
    width: 100%;
    height: 100vh;
    img {
      height: 100%;
      width: 100%;
    }
  }
`;
