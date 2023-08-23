import React, { useContext, useState } from "react";
import { StoreContext } from "../contexts/StoreContext";
import { ProjectItem } from "./ProjectItem";
import styled from "styled-components";
import Sorting from "../components/Sorting";
import PriceFilter from "../components/PriceFilter";
import StackFilter from "../components/StackFilter";
import Search from "../components/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

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
  display: flex;
  flex-direction: column;
  gap: 30px;
  order: 2;
  margin: 1rem 0;

  @media (min-width: 768px) {
    margin: 0;
  }
`;

interface CollapsibleProps {
  isExpanded: boolean;
}

const Collapsible = styled.div<CollapsibleProps>`
  overflow: hidden;
  max-height: ${(props) => (props.isExpanded ? "1000px" : "0")};
  transition: max-height 0.3s ease-in-out;

  @media (min-width: 768px) {
    max-height: none;
    transition: none;
  }
`;

const ToggleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  border: none;
  cursor: pointer;
  margin-bottom: 1rem;
  background: none;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const ProjectsList: React.FC = () => {
  const { state } = useContext(StoreContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStacks, setSelectedStacks] = useState<string[]>([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState([0, 1000]);
  const [sortMethod, setSortMethod] = useState<string>("");
  const [isExpanded, setIsExpanded] = useState(false);

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
          <ToggleButton onClick={() => setIsExpanded(!isExpanded)}>
            Filters
            {isExpanded ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </ToggleButton>
          <Collapsible isExpanded={isExpanded}>
            <FilterComponents>
              <Sorting handleSortMethodChange={handleSortMethodChange} />
              <PriceFilter handleSelectPriceRange={handleSelectPriceRange} />
              <StackFilter handleSelectStack={handleSelectStack} />
            </FilterComponents>
          </Collapsible>
        </FiltersColumn>
        <ProjectsContainer>
          {state.projects
            .filter(
              (project) =>
                searchTerm === "" ||
                project.title
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase()) ||
                project.description.en
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
