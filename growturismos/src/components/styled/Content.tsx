import styled from "styled-components";

interface ContentProps {
    minHeight?: string;
    minWidth?: string;
}

export const Content = styled.div<ContentProps>`
    display: flex;
    max-width: 992px;
    min-width: 320px;
    margin: auto;
    height: calc(-190px + 100vh);
    align-items: center;
    justify-content: space-around; 
       
    div{
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 5px;
        min-width: ${(props) => props.minWidth};
        min-height: ${(props) => props.minHeight};        
    }
    h1{
        color: rgb(18, 42, 87);
        font-size: 4.2rem;
    }
    h2{
        color: rgb(18, 42, 87);
        font-size: 3.6rem;
    }
    p{
        font-size: 1.5rem;
    }
    label{
        display: block;
        font-size: 1.2rem;
        margin-bottom: 4px;
        min-width: 420px;
        margin-top: 8px;
    }
    input{
        padding: 8px;
        border-radius: 12px;
        width: 100%;
        border: 2px solid rgb(18, 42, 87);
        min-width: 420px;
    }
   
`