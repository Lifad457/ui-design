import { createGlobalStyle } from 'styled-components'

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
        font-family: "Inter", sans-serif;
        background: #F0F0F0;
        color: #1A004E;
    }
`
export default GlobalStyle