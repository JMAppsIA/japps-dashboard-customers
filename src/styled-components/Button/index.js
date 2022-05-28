import styled from "styled-components";
import Colors from "../../constants/Colors";

export const Button = styled.button`
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
          height: '57.75px'
        };
      }
      default: {
        return {
          width: '400px',
          height: '57.75px'
        }
      }
    }
  }}
  border-radius: 10px;
  border-style: none;
  box-sizing: border-box;
  cursor: pointer;
  display: inline-block;
  font-size: 14.85px;
  font-weight: 400;
  font-family: "Poppins", regular;
  font-style: 'normal';
  line-height: 12px;
  list-style: none;
  margin: 0;
  outline: none;
  padding: 10px 16px;
  text-align: center;
  text-decoration: none;
  transition: color 100ms;
  vertical-align: baseline;

  ${({ primary, secondary, success, warning, danger, info, social, transparent }) => {
    switch (true) {
      case primary: {
        return { backgroundColor: Colors.primary, color: "#000000" };
      }
      case secondary: {
        return { backgroundColor: Colors.secondary, color: "#00a8ff" };
      }
      case success: {
        return { backgroundColor: Colors.success, color: "#fff" };
      }
      case warning: {
        return { backgroundColor: Colors.warning, color: "#fff" };
      }
      case danger: {
        return { backgroundColor: Colors.danger, color: "#fff" };
      }
      case info: {
        return { backgroundColor: Colors.info, color: "#fff" };
      }
      case social: {
        return { backgroundColor: Colors.white, color: Colors.black };
      }
      case transparent: {
        return { backgroundColor: "transparent", color: "#00a8ff" };
      }
      default: {
        return { backgroundColor: Colors.default, color: "#fff" };
      }
    }
  }}
`;
