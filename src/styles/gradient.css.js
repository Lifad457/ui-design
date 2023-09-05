import styled  from "styled-components";

export const StyledContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));


`
export const StyledCard = styled.div`
    background: white;
    background: linear-gradient(145deg, rgba(255,255,255,1) 40%, rgba(239,213,255,1) 100%);
    margin: 1.5em;
    padding: 1.5em;
    border-radius: 1em;
    text-align: center;
    color: #15004C;
    position: relative;
    box-shadow: 0 2px 3px rgba(69,0,122,0.2);

    span {
        position: absolute;
        width: 60px;
        height: 60px;
        background: white;
        margin-top: -3em;
        border-radius: 50%;
        background: #E6C9FF;
        margin-left: auto; 
        margin-right: auto; 
        left: 0;
        right: 0;
    }

    p {
        margin-top: 2em;
        font-size: .9em;
        line-height: 1.5em;
    }

    a {
        font-weight: bold;
        text-decoration: none;
        display: block;
        margin-top: 1em;
    }
`