import React, { useContext } from 'react';
import { StoreContext } from './StoreContext';
import { CartItem } from './CartItem';
import styled from 'styled-components';

const CartContainer = styled.div`
  /* Styles for the cart container here */
`;

export const Cart: React.FC = () => {
  const { state, dispatch } = useContext(StoreContext);

  const handleCheckout = () => {
    // Clear the cart
    state.cart.forEach((project) => {
      dispatch({ type: 'REMOVE_FROM_CART', projectId: project.id });
    });

    // Simulate the download of the projects
    alert('Your projects are being downloaded...');
  };

  return (
    <CartContainer>
      {state.cart.map((project) => (
        <CartItem key={project.id} project={project} />
      ))}
      <button onClick={handleCheckout}>Checkout</button>
    </CartContainer>
  );
};
