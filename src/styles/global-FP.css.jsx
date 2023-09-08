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
        
    }
`
export default GlobalStyle