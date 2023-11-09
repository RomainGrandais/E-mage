import React from "react";
import styled from "styled-components";
import SectionNavBar from "../../reusable-ui/SectionNavBar";
import ContactBio from "./ContactBio";
import ContactForm from "./ContactForm";
import ContactInfos from "./ContactInfos";

export default function ContactPage() {
  return (
    <ContactPageStyled>
      <SectionNavBar label="CONTACT" />
      <div className="content">
        <ContactInfos />
        <ContactBio />
        <ContactForm />
      </div>
    </ContactPageStyled>
  );
}

const ContactPageStyled = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #282828;

  .content {
    max-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;
  }
`;
