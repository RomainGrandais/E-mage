import React from "react";
import styled from "styled-components";

export default function NavBar() {
  return (
    <div>
      <div>HOME</div>
      <div>PORTEFOLIO</div>
      <div>CONTACT</div>
      <div>SHOP</div>
    </div>
  );
}

const NavBarStyled = styled.div`
  width: 100%;
  height: 73px;
`;
