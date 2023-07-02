import React, { useContext } from 'react';
import { StoreContext } from '../contexts/StoreContext';
import { ProjectItem } from './ProjectItem';
import styled from 'styled-components';
import ShopHeader from '../components/ShopHeader';
import FiltersColumn from '../components/FiltersColumn';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainSection = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  width: 90%;
`;

const ProjectsContainer = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 30px;
  justify-items: center;
  align-items: center;
  padding-left: 20px;
`;

export const ProjectsList: React.FC = () => {
  const { state } = useContext(StoreContext);

  return (
    <Container>
      <ShopHeader />
      <MainSection>
        <FiltersColumn />
        <ProjectsContainer>
          {state.projects
          .filter((project) => 
            state.searchTerm === "" ||
            project.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
            project.description.toLowerCase().includes(state.searchTerm.toLowerCase())
          )
          .map((project) => (
            <ProjectItem key={project.id} project={project} />
          ))}
        </ProjectsContainer>
      </MainSection>
    </Container>
  );
};
