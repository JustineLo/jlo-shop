import React, { useContext } from 'react';
import { Project } from '../data';
import { StoreContext } from '../contexts/StoreContext';
import styled from 'styled-components';
import Button from '@mui/joy/Button';

const ProjectCard = styled.div`
  width: 280px;
  height: 300px;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0 2px 18px rgba(0, 0, 0, 0.2);
  background-color: #FFF2E1;
`;

const Image = styled.img`
  height: 40%;
  width: 100%;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px 20px 0 20px;
  height: 60%;
  h2 {
    margin: 0;
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Price = styled.p`
  padding-left: 10px;
  margin: 0;
  font-weight: bold;
  font-size: 1rem;
  align-self: center;
`;

interface Props {
  project: Project;
}

export const ProjectItem: React.FC<Props> = ({ project }) => {
  const { dispatch } = useContext(StoreContext);

  const addToCart = () => {
    dispatch({ type: 'ADD_TO_CART', project });
  };

  return (
    <ProjectCard>
      <Image src={project.imageUrl} alt={project.title} />
      <Details>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <Footer>
          <Price>{project.price}$</Price>
          <Button
            color="danger"
            onClick={addToCart}
            variant="solid"
          > Add to Cart</Button>
        </Footer>
      </Details>


    </ProjectCard>
  );
};
