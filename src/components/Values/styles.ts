import styled from "styled-components";

const ValuesContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    box-sizing: border-box;

    padding: 3rem;

    background-color: #3c68a9;

    min-width: 260px;

    h1 {
        width: 100%;
        text-align: start;
        padding-bottom: 1rem;
        min-width: 80%;
        font-size: 24px;
        margin: 1rem 0;
        color: var(--grey-0);
        font-weight: bold;
        border-bottom: 2px solid #5D9CEC;

    }
    
`

export { ValuesContainer }