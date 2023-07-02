import { useState } from "react";
import { Slider } from '@mui/joy';
import { styled } from "styled-components";

interface PriceFilterProps {
    handleSelectPriceRange: (priceRange: number[]) => void;
}

const PriceFilterContainer = styled.div`
    display: flex;
    flex-direction: column;

    p {
        align-self: end;
    }
`;

function PriceFilter({ handleSelectPriceRange }: PriceFilterProps) {
    const [value, setValue] = useState<number[]>([20, 37]);
    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
        handleSelectPriceRange(newValue as number[]);
      };

    function valueText(value: number) {
    return `${value}$`;
    }

    return(
        <PriceFilterContainer>
            <h4>Price range</h4>
            <p>{value[0]}$ to {value[1]}$ </p>
             <Slider
                getAriaLabel={() => 'Temperature range'}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valueText}
            />
        </PriceFilterContainer>
    )
}

export default PriceFilter;