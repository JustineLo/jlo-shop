import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../contexts/StoreContext";
import styled from "styled-components";
import logo from "./../assets/logo3.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";

const NavBarContainer = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--black);
  z-index: 100;
  padding: 10px 1rem;

  img {
    margin-left: 5px;
  }

  a {
    display: flex;
    align-items: center;
  }

  @media (min-width: 768px) {
    padding: 10px 0;

    img {
      margin-left: 40px;
    }
  }
`;

const LeftCol = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const MiddleCol = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const RightCol = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 40px;
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
  color: var(--white);
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
  color: var(--white);
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
  const { t } = useTranslation();
  const cartItemsCount = state.cart.length;

  return (
    <NavBarContainer>
      <LeftCol>
        <Link to="/">
          <img src={logo} />
        </Link>
      </LeftCol>
      <MiddleCol></MiddleCol>
      <RightCol>
        <LanguageSwitcher />
        <Cart to="/cart">
          <CartIconContainer>
            <ShoppingCartIcon />
            {cartItemsCount > 0 && <Badge>{cartItemsCount}</Badge>}
          </CartIconContainer>
          <CartText>
            {t("navbar.cart")} {cartItemsCount > 0 && `(${cartItemsCount})`}
          </CartText>
        </Cart>
      </RightCol>
    </NavBarContainer>
  );
};
