import { styled } from "styled-components";
import { stackOptions } from "../data";
import Checkbox from "@mui/joy/Checkbox";


interface StackFiltersProps {
  handleSelectStack: (stack: string) => void;
}

const StackFilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h4 {
    text-align: center;
  }

  @media (min-width: 768px) {
    h4 {
      text-align: start;
    }
  }
`;

const OptionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
  row-gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const StackOption = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

function StackFilter({ handleSelectStack }: StackFiltersProps) {
  return (
    <StackFilterContainer>
      <h4>Stack</h4>
      <OptionsGrid>
        {stackOptions().map((stack, index) => {
          return (
            <StackOption key={`stack-${index}`}>
              <Checkbox
                variant="outlined"
                value={stack}
                onChange={(event) => handleSelectStack(event.target.value)}
              />
              <p>{stack}</p>
            </StackOption>
          );
        })}
      </OptionsGrid>
    </StackFilterContainer>
  );
}

export default StackFilter;
