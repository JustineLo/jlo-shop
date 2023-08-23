import { useState } from "react";
import { Slider } from "@mui/joy";
import { styled } from "styled-components";

interface PriceFilterProps {
  handleSelectPriceRange: (priceRange: number[]) => void;
}

const PriceFilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin: 0 15%;

  h4 {
    margin-bottom: 0;
  }

  p {
    align-self: center;
    text-align: center;
  }

  @media (min-width: 768px) {
    align-items: start;
    margin: 0;
    p {
      align-self: end;
      text-align: right;
    }
  }
`;

function PriceFilter({ handleSelectPriceRange }: PriceFilterProps) {
  const [value, setValue] = useState<number[]>([100, 1000]);
  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
    handleSelectPriceRange(newValue as number[]);
  };

  function valueText(value: number) {
    return `${value}$`;
  }

  return (
    <PriceFilterContainer>
      <h4>Price range</h4>
      <p>
        {value[0]}$ to {value[1]}${" "}
      </p>
      <Slider
        getAriaLabel={() => "Temperature range"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valueText}
        min={100}
        max={1000}
      />
    </PriceFilterContainer>
  );
}

export default PriceFilter;
