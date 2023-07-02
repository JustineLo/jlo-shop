import React, { useContext, useState } from 'react';
import { StoreContext } from '../contexts/StoreContext';
import { ProjectItem } from './ProjectItem';
import styled from 'styled-components';
import ShopHeader from '../components/ShopHeader';
import Sorting from '../components/Sorting';
import PriceFilter from '../components/PriceFilter';
import StackFilter from '../components/StackFilter';

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
  align-items: start;
  padding-left: 20px;
`;

const FiltersColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    width: 20%;
`;

export const ProjectsList: React.FC = () => {
  const { state } = useContext(StoreContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStacks, setSelectedStacks] = useState<string[]>([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState([0, 1000]);

  function handleSelectStack(stack: string): void {
    if (stack !== '') {
      if (selectedStacks.includes(stack)) {
        setSelectedStacks(selectedStacks.filter((item) => item !== stack));
      } else {
        setSelectedStacks([...selectedStacks, stack]);
      }
    }
  }

  function handleSelectPriceRange(priceRange: number[]): void {
    setSelectedPriceRange(priceRange);
  }

  return (
    <Container>
      <ShopHeader setSearchTerm={setSearchTerm} /> 
      <MainSection>
        <FiltersColumn>
            <Sorting />
            <PriceFilter handleSelectPriceRange={handleSelectPriceRange}/>
            <StackFilter handleSelectStack={handleSelectStack}/>
        </FiltersColumn>
        <ProjectsContainer>
          {state.projects
          .filter((project) => 
            searchTerm === "" ||
            project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.description.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .filter((project) =>
            selectedStacks.length === 0 ||
            selectedStacks.every(stack => project.stack.includes(stack))
          )
          .filter((project) =>
            project.price >= selectedPriceRange[0] && project.price <= selectedPriceRange[1]
          )
          .map((project) => (
            <ProjectItem key={project.id} project={project} />
          ))}
        </ProjectsContainer>
      </MainSection>
    </Container>
  );
};
