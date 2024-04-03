import styled from "styled-components";

interface CardProps{
    border?: string;
}

export const Card = styled.div<CardProps>`
    width: 240px;
    height: 320px;
    padding: 24px;    
    border: ${(props) => props.border};     
    
    div{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        gap: 12px;
    }
    h1{
        color: rgb(18, 42, 87);
        font-size: 2.4rem;
    }
    hr{
        border: none;
        width: 80%;
        height: 3px;
        background-color: rgb(18, 42, 87);
    }
    h2{
        color: rgb(18, 42, 87);
        font-size: 1.8rem;
    }
    ul{
        margin: 4px 0px;
    }
    li{
        font-size: 1.5rem;
        list-style-type: square;
        list-style-position: inside;
    }
`