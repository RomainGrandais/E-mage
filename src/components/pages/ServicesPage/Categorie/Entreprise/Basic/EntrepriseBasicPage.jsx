import React from "react";
import styled from "styled-components";
import SectionNavBar from "../../../../../reusable-ui/SectionNavBar";
import ServicesFooter from "../../../../../reusable-ui/ServicesFooter";
import NavBarEntreprise from "../NavBarEntreprise";
import TitleEntreprise from "../TitleEntreprise";
import TransparentSquare from "../../../../../reusable-ui/TransparentSquare";

export default function EntrepriseBasicPage() {
  return (
    <EntrepriseBasicPageStyled>
      <SectionNavBar />
      <h1>SERVICES</h1>
      <div className="title">
        <TitleEntreprise />
      </div>
      <div className="main">
        <h1>BASIC</h1>
        <h5> 1 Visuel par semaine</h5>
        <p>
          Bienvenue dans cette offre d'abonnement de design graphique "basic",
          une solution idéale pour ceux qui cherchent à donner vie à leurs idées
          avec un budget maîtrisé. Cet abonnement basique offre une gamme de
          services de conception essentiels pour répondre à vos besoins visuels.
          <br />
          <br />
          Avec l'abonnement basique, vous bénéficiez de services de design de
          base qui couvrent la création d'éléments visuels simples tels que des
          images et des publications sur les réseaux sociaux. Que vous
          souhaitiez renforcer votre présence en ligne, améliorer vos
          communications ou simplement ajouter une touche visuelle à votre
          contenu, je suis là pour transformer votre vision en réalité. <br />
          <br /> Ce forfait comprend la création d'un élément visuel par
          semaine, que ce soit une image percutante pour votre site web ou des
          publications engageantes pour vos réseaux sociaux. <br />
          <br /> Conscient que la perfection réside dans les détails, notre
          abonnement basique vous offre la possibilité de demander jusqu'à trois
          révisions, garantissant ainsi que le résultat final correspond
          parfaitement à vos attentes. Je crois en la collaboration transparente
          avec mes clients, et chaque révision est une opportunité d'affiner et
          de peaufiner le design jusqu'à ce qu'il soit exactement comme vous
          l'imaginez. <br />
          <br /> Votre satisfaction est ma priorité, et je suis prêt à vous
          accompagner tout au long du processus. Vous bénéficierez d'un support
          dédié par e-mail ou par messages instagram ou discord pour répondre à
          toutes vos questions, fournir des clarifications et vous guider à
          chaque étape. <br />
          <br /> Le tout pour un prix mensuel compétitif de 249€ TTC. Avec notre
          abonnement basique, vous pouvez obtenir des designs de qualité
          professionnelle sans compromettre votre budget.
        </p>
      </div>
      <div className="footer">
        <ServicesFooter />
      </div>
      <NavBarEntreprise />
      <TransparentSquare
        width={"150px"}
        height={"100px"}
        top={"13%"}
        left={"23%"}
      />
      <TransparentSquare
        width={"150px"}
        height={"100px"}
        top={"13%"}
        left={"70%"}
      />
      <TransparentSquare
        width={"150px"}
        height={"100px"}
        top={"70%"}
        left={"70%"}
      />
      <TransparentSquare
        width={"150px"}
        height={"100px"}
        top={"50%"}
        left={"20%"}
      />
    </EntrepriseBasicPageStyled>
  );
}

const EntrepriseBasicPageStyled = styled.div`
  height: 100vh;
  width: 100%;
  color: white;

  &::before {
    content: "";
    height: 100vh;

    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url("../../../../public/illustration site internet/services/bacground_entreprise.png");
    background-size: cover;
    background-repeat: no-repeat;
    z-index: -1;
  }
  h1 {
    font-size: 4.86vw;
    font-weight: 300;
    text-align: center;
  }
  .title {
    width: 16.5%;
    height: 12.5%;
    padding-left: 7%;
    display: flex;
    justify-content: flex-start;
  }
  .main {
    width: 48%;
    height: 75%;
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: transparent linear-gradient(49deg, #c3f0f5 0%, #ffffff 100%) 0%
      0% no-repeat padding-box;
    box-shadow: inset 0px 10px 6px #58585829, 0px 10px 6px #00000029;
    border-radius: 10px;
    display: flex;
    align-items: center;
    text-align: center;
    flex-direction: column;
    color: #2b2b2b;
    h1 {
      font: normal normal normal 5.34vw Bebas Neue;
    }
    h5 {
      font: normal normal bold 1.87vw Century Gothic;
      padding-bottom: 3%;
    }
    p {
      width: 80%;
      font: normal normal normal 0.69vw Century Gothic;
      text-align: left;
    }
  }
  .footer {
    display: flex;
    justify-content: center;
  }
`;
