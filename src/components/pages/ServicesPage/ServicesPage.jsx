import React from "react";
import styled from "styled-components";
import SectionNavBar from "../../reusable-ui/SectionNavBar";
import ServicesCategorie from "./ServicesCategorie";

export default function ServicesPage() {
  return (
    <ServicesPageStyled>
      <div className="background">
        <SectionNavBar />
        <div className="content">
          <h1>SERVICES</h1>
          <h2>VOUS ÊTES :</h2>
          <ServicesCategorie />
          <div className="footer">
            <p>
              Pour toute demande spécifique, pour une demande de devis, pour me
              parler d'un projet, contactez moi.
            </p>
          </div>
        </div>
      </div>
    </ServicesPageStyled>
  );
}

const ServicesPageStyled = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #3d3d3d;
  color: white;
  .content {
    display: flex;
    align-items: center;
    flex-direction: column;
    h1 {
      font-size: 70px;
      font-weight: 300;
      text-align: left;
      padding-bottom: 70px;
    }
    h2 {
      text-align: left;
      font: normal normal normal 30px Century Gothic;
      letter-spacing: 0px;
      color: #ffffff;
      padding-bottom: 30px;
    }
    .footer {
      position: absolute;
      bottom: 5%;
      border-top: 1px solid #e0d1a1;
      border-bottom: 1px solid #e0d1a1;
      padding: 5px;
      p {
        font: normal normal normal 15px Century Gothic;
        letter-spacing: 0px;
      }
    }
  }
`;
