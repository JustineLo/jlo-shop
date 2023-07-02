import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import { styled } from "styled-components";
import { Slider } from '@mui/joy';
import { useState } from 'react';
import Checkbox from '@mui/joy/Checkbox';
import { stackOptions } from '../data';


const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    width: 20%;
`;

const Sorter = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
`;

const PriceFilterContainer = styled.div`
    display: flex;
    flex-direction: column;

    p {
        align-self: end;
    }
`;

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

function FiltersColumn() {
    return(
        <Container>
            <Sorting />
            <PriceFilter />
            <StackFilter />
        </Container>
    )
}

function Sorting() {
    return(
        <Sorter>
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
        </Sorter>
    )
}

function PriceFilter() {

    const [value, setValue] = useState<number[]>([20, 37]);
    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
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

function StackFilter() {

    function handleCheck(event: React.ChangeEvent<HTMLInputElement>) {
        console.log(event);
    } 

    return (<StackFilterContainer>
        <h4>Stack</h4>
      {stackOptions().map((stack) => {
        return <StackOption>
            <Checkbox variant="outlined" value={stack} onChange={(event) => handleCheck(event)} />
            <p>{stack}</p>
        </StackOption>
        }
      )}
    </StackFilterContainer>
    )
}

export default FiltersColumn;