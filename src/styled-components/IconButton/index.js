import styled from "styled-components";
import Colors from "../../constants/Colors";

export const Button = styled.button`
    position: absolute;
    right: 3px; 
    top: 3px;
    background: transparent;
    color: ${Colors.grey6};
    bottom: 3px;
    border: 0;
    outline: none;
    margin: 0;
    padding: 0 10px;
    border-radius: 100px;
    z-index: 2;

    @media (max-width: 535px) {
        right: -3px;
    }
`;