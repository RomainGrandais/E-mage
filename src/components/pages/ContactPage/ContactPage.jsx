import React from "react";
import styled from "styled-components";
import ContactNavBar from "./ContactNavBar";
import photoProfil from "../../../../public/illustration site internet/photo-profil/photo complète.png";

export default function ContactPage() {
  return (
    <ContactPageStyled>
      <ContactNavBar />
      <div className="bio">
        <img src={photoProfil} alt="" />
        <div className="description">
          <p>
            Je m'appelle Tanguy, et je suis un graphiste expérimenté passionné
            par la création visuelle. Au fil des années, j'ai eu le privilège de
            travailler sur une variété de projets créatifs, allant de l'identité
            de marque à la conception d'interfaces utilisateur, en passant par
            l'illustration et la conception d'imprimés. Mon parcours
            professionnel m'a permis de développer des compétences variées et de
            travailler avec divers clients. <br />
            <br />
            Si vous avez un projet créatif en tête, que ce soit une refonte de
            site web, la création d'une identité de marque, ou tout autre besoin
            en design, je serais ravi de discuter de la manière dont je peux
            vous aider à le concrétiser. N'hésitez pas à me contacter pour
            discuter de vos besoins et de votre vision.
          </p>
        </div>
      </div>
      <div className="contact">
        <div className="infos"></div>
        <div className="form"></div>
      </div>
    </ContactPageStyled>
  );
}

const ContactPageStyled = styled.div`
  height: 100vh;
  background-color: #282828;

  .bio {
    height: 25%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
    padding-top: 100px;
    img {
      height: 150%;
    }

    .description {
      width: 50%;
      height: 100%;
      border-radius: 46px;
      box-shadow: inset 0px 2px 3px #ffffff73, 14px 12px 10px #0000006b;
      display: flex;
      align-items: center;
      justify-content: center;
      p {
        width: 80%;
        color: white;
        font-family: "Century Gothic";
        font-size: 12px;
      }
    }
  }

  .contact {
    height: 40%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 50px;
    padding-top: 50px;

    .infos {
      width: 21%;
      height: 100%;
      box-shadow: inset 0px 2px 3px #ffffff73, 14px 12px 10px #0000006b;
      border-radius: 46px;
    }
    .form {
      width: 50%;
      height: 100%;
      box-shadow: 14px 12px 10px #0000006b;
      border-radius: 46px;
    }
  }
`;
