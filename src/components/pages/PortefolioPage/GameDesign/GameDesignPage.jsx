import React from "react";
import styled from "styled-components";
import ProjectNavBar from "../../../reusable-ui/ProjectNavBar";
import fortress from "../../../../../public/illustration site internet/portefolio/LengendOfFortress/FOL1.png";
import guerrier from "../../../../../public/illustration site internet/portefolio/LengendOfFortress/GUERRIER.png";
import BlueTransparentSquare from "../../../reusable-ui/BlueTransparentSquare";

export default function GameDesignPage() {
  return (
    <GameDesignPageStyled>
      <ProjectNavBar label={"GAME DESIGN"} />
      <div className="first"></div>
      <div className="game-design">
        <h2>Game design : façonneur d'expériences ludiques</h2>
        <div className="content">
          <div className="text">
            <div className="first-block">
              <p>
                Plongez-vous dans l'épopée captivante de la création de
                "Fortress of Legend", un projet personnel qui fusionne ma
                passion pour le jeu vidéo et l'univers médiéval fantastique
              </p>
              <BlueTransparentSquare
                width={"6%"}
                height={"8%"}
                top={"125%"}
                left={"17%"}
                background={
                  "transparent linear-gradient(50deg, #032C35 0%, #486E6C 100%) 0% 0% no-repeat padding-box;"
                }
                transform={"matrix(0.94, 0.2, -0.21, 0.98, 0, 0);"}
                opacity={" 0.47"}
              />
              <BlueTransparentSquare
                width={"4%"}
                height={"6%"}
                top={"126%"}
                left={"0.5%"}
                background={
                  "transparent linear-gradient(47deg, #032C35 0%, #486E6C 100%) 0% 0% no-repeat padding-box;"
                }
                opacity={" 0.47"}
              />
            </div>
            <div className="second-block">
              <p>
                La création d'un jeu, tel que le projet "Fortress of Legend",
                exige une Direction Artistique (DA) complète qui transcende la
                simple conception visuelle.
                <br />
                <br /> Ici tout se doit d'être cohérent. De la création du logo
                au choix de la palette de couleur, à la création des classes, de
                l'environnement, des illustrations des bâtiments, ou bien de
                l'élaboration de l'interface utilisateur.
              </p>
              <BlueTransparentSquare
                width={"5%"}
                height={"8%"}
                top={"147%"}
                left={"10%"}
                background={
                  "transparent linear-gradient(47deg, #032C35 0%, #486E6C 100%) 0% 0% no-repeat padding-box;"
                }
                opacity={" 0.47"}
              />
            </div>
            <div className="third-block">
              <p>
                À travers ce parcours créatif, "Fortress of Legend" prend vie,
                non seulement comme un projet de jeu, mais comme un voyage
                artistique et narratif. C'est l'histoire de la naissance d'un
                monde virtuel où les pixels deviennent des portails vers des
                royaumes fantastiques, et où chaque détail graphique raconte une
                légende à découvrir. Suivez le fil de cette aventure visuelle,
                où la passion pour le jeu vidéo et l'amour de l'univers médiéval
                se rencontrent pour créer une forteresse de légendes.
              </p>
            </div>
            <BlueTransparentSquare
              width={"4%"}
              height={"7%"}
              top={"172%"}
              left={"22%"}
              background={
                "transparent linear-gradient(47deg, #032C35 0%, #486E6C 100%) 0% 0% no-repeat padding-box;"
              }
              opacity={" 0.47"}
            />
            <BlueTransparentSquare
              width={"6%"}
              height={"8%"}
              top={"152%"}
              left={"45%"}
              background={
                "transparent linear-gradient(51deg, #032C35 0%, #486E6C 100%) 0% 0% no-repeat padding-box;"
              }
              transform={"matrix(0.94, 0.2, -0.21, 0.98, 0, 0);"}
              opacity={" 0.47"}
            />
          </div>
          <div className="charactere">
            <img src={guerrier} alt="" />
            <BlueTransparentSquare
              width={"18%"}
              height={"40%"}
              top={"155%"}
              left={"80%"}
              background={
                "transparent linear-gradient(65deg, #032C35 0%, #486E6C 100%) 0% 0% no-repeat padding-box;"
              }
              transform={"matrix(0.99, 0.03, 0.09, 0.36, 0, 0);"}
              opacity={" 0.76"}
            />
            <BlueTransparentSquare
              width={"7%"}
              height={"25%"}
              top={"120%"}
              left={"78%"}
              background={
                "transparent linear-gradient(65deg, #032C35 0%, #486E6C 100%) 0% 0% no-repeat padding-box;"
              }
              opacity={" 0.26"}
            />
            <BlueTransparentSquare
              width={"5%"}
              height={"25%"}
              top={"120%"}
              left={"95%"}
              background={
                "transparent linear-gradient(27deg, #032C35 0%, #486E6C 100%) 0% 0% no-repeat padding-box;"
              }
              opacity={" 0.15"}
            />
            <BlueTransparentSquare
              width={"4%"}
              height={"13%"}
              top={"138%"}
              left={"76%"}
              background={
                "transparent linear-gradient(32deg, #032C35 0%, #486E6C 100%) 0% 0% no-repeat padding-box"
              }
              opacity={" 0.47"}
            />
          </div>
        </div>
      </div>
      <div className="fortress">
        <img src={fortress} alt="" />
      </div>
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
    background-image: url("../../../../../public/illustration site internet/portefolio/LengendOfFortress/FOND.png");
    background-size: 100% auto; // Largeur à 100%, hauteur auto pour garder les proportions
    background-position: top center; // Centrer l'image
    background-repeat: no-repeat; // Ne pas répéter l'image
    z-index: -1;
  }
  .first {
    width: 100%;
    height: 80vh;
  }
  .game-design {
    max-width: 100%;
    height: 90vh;
    padding-left: 1.3%;
    .content {
      width: 100%;
      height: 60vh;
      margin-top: 5%;
      display: flex;
    }
    h2 {
      width: 90%;
      text-align: left;
      font: normal normal normal 75px Bebas Neue;
      letter-spacing: 0px;
      color: #ffffff;
      text-shadow: 0px 10px 6px #00000029;
    }
    .text {
      width: 50%;
      height: 60vh;
      display: flex;
      flex-direction: column;
      gap: 7%;
      &::before {
        content: "";
        position: absolute;
        height: 70vh;
        top: 110%;
        left: -80%;
        right: 0;
        bottom: 0;
        background-image: url("../../../../../public/illustration site internet/portefolio/LengendOfFortress/dégradé chiant pour toi.png");
        background-size: 100% 110%;
        transform: rotate(45deg);
        opacity: 0.5;
        background-repeat: no-repeat;
        z-index: -1;
      }
      p {
        width: 90%;
        text-align: left;
        font: normal normal normal 10px Century Gothic;
        letter-spacing: 0px;
      }
      .first-block,
      .second-block,
      .third-block {
        width: 40%;
        height: 9vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background: transparent linear-gradient(79deg, #011215 0%, #043a48 100%)
          0% 0% no-repeat padding-box;
        box-shadow: inset 0px 10px 6px #58585829, 0px 10px 6px #00000029;
        border-radius: 10px;
      }
      .second-block {
        width: 50%;

        margin-left: 20%;
        height: 18vh;
      }
      .third-block {
        width: 50%;
        margin-left: 45%;
        height: 18vh;
      }
    }
    .charactere {
      width: 50%;
      height: 60vh;
      display: flex;
      justify-content: flex-end;
      img {
        transform: rotateY(-180deg);
      }
      overflow: hidden;
    }
  }
  .fortress {
    width: 100%;
    height: 90vh;
    img {
      height: 100%;
      width: 100%;
    }
  }
`;
