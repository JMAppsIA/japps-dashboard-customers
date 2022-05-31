import styled from "styled-components";

export const InputContainer = styled.div`
    position: relative;

    @media (max-width: 535px) {
        align-self: center;
    }

`;

export const Input = styled.input`
    ${({small, medium, large, extraLarge}) => {
        switch (true) {
            case small: {
            return {
                width: '126px',
                height: '44px',
            };
            }
            case medium: {
            return {
                width: '166px',
                height: '43px',
            };
            }
            case large: {
            return {
                width: '267px',
                height: '55px',
            };
            }
            case extraLarge: {
            return {
                width: '400px',
                height: '70px'
            };
            }
            default: {
            return {
                width: '400px',
                height: '70px',
            }
            }
        }
    }};

    background: #FFFFFF;
    border: 1px solid #D9D9D9;
    border-radius: 10px;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 12px;
    padding-bottom: 12px;
    font-weight: 400;
    font-size: 14px;

    @media (max-width: 535px) {
        width: 267px;
        height: 55px;
    }

    @media (max-width: 445px) {
        width: 267px;
        height: 55px;
    }
`;