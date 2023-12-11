import React from "react";
import styled from "styled-components";
import SectionNavBar from "../../reusable-ui/SectionNavBar";
import ServicesCategorie from "./ServicesCategorie";
import ServicesFooter from "../../reusable-ui/ServicesFooter";

export default function ServicesPage() {
  return (
    <ServicesPageStyled>
      <div className="background">
        <SectionNavBar />
        <div className="content">
          <h1>SERVICES</h1>
          <h2>VOUS ÊTES :</h2>
          <ServicesCategorie />
          <ServicesFooter />
        </div>
      </div>
    </ServicesPageStyled>
  );
}

const ServicesPageStyled = styled.div`
  width: 100%;
  height: 100vh;
  color: white;

  &::before {
    content: "";
    height: 100vh;

    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url("../../../../public/illustration site internet/services/fond un peu random.png");
    background-size: cover;
    background-repeat: no-repeat;
    z-index: -1;
  }
  .content {
    display: flex;
    align-items: center;
    flex-direction: column;
    h1 {
      font-size: 70px;
      font-weight: 300;
      text-align: justify;
      padding-bottom: 70px;
    }
    h2 {
      text-align: justify;
      font: normal normal normal 30px Century Gothic;
      letter-spacing: 0px;
      color: #ffffff;
      padding-bottom: 30px;
    }
  }
`;
