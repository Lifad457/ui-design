import { createGlobalStyle } from 'styled-components'
import graphbg from "../assets/images/graph-bg.svg" 

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
        background: #F1F1F1 url(${graphbg}) no-repeat;
        background-position: 0 20%;
        background-size: 150%;
        font-family: 'Montserrat', sans-serif;
        font-weight: normal;
        text-align: center;
    }
`
export default GlobalStyle