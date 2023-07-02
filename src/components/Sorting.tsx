import { styled } from "styled-components";
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';

const SortingContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
`;

function Sorting() {
    return(
        <SortingContainer>
            <p>Sort by:</p>
            <Select
                placeholder="Choose one…"
                size="sm"
                variant="outlined"
            >
                <Option value={1}>
                    Price (low to high)
                </Option>
                <Option value={2}>
                    Price (high to low)
                </Option>
                <Option value={3}>
                    Newest
                </Option>
            </Select>
        </SortingContainer>
    )
}

export default Sorting;