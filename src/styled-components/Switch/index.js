import styled from "styled-components";
import Colors from "../../constants/Colors";

export const SwitchInput = styled.input`
    height: 0;
    width: 0;
    visibility: hidden;

    &:checked + label span {
        left: calc(100% - 2px);
        transform: translateX(-100%);
    }

    &:active span {
        width: 60px;
    }
`;

export const SwitchLabel = styled.label`
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    width: 50px;
    height: 25px;
    background: ${Colors.grey6};
    border-radius: 100px;
    position: relative;
    transition: background-color .2s;
`;

export const SwitchSpan = styled.span`
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: 22.5px;
    height: 22.5px;
    border-radius: 45px;
    transition: 0.2s;
    background: ${Colors.white};
    box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
`;