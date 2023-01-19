import styled from "styled-components";

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    align-items: flex-start;

    width: 90vw;
    max-width: 600px;

    box-sizing: border-box;

    padding: 3rem;

    background-color: var(--grey-0);

    h1 {
        margin-bottom: 25px;
        width: 100%;
        text-align: start;
        font-size: 24px;
        line-height: 28.13px;
        padding: 0.25rem 0;
        color: var(--title-1);
    }

    input {
        color: black;
        height: 2.5rem;
        font-size: 0.75rem;
        font-weight: 600;
        border: 1px solid #DDE6E9;
        background-color: #e3e6e9;
        padding: 0;
    }

    input:focus {
        outline-color: #66AFE9;
    }

    div {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        width: 100%;
    }

    button {
        border: none;

        padding: 10px 30px;

        font-weight: 700;

        margin-top: 25px;

        cursor: pointer;

        border-radius: 8px;

        color: var(--grey-0);
        background-color: #00d4ff;
    }

    button:hover {
        background-color: #060069;
        color: var(--grey-0);
    }

    label {
        color: var(--title-1);
        font-style: italic;
    }

`

export { FormContainer }