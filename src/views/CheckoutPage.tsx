import React, { useContext } from "react";
import { StoreContext } from "../contexts/StoreContext";
import styled from "styled-components";
import { CartItem } from "../cart/CartItem";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 15px;
  margin: 60px 0;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    gap: 15%;
  }
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 90%;
`;

const RecapContainer = styled.div`
  border-radius: 10px;
  padding: 20px 30px;
  width: 80%;
  height: auto;
  box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.2);
  background-color: var(--white);

  @media (min-width: 768px) {
    width: 20%;
    height: 100%;
    padding: 30px 40px;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 60px 0;
  gap: 10px;
  width: 100%;

  @media (min-width: 768px) {
    justify-content: space-between;
  }
`;

const RecapRow = styled.span`
  display: flex;
  width: 100%;
  margin: 20px 0;
  justify-content: space-between;

  .bold {
    font-weight: bold;
  }

  .title {
    width: 60%;
  }
`;

const CheckoutButton = styled.button`
  padding: 8px 20px;
  margin-top: 10px;
  border-radius: 10px;
  background-color: var(--primary);
  color: white;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  transition: 0.3s;

  &:hover {
    background-color: var(--primary-light);
  }
`;

const ClearBasketButton = styled.button`
  padding: 8px 20px;
  border-radius: 10px;
  background-color: var(--secondary);
  color: white;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  transition: 0.3s;

  &:hover {
    background-color: var(--secondary-light);
  }
`;

const AddMoreButton = styled.button`
  padding: 8px 20px;
  border-radius: 10px;
  background-color: var(--tertiary);
  color: white;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  transition: 0.3s;

  &:hover {
    background-color: var(--tertiary-light);
  }
`;

const CheckoutPage: React.FC = () => {
  const { state, dispatch } = useContext(StoreContext);
  const navigate = useNavigate();
  const total = state.cart.reduce((acc, item) => acc + item.price, 0);

  const handleCheckout = () => {
    state.cart.forEach((project) => {
      dispatch({ type: "REMOVE_FROM_CART", projectId: project.id });
    });
  };

  const handleAddMore = () => {
    navigate("/");
  };

  const handleClearBasket = () => {
    state.cart.forEach((project) => {
      dispatch({ type: "REMOVE_FROM_CART", projectId: project.id });
    });
  };

  return (
    <Container>
      <div>
        <ItemContainer>
          {state.cart.map((project) => (
            <CartItem key={project.id} project={project} />
          ))}
        </ItemContainer>
        <ButtonsContainer>
          <AddMoreButton onClick={handleAddMore}>
            Add More Projects
          </AddMoreButton>
          <ClearBasketButton onClick={handleClearBasket}>
            Clear Basket
          </ClearBasketButton>
        </ButtonsContainer>
      </div>
      <RecapContainer>
        <RecapRow>
          <span className="title bold">Subtotal :</span>
          <span className="bold">${total}</span>
        </RecapRow>
        <RecapRow>
          <span className="title">TVA :</span> <span>${total * 0.1}</span>
        </RecapRow>
        <hr color="#b6b6b6" />
        <RecapRow>
          <span className="title bold">Total :</span>
          <span className="bold">${total + total * 0.1}</span>
        </RecapRow>
        <CheckoutButton onClick={handleCheckout}>Checkout</CheckoutButton>
      </RecapContainer>
    </Container>
  );
};

export default CheckoutPage;
