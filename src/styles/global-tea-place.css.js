import { createGlobalStyle } from "styled-components";

const GlobalStyle  = createGlobalStyle`
    *, *:before, *:after {
        box-sizing: border-box;
        /* border: solid red 1px; */
    }

    html, body {
        margin: 0;
        padding: 0;
    }

    body {
        font-family: "Inter", sans-serif;
        a {
            color: #7A4900;
            text-decoration: none;
            font-weight: bold;
        }
        background: #AADFC5;
        height: 100vh;
    }

`
export default GlobalStyle