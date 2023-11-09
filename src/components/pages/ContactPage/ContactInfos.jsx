import React from "react";
import styled from "styled-components";
import { AiOutlineMail } from "react-icons/ai";
import { MdPhoneIphone } from "react-icons/md";
import { BsDiscord, BsInstagram } from "react-icons/bs";
import profilePicture from "../../../../public/illustration site internet/photo-profil/photo complète.png";
export default function ContactInfos() {
  return (
    <ContactInfosStyled>
      <div className="info">
        <div className="first-column">
          <span>
            <span className="logo">
              <MdPhoneIphone />
            </span>
            07.80.29.86.51
          </span>
          <span>
            <span className="logo">
              <AiOutlineMail />
            </span>
            contact@e-mage-graphic.com
          </span>
        </div>
        <div className="second-column">
          <span>
            <span className="logo">
              <BsInstagram />
            </span>
            @emage.graphic
          </span>
          <span>
            <span className="logo">
              <BsDiscord />
            </span>
            Click here
          </span>
        </div>
      </div>
      <div className="profil-picture"></div>
    </ContactInfosStyled>
  );
}

const ContactInfosStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: white;
  height: 30%;
  width: 50%;
  font-size: 20px;
  .info {
    display: flex;
    flex-direction: row;
    gap: 60px;
  }
  span {
    display: flex;
    align-items: center;
    gap: 7px;
    .logo {
      color: #e0d1a1;
    }
  }
  .first-column {
    display: flex;
    flex-direction: column;
  }
  .second-column {
    display: flex;
    flex-direction: column;
  }
  .profil-picture {
  }
`;
