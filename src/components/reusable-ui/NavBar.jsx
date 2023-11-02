import React from "react";
import styled from "styled-components";

export default function NavBar() {
  return (
    <NavBarStyled>
      <div className="link">
        <div>HOME</div>
        <div>PORTEFOLIO</div>
        <div>CONTACT</div>
        <div>SHOP</div>
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
  .link {
    display: flex;
    justify-content: space-around;
    width: 60%;
  }
`;
