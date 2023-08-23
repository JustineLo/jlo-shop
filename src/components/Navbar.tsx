import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../contexts/StoreContext";
import styled from "styled-components";
import logo from "./../assets/logo2.png";

const NavBarContainer = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  background-color: #000000;
  z-index: 100;
  padding: 10px 0;

  a {
    display: flex;
    align-items: center;
  }
`;

const Logo = styled(Link)`
  font-size: 3rem;
  text-decoration: none;
  color: green;
  padding-left: 2rem;
`;

const Cart = styled(Link)`
  font-size: 1.5rem;
  text-decoration: none;
  color: white;
  padding-right: 3rem;
`;

export const NavBar: React.FC = () => {
  const { state } = useContext(StoreContext);

  return (
    <NavBarContainer>
      <Logo to="/">
        <img src={logo} />
      </Logo>
      <Cart to="/cart">
        Cart {state.cart.length > 0 && `(${state.cart.length})`}
      </Cart>
    </NavBarContainer>
  );
};
