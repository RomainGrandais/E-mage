import React from "react";
import styled from "styled-components";
import { AiOutlineCaretLeft } from "react-icons/ai";

export default function ContactNavBar() {
  return (
    <ContactNavBarStyled>
      <div className="container">
        <div className="link">
          <AiOutlineCaretLeft />
          Home
        </div>
        <div className="span">
          <span>CONTACT</span>
        </div>
      </div>
    </ContactNavBarStyled>
  );
}

const ContactNavBarStyled = styled.div`
  width: 100%;
  height: 70px;
  background-color: rgba(255, 255, 255, 0.6);
  font-size: 30px;
  color: white;
  .container {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 70px;

    width: 100%;
    .link {
      display: flex;
      align-items: center;
      padding-left: 10px;
    }
    .span {
      display: flex;
      justify-content: center;
      position: absolute;
      width: 100%;
    }
  }
`;
