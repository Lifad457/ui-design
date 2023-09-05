import { createGlobalStyle } from "styled-components";

const GlobalStyle  = createGlobalStyle`
    *, *&:before, *&:after {
        box-sizing: border-box;
        /* border: solid red 1px; */
    }

    html, body {
        margin: 0;
        padding: 0;
        font-family: "Inter", sans-serif;
    }

    body {
        background: linear-gradient(137deg, rgba(255,255,255,1) 0%, rgba(237,208,253,1) 100%);
        display: grid;
        justify-content: center;
        height: 100vh;
        place-content: center;
    }


`
export default GlobalStyle