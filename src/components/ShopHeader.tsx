import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { styled } from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;   
    padding: 3rem 0;
`;

function ShopHeader() {
    return (
        <Container>
            <TextField id="search-field" label="Search" variant="outlined" InputProps={{
            endAdornment: <InputAdornment position="end" ><SearchIcon /></InputAdornment>,
          }}/>
        </Container>
    )
}

export default ShopHeader;