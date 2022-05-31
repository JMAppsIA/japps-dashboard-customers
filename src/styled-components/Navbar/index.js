import styled from "styled-components"
import Colors from "../../constants/Colors";

export const Container = styled.div`
    width: 100%;
    height: 90px;
    background-color: ${Colors.white};
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const LeftSide = styled.div`
    flex: 4;
    margin-left: 59px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const RightSide = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`;

export const NotificationBadge = styled.div`
    width: 15px;
    height: 15px;
    background-color: ${Colors.redA400};
    border-radius: 50%;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    font-weight: bold;
    position: absolute;
    top: -5px;
    right: -5px;
`;