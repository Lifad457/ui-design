import styled, {css} from 'styled-components'
import MenuButton from "../components/MenuButton";
import fern from "../assets/images/fern.svg"

export const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 1em;

    .exit svg {
        width: 1em;
        margin-right: 1.9em;
        cursor: pointer;
    }
    .logo {
        font-size: 1.2em;
    }
    nav {
        text-align: end;
    }
    ul {
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

        &:not(.exit):hover {
            background-color: #77DFC5;
        }
    }
    li a {
        font-size: 1.3em;
        color: black;
        font-weight: bold;
        margin-right: 1.9em;
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
`
export const StyledMenuBtn = styled(MenuButton)`
    width: 1.5em;
    cursor: pointer;
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