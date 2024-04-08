import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Montserrat, sans-serif;
    }
//alteração para fundo das páginas
    body{
        background-color: ${(props)=> props.theme.backgroundColor};
        color: ${(props)=> props.theme.fontColor};
    }
`