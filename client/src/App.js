import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Code from './code/Code';

const GlobalStyle = createGlobalStyle`

    * {
        box-sizing: border-box;
    }

    body, #root {
        margin: 0;
        padding: 0;
        width: 100vw;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: Arial, Helvetica, sans-serif;
        background-color: ${props => props.theme.background};
    }
`;

const App = () => {
    return (
        <>
            <GlobalStyle />
            <Code />
        </>
    );
};

export default App;
