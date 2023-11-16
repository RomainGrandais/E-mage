import React from "react";
import styled from "styled-components";
import { IoBusinessOutline } from "react-icons/io5";
import { FaRegHandshake } from "react-icons/fa";

export default function ServicesCategorie() {
  return (
    <ServicesCategorieStyled>
      <div className="entreprise">
        <p>UNE ENTREPRISE</p>
        <div className="icon-business">
          <IoBusinessOutline />
        </div>
      </div>
      <div className="influenceur">
        <p>
          INFLUENCEUR
          <br />
          YOUTUBEURbr
          <br />
          STREAMER
        </p>
      </div>
      <div className="particulier">
        <p>UN PARTICULIER</p>
        <div className="icon-business">
          <FaRegHandshake />
        </div>
      </div>
    </ServicesCategorieStyled>
  );
}

const ServicesCategorieStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 120px;
  height: 31vh;
  width: 100%;

  .entreprise {
    width: 15%;
    height: 31vh;
    background: transparent
      linear-gradient(45deg, #0f0f6b 0%, #28bec3 87%, #28c0c5 100%) 0% 0%
      no-repeat padding-box;
    box-shadow: inset 0px 10px 6px #58585829, 0px 10px 6px #00000029;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5%;
    p {
      font-size: 25px;
    }
    .icon-business {
      height: 150px;
      font-size: 150px;
    }
  }

  .influenceur {
    width: 15%;
    height: 31vh;
    background: transparent
      linear-gradient(
        225deg,
        #5c0f6b 0%,
        #9346b4d6 15%,
        #2dd8de 87%,
        #11f7ff 100%
      )
      0% 0% no-repeat padding-box;
    box-shadow: inset 0px 10px 6px #58585829, 0px 10px 6px #00000029;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5%;
    p {
      text-align: center;
      letter-spacing: 0px;
      font-size: 25px;
    }
  }
  .particulier {
    width: 15%;
    height: 31vh;

    background: transparent linear-gradient(226deg, #d6c428 0%, #8021a8 90%) 0%
      0% no-repeat padding-box;
    box-shadow: inset 0px 10px 6px #58585829, 0px 10px 6px #00000029;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5%;
    p {
      font-size: 25px;
    }
    .icon-business {
      height: 150px;
      font-size: 150px;
    }
  }
`;
