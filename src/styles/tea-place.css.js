import styled, {css} from 'styled-components'
import MenuButton from "../components/MenuButton";

//#AADFC5 #47946E #7A4900
export const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 1em;

    .cross {
        width: 1em;
    }
    .logo {
        color: #47946E;
        font-weight: bold;
        font-size: 1.2em;
    }
    nav {
        text-align: end;
    }
    ul {
        margin: 0;
        padding: 0;
        position: fixed;
        top: 0;
        right: 0;
        height: 100vh;
        background-color: #47946E;
        width: 35%;
        z-index: 2;
        transform: translateX(0%);
        transition: transform .3s;

        ${props => !props.visible && css`
            transform: translateX(100%);
        `};
    }
    li {
        list-style: none;
        margin-right: 1.9em;
        padding-top: 0.5em;
    }
    li a {
        color: black;
        font-weight: bold;
    }
`
export const StyledContentWrapper = styled.div`
    padding: 1em;
    .plant {
        display: none;
    }
`
export const StyledMenuBtn = styled(MenuButton)`
    width: 2em;
`