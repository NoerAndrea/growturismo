import styled from "styled-components";

export const Header = styled.div`
    background-color: rgb(18, 42, 87);
    height: 120px;
    display: flex;
    align-items: center; 
    
    div{
        display: flex;
        max-width: 992px;
        min-width: 320px;
        margin: auto;
        justify-content: space-between;       
        width: 992px;
        flex-wrap: wrap;
        gap: 10px;
    }
    h1{  
        color: rgb(255, 255, 255);     
        font-size: 3.2rem;
		font-weight: 400;      
    }
    a{
        text-decoration: none;
        color: rgb(255, 255, 255);
    }
`