import styled from "styled-components"
import Colors from "../../constants/Colors";

export const SbContainer = styled.div`
    flex: 1;
    background-color: #081A51;
    min-height: 100vh;
`;

export const SbHeader = styled.div`
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 61px;
    margin-top: 24px;
`;

export const SbLogo = styled.img`
    width: 40px;
    height: 40px;
`;

export const MenuList = styled.ul`
    margin-left: 30px;
    list-style: none;
    padding: 0;
`;

export const MenuTitle = styled.div`
    margin-top: 32px;
    margin-bottom: 9px;
`;

export const MenuItem = styled.li`
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: ${Colors.white};
    padding-left: 10px;
    width: 260px;
    height: 56px;
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    transition: 0.3s;
    border-radius: 3px;

    &:hover {
        background-color: ${Colors.lightBlue02};
    }
`;

export const Notification = styled.div`
    width: 24px;
    height: 25.41px;
    background-color: ${Colors.redA400};
    border-radius: 20%;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 20px;
`;

export const SbBody = styled.div``;

export const SbFooter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

export const FooterBox = styled.div`
    width: 250px;
    background: ${Colors.lightBlue02};
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20%;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-bottom: 10px;
`;

export const BoxHeader = styled.div`
    justify-content: center;
    justify-items: center;
    align-items: center;
    border-radius: 100px;
    width: 40px;
    height: 40px;
    background-color: #AABBFA;
    display: flex;
`;

export const BoxBody = styled.div`
    margin-top: 10px;
    margin-bottom: 19px;
`;

export const BoxFooter = styled.div`
`;

export const Link = styled.a``;