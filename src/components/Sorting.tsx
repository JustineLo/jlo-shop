import { styled } from "styled-components";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";

interface SortingProps {
  handleSortMethodChange: (method: string) => void;
}

const SortingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
  flex-direction: column;

  @media (min-width: 768px) {
    justify-content: space-between;
    gap: 1rem;
    flex-direction: row;
  }

  p {
    margin: 0;
  }

  Select {
    width: 100%;

    @media (min-width: 768px) {
      width: auto;
    }
  }
`;

const Sorting: React.FC<SortingProps> = ({ handleSortMethodChange }) => {
  const handleChange = (
    event:
      | React.MouseEvent<Element, MouseEvent>
      | React.KeyboardEvent<Element>
      | React.FocusEvent<Element, Element>
      | null,
    value: any
  ) => {
    if (value) {
      handleSortMethodChange(value as string);
    }
  };

  return (
    <SortingContainer>
      <p>Sort by:</p>
      <Select
        placeholder="Choose one…"
        size="sm"
        variant="outlined"
        onChange={handleChange}
      >
        <Option value="priceLowHigh">Price (low to high)</Option>
        <Option value="priceHighLow">Price (high to low)</Option>
        <Option value="newest">Newest</Option>
        <Option value="latest">Latest</Option>
      </Select>
    </SortingContainer>
  );
};

export default Sorting;
