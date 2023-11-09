import React from "react";
import styled from "styled-components";
import { AiOutlineCaretLeft } from "react-icons/ai";

export default function SectionNavBar({ label }) {
  return (
    <SectionNavBarStyled>
      <div className="nav-container">
        <div className="link">
          <AiOutlineCaretLeft />
          Home
        </div>
        <div className="span">
          <span>{label}</span>
        </div>
      </div>
    </SectionNavBarStyled>
  );
}

const SectionNavBarStyled = styled.div`
  width: 100%;
  height: 70px;
  background-color: transparent;
  font-size: 30px;
  color: white;
  .nav-container {
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
