import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    *, body{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        font-family: 'Montserrat', sans-serif;
    }
    body{
        background-color: #fff;
        background-repeat: repeat-y;
        background-position: center center;
        background-size: cover;
    }
`;

export default GlobalStyle