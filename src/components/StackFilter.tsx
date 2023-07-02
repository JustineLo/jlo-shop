import { styled } from "styled-components";
import { stackOptions } from "../data";
import Checkbox from '@mui/joy/Checkbox';

interface StackFiltersProps {
    handleSelectStack: (stack: string) => void;
}

const StackFilterContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const StackOption = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

function StackFilter({handleSelectStack}: StackFiltersProps) {

    return (<StackFilterContainer>
        <h4>Stack</h4>
      {stackOptions().map((stack) => {
        return <StackOption>
            <Checkbox variant="outlined" value={stack} onChange={(event) => handleSelectStack(event.target.value)} />
            <p>{stack}</p>
        </StackOption>
        }
      )}
    </StackFilterContainer>
    )
}

export default StackFilter;