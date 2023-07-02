import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { styled } from "styled-components";

interface ShopHeaderProps {
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;   
    padding: 3rem 0;
`;

function ShopHeader({setSearchTerm}: ShopHeaderProps) {
    return (
        <Container>
            <TextField 
                id="search-field" 
                label="Search" 
                variant="outlined" 
                onChange={(event) => setSearchTerm(event.target.value)}
                InputProps={{
                    endAdornment: <InputAdornment position="end" ><SearchIcon /></InputAdornment>,
                }}
            />
        </Container>
    )
}

export default ShopHeader;