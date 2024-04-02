import styled from "styled-components";

export const Footer = styled.div`
    background-color: rgb(18, 42, 87);
    height: 70px;
    display: flex;
    align-items: center; 
    
    div{
        display: flex;
        max-width: 992px;
        min-width: 320px;
        margin: auto;
        justify-content: space-between;       
        width: 992px;
        color: rgb(255, 255, 255);
        vertical-align: inherit;
    }
    p{       
        font-size: 1.4rem;       
    }
`