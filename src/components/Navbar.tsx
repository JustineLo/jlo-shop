import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { StoreContext } from '../contexts/StoreContext';
import styled from 'styled-components';

const NavBarContainer = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
  background-color: white;
  z-index: 100;
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
  color: black;
  padding-right: 3rem;
`;

export const NavBar: React.FC = () => {
  const { state } = useContext(StoreContext);

  return (
    <NavBarContainer>
      <Logo to="/">JLO Shop</Logo>
      <Cart to="/cart">
        Cart {state.cart.length > 0 && `(${state.cart.length})`}
      </Cart>
    </NavBarContainer>
  );
};
