import styled, {css} from 'styled-components'
import MenuButton from "../components/MenuButton";
import fern from "../assets/images/fern.svg"

export const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 1em;

    .exit svg {
        width: 1em;
        right: 2.5em;
        cursor: pointer;
        margin-right: 1.5em;
    }
    .logo {
        font-size: 1.2em;
    }
    ul {
        text-align: end;
        position: fixed;
        top: 0;
        right: 0;
        height: 100vh;
        background-color: #47946E;
        width: 35%;
        margin: 0;
        padding: 0;
        z-index: 1;

        transform: translateX(0%);
        transition: transform .3s;

        ${props => !props.$visible && css`
            transform: translateX(100%);
        `};
    }
    li {
        list-style: none;
        padding-top: 0.8em;

    }
    li a {
        font-size: 1.3em;
        color: black;
        font-weight: bold;
        margin-right: 1em;
    }

    .active {
        color: #217C4f;
    }

    @media (min-width: 600px) {
        .exit svg {
            display: none;
        }
        ul {
            display: flex;
            background: none;
            height: unset;
            width: unset;
            position: unset;
            text-transform: uppercase;

            transform: translateX(0%);
        }
        li a {
            font-size: .9em;
            padding: 0 .5rem;
        }
    }
`
export const StyledContentWrapper = styled.div`
    padding: 1em;
    text-align: center;

    h1 {
        font-size: 1.5rem;
        position: relative;
        margin-top: 3em;
    }

    h1:before {
        content: '';
        position: absolute;
        width: 30%;
        height: 7px;
        top: -20px;
        left: 33%;
        background-color: #7A4900
    }

    p {
        font-size: 0.9rem;
        line-height: 1.4em;
        width: 90%;
        margin: 0 auto 2em;
    }

    .cta {
        display: block;
        padding: .7em;
        margin-bottom: 1em;
        background-color: #7A4900;
        color: white;
        white-space: nowrap;
    }

    .outline {
        background: none;
        border: 2px solid #47946E;
        color: black;
    }

    .plant-container {
        overflow: hidden;
        position: absolute;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 100vh;
        z-index: -1;
    }

    .plant {
        width: 350px;
        position: absolute;
        right: -1%;
        bottom: -20%;
    }

    @media (min-width: 600px) {
        h1 {
        font-size: 2.5em;
        }
        p {
            font-size: 1em;
        }
        .btn-container {
            display: flex;
            justify-content: center;
        }
        .cta {
            padding: .7em 1.2em;
        }
        .outline {
            margin-left: 1em;
        }
    }

    @media (min-width: 1000px) {
        display: flex;

        main {
            text-align: left;
            width: 90%;
            margin-left: 2em;
        }
        p {
            width: 100%;
        }
        .btn-container {
            justify-content: left;
        }
        h1:before {
            width: 10%;
            left: 0;
        }
        .plant-container {
            position: unset;
            width: auto;
            height: auto;
            display: grid;
            place-content: center;
            margin-top: 4em;
            margin-right: 2em;
        }
        .plant {
            position: unset;
            width: 90%;
        }
    }
`
export const StyledMenuBtn = styled(MenuButton)`
    width: 1.5em;
    cursor: pointer;

    @media (min-width: 600px) {
        display: none;
    }
`
export const StyledFern = styled.div`
    background: url(${fern}) no-repeat;
    height: 50vh;
    width: 70%;
    position: absolute;
    top: 30%;
    left: 0;
    z-index: -1;
    opacity: 0.1;
`
export const StyledLeftCol = styled.div`
    width: 60%;
    background: #AADFC5;
    position: absolute;
    top: 0;
    height: 100vh;
    z-index: -1;
`