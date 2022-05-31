import styled from "styled-components";
import Colors from "../../constants/Colors";

export const CardContainer = styled.div`
    width: 620px;
    height: 319px;
    left: 851px;
    top: 581px;
    position: absolute;
    left: 20px;
    top: 20px;
    background: ${Colors.glassed};
    mix-blend-mode: normal;
    backdrop-filter: blur(100px);
    border-radius: 10px;

    @media(max-width: 1024px) {
        display: none;
    }
`;

export const CardTitle = styled.div`
    background: #20DC49;
    border-radius: 10px;
    width: 360px;
    height: 60px;
    margin-top: 42px;
    margin-left: 42px;
    padding: 17px;
    text-align: center;
    
`;

export const CardDescription = styled.div`
    margin-top: 15px;
    margin-left: 42px;
    margin-right: 85px;
    text-align: justify;
    text-justify: inter-word;
`;