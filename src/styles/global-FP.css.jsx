import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *, *&:before, *&:after {
        box-sizing: border-box;
        /* border: solid red 1px; */
    }

    html, body {
        margin: 0;
        padding: 0;
    }

    body {
        background: #D8EACB;
        font-family: 'Montserrat', sans-serif;
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }
    
    img {
        width: 100%;
    }
`
export default GlobalStyle