import styled from "styled-components";

export const StyledLogo = styled.a`
    color: #C500FF;
    font-weight: bold;
    font-size: 1.2em;
`
export const StyledImg = styled.img`
    width: 100%;
    position: absolute;
    z-index: -1;

    @media (min-width: 600px) {
        clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
    }

    @media (min-width: 1000px) {
         top: 0;
         right: 0;
         width: 50%;
         clip-path: none;
     }
`
export const StyledHeader = styled.header`
    padding: 1em;

    @media (min-width: 390px) {
        display: flex;
        justify-content: space-between;
    }
`

export const StyledNav = styled.nav`
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
   
        display: flex;
        margin-top: 1em;
    }
    
    li {
        margin-right: .5em;
    }
    
    li a {
        color: black;
        font-weight: bold;
        padding: .3em .7em;
        background-color: #E6E6E6;
        border-radius: 1em;
    }

    @media (min-width: 390px) {
        ul {
            margin-top: 0.2em;
        }
        ul li:nth-of-type(3) {
            margin-right: 0;
        }
    }

    @media (min-width: 1000px) {
        ul li a {
            background: none;
        }
    }
`
export const StyledHeroLeft = styled.div`
    padding: 1em;
    text-align: center;

    h1 {
        font-size: 2.5em;
        width: 80%;
        margin: 1.5em auto 0;
    }
    
    p {
        font-size: 1.2em;
        width: 80%;
        margin: 1em auto;
    }

    a {
        color: white;
        background: #C500FF;
        padding: .8em 1.5em;
        border-radius: 2em;
        font-weight: bold;
        margin: 1em 0 3em;
        display: inline-block;
    }

    @media (min-width: 1000px) {
        text-align: left;
        width: 30%;
        margin-left: 4em;

        h1 {
            font-size: 3em;
        }
        
        h1, p {
            width: 100%;
        }
    }
`
export const StyledSection = styled.section`
    padding: 1em;

    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        margin-top: 3em;
    }
    
    ul li {
        background: white;
        padding: 2em;
        margin-bottom: 1em;
        text-align: center;
        box-shadow: 10px 10px 18px 0px rgba(0,0,0,.09);
    }
    
    blockquote, blockquote p {
        margin: 0;
    }

    footer {
        font-weight: bold;
        display: block;
        margin-top: 1em;
    }

    blockquote p {
        line-height: 1.4em;
    }
    
    @media (min-width: 600px) {
        
        ul {
            display: grid;
            grid-template-columns: repeat(2,auto);
            grid-template-rows: repeat(2,auto);
            grid-gap: 1em;
        }
        ul li {
            margin: 0;
        }
        
        ul li:nth-of-type(3) {
            grid-column: span 2;
        }
    }

    @media (min-width: 1000px) {
        padding: 2em;
        h1 {
            font-size: 3rem;
        }

        ul {
            display: flex;
        }

        ul li {
            margin-right: 1em;
        }

        ul li:nth-of-type(3) {
            margin-right: 0;
        }
    }
`