import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "styled-components";
import { useTranslation } from "react-i18next";

interface ShopHeaderProps {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  @media (min-width: 768px) {
    padding: 3rem 0;
  }

  TextField {
    width: 90%;

    @media (min-width: 768px) {
      width: 50%;
    }
  }
`;

function Search({ setSearchTerm }: ShopHeaderProps) {
  const { t } = useTranslation();

  return (
    <Container>
      <TextField
        id="search-field"
        label={t("search.label")}
        variant="outlined"
        onChange={(event) => setSearchTerm(event.target.value)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </Container>
  );
}

export default Search;
