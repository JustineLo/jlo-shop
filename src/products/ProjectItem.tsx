import React, { useContext, useState } from "react";
import { Project } from "../data";
import { StoreContext } from "../contexts/StoreContext";
import styled from "styled-components";
import AddBoxIcon from "@mui/icons-material/AddBox";
import ProductDetailModal from "../components/ProductDetailModal";
import { useTranslation } from "react-i18next";

const ProjectCard = styled.div`
  position: relative;
  width: 280px;
  height: 350px;
`;

const ImageContainer = styled.div`
  position: relative;
  height: 60%;
  width: 100%;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 2px 18px rgba(0, 0, 0, 0.2);
`;

const Image = styled.div<{ image: string }>`
  height: 100%;
  width: 100%;
  background-image: url(${(props) => props.image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  transition: transform 0.3s ease-in-out;

  ${ImageContainer}:hover & {
    transform: scale(1.1);
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0.4;
  transition: 0.5s ease;
  background-color: var(--black);

  ${ProjectCard}:hover & {
    opacity: 0.1;
  }
`;

const SeeDetails = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  opacity: 0;
  transition: 0.5s ease;
  color: var(--white);
  font-size: 16px;
  padding: 16px 32px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  text-align: center;
  text-decoration: none;

  ${ProjectCard}:hover & {
    opacity: 1;
  }
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px 10px 0 10px;
  height: 60%;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    margin: 0;
  }
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    flex: 1;
    margin-right: 10px;
  }

  svg {
    cursor: pointer;
    padding: 0;
    transition: all 0.3s ease;
    &:hover {
      color: var(--primary-light);
    }
  }
`;

const Price = styled.p`
  margin: 0;
  font-weight: bold;
  font-size: 1rem;
`;

interface Props {
  project: Project;
}

export const ProjectItem: React.FC<Props> = ({ project }) => {
  const { dispatch } = useContext(StoreContext);
  const [showModal, setShowModal] = useState(false);
  const { t } = useTranslation();
  const addToCart = () => {
    dispatch({ type: "ADD_TO_CART", project });
  };

  return (
    <ProjectCard>
      <ImageContainer>
        <Image image={project.imagesUrl[0]} />
        <Overlay onClick={() => setShowModal(true)}>
          <SeeDetails>See Details</SeeDetails>
        </Overlay>
      </ImageContainer>
      <ProductDetailModal
        project={project}
        showModal={showModal}
        onClose={() => setShowModal(false)}
      />
      <Details>
        <Top>
          <h2>{project.title}</h2>
          <Price>{project.price}$</Price>
        </Top>
        <Bottom>
          <p>{t(project.excerpt)}</p>
          <AddBoxIcon
            sx={{ color: "var(--primary)", fontSize: "35px" }}
            onClick={addToCart}
          />
        </Bottom>
      </Details>
    </ProjectCard>
  );
};
