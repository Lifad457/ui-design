import styled from 'styled-components'

export const Wraper = styled.div`
    padding: .5em;
    text-align: center;

    input[type=text], select, textarea {
        width: 100%;
        padding: 1em;
        border-radius: .2em;
        border: 1px solid #ACACAC;
        color: #1B1820;
    }

    input[type=text]:focus, textarea:focus {
        outline: 3px solid #ACACAC;
    }
`
export const Progress = styled.ul`
    list-style: none;
    padding: 0 1em;
    display: flex;
    width: 300px;
    margin: 0 auto;
    justify-content: space-between;

    
    .circle {
        width: 3em;
        height: 3em;
        background: white;
        border-radius: 50%;
        margin: 0 auto .5em;
        display: grid;
        place-content: center;
        color: #797979;
        font-weight: bold;
    }

    .current .circle {
        background: #1A004E;
        color: white;
    }

    span {
        color: #797979;
        font-weight: bold;
    }

    .current span {
        color: #1A004E;
    }
`
export const Main = styled.main`
    background: white;
    padding: 1em;
    text-align: left;
    margin-top: 2em;
    margin-bottom: 2em;
    
`
export const LeftCol = styled.div`
    h2 {
        font-size: 1.3em;
        position: relative;
        margin-bottom: 1.5em;
    }

    h2:before {
        content: '';
        position: absolute;
        height: 5px;
        width: 30px;
        background: #8040FF;
        left: 0;
        top: -7px;
        border-radius: 1em;
    }

    label {
        display: block;
        font-weight: bold;
        margin-top: 1.5em;
        margin-bottom: .5em;
    }

    /* input[type=radio] + label {
        display:inline-block;
        margin: 0;
        margin-right: 3em;
        padding: .8em;
        cursor:pointer;
    } */
    
    input[type="radio"] {
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        display: inline-block;
        position: relative;
        border: 2px solid #C6C6C6;
        color: #666;
        top: 10px;
        height: 30px;
        width: 30px;
        border-radius: 50px;
        cursor: pointer;
        margin-right: 7px;
        outline: none;
    }

    input[type="radio"]:checked::before {
        content: '';
        position: absolute;
        top: 5px;
        left: 5px;
        background: #8040FF;
        width: 16px;
        height: 16px;
        border-radius: 50%;
    }

    .left-label {
        display: unset;
        font-weight: normal;
        margin-right: 2em;
    }

    .mt-extra {
        margin-top: 2em;
    }

    .cta {
        display: block;
        width: 100%;
        padding: 1em;
        text-align: center;
        text-decoration: none;
        color: white;
        background: #8040FF;
        margin-top: 1.5em;
        font-weight: bold;
        font-size: 1.2em;
        border-radius: .2em;
    }
`
export const RightCol = styled.div`
    margin-top: 2em;
    line-height: 1.5em;
    color: #1B1820;

    @media screen and (min-width: 650px) {
        margin: 0;
        margin-top: 5em;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }

    @media screen and (min-width: 900px) {
        margin-top: 6.3em;
    }
`
