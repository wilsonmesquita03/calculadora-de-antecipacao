import styled from "styled-components";

const CalculatorContainer = styled.div`
    display: flex;
    width: fit-content;

    @media (max-width: 600px){
        flex-direction: column;
    }

    overflow: hidden;

    border-radius: 8px;

`

export { CalculatorContainer }