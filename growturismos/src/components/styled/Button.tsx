import styled from "styled-components";

interface ButtonProps {
    width: string;
	padding: string;
    backgroundColor: string;
    color: string;
}

export const Button = styled.button<ButtonProps>`
    background-color: ${(props) => props.backgroundColor};
    color: ${(props) => props.color};
    font-weight: 600;
    border-radius: 40px;
    border: 2px solid rgb(18, 42, 87);
    margin-top: 10px;
    cursor: pointer;
    transition: all 0.2s ease 0s;
    width: ${(props) => props.width};
    padding: ${(props) => props.padding};
    padding-top: 20px;
`