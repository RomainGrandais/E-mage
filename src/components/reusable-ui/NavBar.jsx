import React from "react";
import styled from "styled-components";

export default function NavBar() {
  return (
    <NavBarStyled>
      <div className="bar">
        <div className="link">HOME</div>
        <div className="link">PORTEFOLIO</div>
        <div className="link">CONTACT</div>
        <div className="link">SHOP</div>
      </div>
    </NavBarStyled>
  );
}

const NavBarStyled = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.3);
  color: white;
  font-family: "Bebas Neue";
  font-size: 30px;
  .bar {
    display: flex;
    justify-content: space-around;
    width: 60%;
  }
  .link {
    cursor: pointer;
  }
`;
