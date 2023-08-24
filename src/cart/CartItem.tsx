import React, { useContext } from "react";
import { Project } from "../data";
import { StoreContext } from "../contexts/StoreContext";
import styled from "styled-components";
import DeleteIcon from "@mui/icons-material/Delete";

const CartItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  margin: 0;
  border-radius: 10px;
  width: 100%;
  box-shadow: 5px 5px 20px 0px rgba(0, 0, 0, 0.2);
  background-color: var(--white);
`;

const ItemDetails = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  margin-right: 15px;
`;
const Title = styled.h2`
  font-size: 1rem;
  margin: 0;
  width: 50%;
`;

const Price = styled.span`
  font-size: 1rem;
  margin: 0 15px;
  width: 20%;
`;

const RemoveButton = styled.button`
  padding: 5px 10px;
  border-radius: 5px;
  color: var(--secondary);
  border: none;
  cursor: pointer;
  font-size: 0.8rem;
  transition: 0.3s;
  background-color: transparent;
  &:hover {
    color: var(--secondary-light);
  }
`;

interface Props {
  project: Project;
}

export const CartItem: React.FC<Props> = ({ project }) => {
  const { dispatch } = useContext(StoreContext);

  const removeFromCart = () => {
    dispatch({ type: "REMOVE_FROM_CART", projectId: project.id });
  };

  return (
    <CartItemContainer>
      <ItemDetails>
        <Image src={project.imagesUrl[0]} alt={project.title} />
        <Title>{project.title}</Title>
      </ItemDetails>
      <Price>${project.price}</Price>
      <RemoveButton onClick={removeFromCart}>
        <DeleteIcon />
      </RemoveButton>
    </CartItemContainer>
  );
};
