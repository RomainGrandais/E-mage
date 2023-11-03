import React from "react";
import styled from "styled-components";
import ContactNavBar from "./ContactNavBar";

export default function ContactPage() {
  return (
    <ContactPageStyled>
      <ContactNavBar />
      <div className="bio">
        <img src="" alt="" />
        <div className="description"></div>
      </div>
    </ContactPageStyled>
  );
}

const ContactPageStyled = styled.div`
  height: 100vh;
  background-color: #282828;
`;
