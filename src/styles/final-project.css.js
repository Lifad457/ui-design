import styled,  {css} from "styled-components"
import forest from "../assets/images/final-project/forest.jpg"

export const ForrestHero = styled.div`
    background: url(${forest});
    background-size: cover;
    color: white;
`
export const Wrapper = styled.div`
    padding: .5em;
    text-align: center;
`
export const NoPadding = styled(Wrapper)`
    padding: 0;

    header {
        display: flex;
        justify-content: space-between;
        background: #EEEEEE;
        padding: .5em;
    }
    .logo {
        color: black;
        font-weight: bold;
    }
    .menu {
        cursor: pointer;
    }
    nav ul {
        visibility: hidden;
        opacity: 0;
        position: fixed;
        width: 100%;
        top: 0;
        left: 0;
        background: #72A84A;
        height: 100vh;
        padding-top: 5em;
        z-index: 100;
    }
    nav ul li a {
        color: #EEEEEE;
        font-weight: bold;
        font-size: 1.5em;
        padding: 1em;
        display: block;
    }
    .exit a {
        position: absolute;
        width: 80px;
        height: 80px;
        top: 0;
        right: 0;
    }

    .nav {
        ${props => props.$navMenu && css`
            visibility: unset;
            opacity: 1;
            transform: translateX(0);
        `};
    }
`
export const Hero = styled(Wrapper)`
    .subtitle {
        padding: 3em 0 .5em;
    }

    h1 span {
        display: block;
        /* clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0% 100%); */
    }

    .cta {
        display: inline-block;
        background-color: #72A84A;
        border-radius: .8em;
        margin-bottom: 1.8em;
        padding: .6em 1.4em;
        color: white;
        font-weight: bold;
    }
        
    .cabin-title {
        font-weight: bold;
        font-size: 1.3em;
    }

    ul.featured-cabins {
        width: 60%;
        margin: 0 auto;
    }

    ul.featured-cabins li {
        margin-bottom: 3em;
    }

    .cabin-desc, ul.features li p, .left p {
        line-height: 1.9em;
        font-size: .8em;
        margin-bottom: 2em;
    }

    .cabin-cta {
        display: flex;
        justify-content: space-between;
        position: relative;
    }

    .cabin-cta:after {
        position: absolute;
        content: '';
        bottom: -12px;
        background: white;
        width: 100%;
        height: 1px;
    }

    .cabin-cta span {
        color: white;
        font-weight: bold;
    }

    .cabin-cta img {
        width: 10px;
    }

`
export const FeatureContainer = styled.div`
    background: #1A1A1A;
    color: #D8EACB;

    ul.features {
        margin: 2em auto;
        width: 70%;
    }
    img {
        width: 50px;
    }
    h2 {
        font-size: 1.6em;
    }
    p {
        font-size: .9em;
        line-height: 1.8;
    }
    li {
        padding: .8em;
    }
`
export const LastContainer = styled(Wrapper)`
    .main-quote {
        font-family: 'Playfair Display', serif;
        font-size: 2.2em;
        font-style: italic;
        margin-bottom: .5em;
    }

    cite {
        margin-bottom: 3em;
        display: block;
    }

    p {
        font-size: .9em;
        line-height: 1.8;
    }
    
`