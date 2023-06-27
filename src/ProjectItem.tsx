import React, { useContext } from 'react';
import { Project } from './data';
import { StoreContext } from './StoreContext';
import styled from 'styled-components';

const ProjectCard = styled.div`
  /* Styles for the card here */
`;

const Image = styled.img`
  /* Styles for the image here */
`;

const Title = styled.h2`
  /* Styles for the title here */
`;

const Description = styled.p`
  /* Styles for the description here */
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
      <Title>{project.title}</Title>
      <Description>{project.description}</Description>
      <button onClick={addToCart}>Add to Cart</button>
      <a href={project.projectUrl}>View Project</a>
    </ProjectCard>
  );
};
