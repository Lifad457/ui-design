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

    @media screen and (min-width: 900px){
        text-align: left;
    }
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

    @media (min-width: 550px) {
        .menu, .exit {
            display: none;
        }
        
        header {
            padding: 1em;
        }
        
        ul.nav {
            visibility: unset;
            opacity: 1;
            background: none;
            display: flex;
            margin: 0;
            padding: 0;
            position: unset;
            height: auto;
        }
        
        ul.nav li a {
            font-size: .9em;
            padding: 0 1em;
            font-weight: normal;
            color: black;
        }

        ul.nav li:last-child a {
            padding-right: 0;
        }

        ul.nav .active a {
            font-weight: bold;
        }

        ul.nav .res a {
            color: #72A84A;
            font-weight: bold;
        }
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

    @media screen and (min-width: 550px){
        ul.featured-cabins {
            width: 90%;
            display: grid;
            grid-template-columns: repeat(3,auto);
            grid-gap: 2em;
        }
    }

    @media screen and (min-width: 900px){
        padding: 8em 4em;

        .flex {
            display: flex;
        }
        .main-copy {
            width: 40%;
        }
        
        p.subtitle {
            margin: 0 0 1em;
            padding: 0;
        }
        
        h1 {
            font-size: 3em;
            margin-top: 0;
        }
        
        ul.featured-cabins {
            width: 70%;
        }
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

    @media screen and (min-width: 550px){
        ul.features {
            width: 90%;
            display: grid;
            grid-template-columns: repeat(3,auto);
            grid-gap: 2em;
        }
    }
`
export const LastContainer = styled(Wrapper)`
    position: relative;

    .fern {
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: 1;
        width: 80%;
        opacity: .1;
    }

    .main-quote {
        font-family: 'Playfair Display', serif;
        font-size: 2.2em;
        font-style: italic;
        margin-bottom: .5em;
    }

    .main-cite {
        margin-bottom: 3em;
        display: block;
    }

    p {
        font-size: .9em;
        line-height: 1.8;
    }
    .testimonials {
        margin: 0 auto;
    }
    .testimonials li {
        display: flex;
        margin: 2em;
    }
    .testimonials img {
        width: 150px;
        height: 150px;
        border-radius: 2em;
    }
    .test-desc {
        font-family: 'Playfair Display', serif;
        font-style: italic;
        padding: 1em;
    }
    .test-left p {
        margin: 0;
    }

    @media screen and (min-width: 550px){
        .testimonials li {
            display: block;
            margin: 5em 0;
        }

        ul.testimonials {
            width: 90%;
            display: grid;
            grid-template-columns: repeat(3,auto);
            grid-gap: 1em;
        }
    }

    @media screen and (min-width: 900px) {
        padding: 0 4em;

        .main-quote {
            font-size: 3em;
            text-align: center;
        }
        
        .main-cite {
            font-size: 1.5em;
            text-align: center;
        }

        .fern {
            width: 40%;
        }
    }
`
export const SubHero = styled.div`

`