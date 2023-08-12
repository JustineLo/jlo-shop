import React, { useContext, useState } from "react";
import { StoreContext } from "../contexts/StoreContext";
import { ProjectItem } from "./ProjectItem";
import styled from "styled-components";
import Sorting from "../components/Sorting";
import PriceFilter from "../components/PriceFilter";
import StackFilter from "../components/StackFilter";
import Search from "../components/Search";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    align-items: start;
    width: 90%;
  }
`;

const ProjectsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  row-gap: 30px;
  justify-items: center;
  align-items: start;
  padding: 0 1rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    padding-left: 20px;
    width: 80%;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const FiltersColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;

  @media (min-width: 768px) {
    gap: 40px;
    width: 20%;
  }
`;

const SearchComponent = styled.div`
  order: 3;

  @media (min-width: 768px) {
    order: 1;
  }
`;

const FilterComponents = styled.div`
  order: 2;
`;

export const ProjectsList: React.FC = () => {
  const { state } = useContext(StoreContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStacks, setSelectedStacks] = useState<string[]>([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState([0, 1000]);
  const [sortMethod, setSortMethod] = useState<string>("");

  function handleSelectStack(stack: string): void {
    if (stack !== "") {
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

  function handleSortMethodChange(method: string): void {
    setSortMethod(method);
  }

  return (
    <Container>
      <MainSection>
        <FiltersColumn>
          <SearchComponent>
            <Search setSearchTerm={setSearchTerm} />
          </SearchComponent>
          <FilterComponents>
            <Sorting handleSortMethodChange={handleSortMethodChange} />
            <PriceFilter handleSelectPriceRange={handleSelectPriceRange} />
            <StackFilter handleSelectStack={handleSelectStack} />
          </FilterComponents>
        </FiltersColumn>
        <ProjectsContainer>
          {state.projects
            .filter(
              (project) =>
                searchTerm === "" ||
                project.title
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase()) ||
                project.description
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase())
            )
            .filter(
              (project) =>
                selectedStacks.length === 0 ||
                selectedStacks.every((stack) => project.stack.includes(stack))
            )
            .filter(
              (project) =>
                project.price >= selectedPriceRange[0] &&
                project.price <= selectedPriceRange[1]
            )
            .sort((a, b) => {
              switch (sortMethod) {
                case "priceLowHigh":
                  return a.price - b.price;
                case "priceHighLow":
                  return b.price - a.price;
                case "newest":
                  return b.creationDate.getTime() - a.creationDate.getTime();
                case "latest":
                  return a.creationDate.getTime() - b.creationDate.getTime();
                default:
                  return 0;
              }
            })
            .map((project) => (
              <ProjectItem key={project.id} project={project} />
            ))}
        </ProjectsContainer>
      </MainSection>
    </Container>
  );
};
