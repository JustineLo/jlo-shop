import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { styled } from "styled-components";
import { useContext } from "react";
import { StoreContext } from "../contexts/StoreContext";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;   
    padding: 3rem 0;
`;

function ShopHeader() {
    const { dispatch } = useContext(StoreContext);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({ type: 'SET_SEARCH_TERM', payload: event.target.value });
    }
    

    return (
        <Container>
            <TextField 
                id="search-field" 
                label="Search" 
                variant="outlined" 
                onChange={handleSearchChange}
                InputProps={{
                    endAdornment: <InputAdornment position="end" ><SearchIcon /></InputAdornment>,
                }}
            />
        </Container>
    )
}

export default ShopHeader;