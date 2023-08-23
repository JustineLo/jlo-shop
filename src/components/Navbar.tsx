import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../contexts/StoreContext";
import styled from "styled-components";
import logo from "./../assets/logo3.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const NavBarContainer = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #000000;
  z-index: 100;
  padding: 10px 1rem;

  @media (min-width: 768px) {
    padding: 10px 0;
  }

  a {
    display: flex;
    align-items: center;
  }
`;

const Logo = styled(Link)`
  font-size: 2rem;
  text-decoration: none;
  color: green;
  padding-left: 0;

  @media (min-width: 768px) {
    font-size: 3rem;
    padding-left: 2rem;
  }
`;

const CartText = styled.span`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    font-size: 1rem;
    align-items: center;
  }
`;

const Cart = styled(Link)`
  font-size: 1rem;
  text-decoration: none;
  color: white;
  padding-right: 60px;
  display: flex;
  align-items: center;
  gap: 10px;

  @media (min-width: 768px) {
    font-size: 1.5rem;
    padding-right: 3rem;
  }
`;

const Badge = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
  color: white;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  font-size: 10px;
  position: absolute;
  top: -8px;
  right: -8px;

  @media (min-width: 768px) {
    display: none;
  }
`;

const CartIconContainer = styled.div`
  position: relative;
`;

export const NavBar: React.FC = () => {
  const { state } = useContext(StoreContext);
  const cartItemsCount = state.cart.length;

  return (
    <NavBarContainer>
      <Logo to="/">
        <img src={logo} />
      </Logo>
      <Cart to="/cart">
        <CartIconContainer>
          <ShoppingCartIcon />
          {cartItemsCount > 0 && <Badge>{cartItemsCount}</Badge>}
        </CartIconContainer>
        <CartText>Cart {cartItemsCount > 0 && `(${cartItemsCount})`}</CartText>
      </Cart>
    </NavBarContainer>
  );
};
