import styled from "styled-components"

export const Wrapper = styled.div`
    padding: .5em;
    margin-top: 4em;
    position: relative;

    .phone {
        position: absolute;
        top: 1em;
        left: 0;
        right: 0;
        margin: auto;
        width: 250px;
    }
    .left {
        display: grid;
        place-content: center;
    }
    .right {
        margin-top: 12em;
    }

    @media (min-width: 850px) {
        display: flex;
        padding: 2em;
        width: 90%;
        margin: 0 auto;

        .phone {
            left: 10%;
            top: 5em;
            margin: unset;
        }
        .left {
            width: 75%;
            padding: 3em;
        }
        .right ul {
            width: 100%;
        }
        .right {
            margin-top: 0;
            padding: 3em;
        }
        .right ul li {
            display: grid;
            grid-template-columns: repeat(2,auto);
            align-items: center;
            grid-gap: .7em;
            background: #e8e8e8;
            padding: 1em;
            border-radius: .5em;
        }
    }
`
export const Col = styled.div`
    position: relative;

    h1, .quote {
        font-family: 'Playfair Display', serif;
    }
    ul {
        list-style: none;
        padding: 0;
        width: 80%;
        margin: 0 auto 2em;
    }
    li {
        margin-bottom: 2em;
    }
    li img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }
    h1 {
        width: 60%;
        margin: 0 auto 1.5em;
    }
    .cta {
        text-decoration: none;
        background: #1DB473;
        color: white;
        font-weight: bold;
        padding: 1em;
        border-radius: .3em;
    }
    .cta:hover {
        box-shadow: 3px 3px 3px #A3D293;
    }
    .inner-content {
        height: 50vh;
    }

    @media (min-width: 850px) {
        h1 {
            margin-left: 0;
            width: 100%;
        }
        li p {
            margin: 0;
        }
        .quote {
            font-weight: 300;
        }
        .auth {
            margin-top: 1em;
            font-size: .8em;
        }
    }
`