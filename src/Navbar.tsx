import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { StoreContext } from './StoreContext';
import styled from 'styled-components';

const NavBarContainer = styled.nav`
  /* Styles for the navigation bar here */
`;

const NavItem = styled(Link)`
  /* Styles for the navigation item here */
`;

const CartCount = styled.span`
  /* Styles for the cart count here */
`;

export const NavBar: React.FC = () => {
  const { state } = useContext(StoreContext);

  return (
    <NavBarContainer>
      <NavItem to="/">Projects</NavItem>
      <NavItem to="/cart">
        Cart {state.cart.length > 0 && <CartCount>({state.cart.length})</CartCount>}
      </NavItem>
    </NavBarContainer>
  );
};
