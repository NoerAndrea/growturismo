import styled from "styled-components";

export const Nav = styled.nav`
    display: flex;
    width: 100%;
    max-width: 410px;
    justify-content: center;
    align-items: center;
    flex-grow: 1;

    ul{
        list-style: none;
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
    }
    li{
        margin: 8px;
    }
    a{
        color: rgba(204, 204, 204, 0.8);
        font-weight: normal;
        transition: all 0.2s ease 0s;
        font-size: 1.3rem;
        text-decoration: none;
    }
`