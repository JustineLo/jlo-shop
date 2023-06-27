import React, { useContext } from 'react';
import { StoreContext } from './StoreContext';
import { ProjectItem } from './ProjectItem';
import styled from 'styled-components';

const ProjectsContainer = styled.div`
  /* Styles for the projects container here */
`;

export const ProjectsList: React.FC = () => {
  const { state } = useContext(StoreContext);

  return (
    <ProjectsContainer>
      {state.projects.map((project) => (
        <ProjectItem key={project.id} project={project} />
      ))}
    </ProjectsContainer>
  );
};
