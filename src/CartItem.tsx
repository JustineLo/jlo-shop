import React, { useContext } from 'react';
import { Project } from './data';
import { StoreContext } from './StoreContext';
import styled from 'styled-components';

const CartItemContainer = styled.div`
  /* Styles for the cart item container here */
`;

const Image = styled.img`
  /* Styles for the image here */
`;

const Title = styled.h2`
  /* Styles for the title here */
`;

interface Props {
  project: Project;
}

export const CartItem: React.FC<Props> = ({ project }) => {
  const { dispatch } = useContext(StoreContext);

  const removeFromCart = () => {
    dispatch({ type: 'REMOVE_FROM_CART', projectId: project.id });
  };

  return (
    <CartItemContainer>
      <Image src={project.imageUrl} alt={project.title} />
      <Title>{project.title}</Title>
      <button onClick={removeFromCart}>Remove from Cart</button>
    </CartItemContainer>
  );
};
