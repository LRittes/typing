import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
        * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        width: 100%;
        min-height: 100vh;
        color: #e1e1e1;
        background-color: #1e1e1e;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Rubik', sans-serif;
        font-size: 10px;
    }
`