import styled from "styled-components";
import Header from "../components/Header";
import { ProjectsList } from "../products/ProjectsList";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;

function HomePage() {
  return (
    <Container>
      <Header />
      <ProjectsList />
    </Container>
  );
}

export default HomePage;
