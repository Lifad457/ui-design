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

    @media (min-width: 400px) {
        body {
            background-position: 0 30%;
            background-size: 130%;
        }
    }

    @media (min-width: 850px) {
        body {
            text-align: left;
            height: 100vh;
            display: grid;
            place-content: center;
            background-position: 0 80%;
            background-size: 100%;
        }
    }
    @media (min-width: 1180px) {
        body {
            font-size: 17px;
        }
    }
`
export default GlobalStyle