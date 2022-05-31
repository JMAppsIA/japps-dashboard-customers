import styled from "styled-components";
import Colors from "../../constants/Colors";

export const Button = styled.button`
  display: flex;
  ${({ extraSmall, small, medium, large, extraLarge }) => {
    switch (true) {
      case extraSmall: {
        return {
          width: "40px",
          height: "40px",
        }
      }
      case small: {
        return {
          width: "126px",
          height: "44px",
        };
      }
      case medium: {
        return {
          width: "166px",
          height: "43px",
        };
      }
      case large: {
        return {
          width: "267px",
          height: "55px",
        };
      }
      case extraLarge: {
        return {
          width: "400px",
          height: "57.75px",
        };
      }
      default: {
        return {
          width: "400px",
          height: "57.75px",
        };
      }
    }
  }}
  border-radius: ${(props) => props.radius || `10`}px;
  background-color: ${(props) => props.backgroundColor || Colors.transparent};
  ${({hasPadding}) => {
    switch(true) {
      case hasPadding: {
        return `
          padding: 10px 16px;
        `;
      }
      default: {}
    }
  }};
  position: relative;
  cursor: pointer;
  margin: 0;
  outline: none;
  text-decoration: none;
  transition: 0.3s;
  vertical-align: baseline;
  align-items: center;
  justify-content: center;
  ${({ hasHover, hoverColor, hoverTextColor }) => {
    switch (true) {
      case hasHover: {
        return `
          &:hover {
            background-color: ${hoverColor || Colors.primary};
            border: 1px solid ${hoverColor || Colors.primary};
            color: ${hoverTextColor || Colors.black};
          };
        `;
      }
      default: {
        return ``;
      }
    }
  }}

  ${({
    primary,
    secondary,
    success,
    warning,
    danger,
    info,
    social,
    transparent,
    borderColor,
    textColor
  }) => {
    switch (true) {
      case primary: {
        return {
          backgroundColor: Colors.primary,
          border: `1px solid ${borderColor || Colors.primary}`,
          color: Colors.black,
        };
      }
      case secondary: {
        return {
          backgroundColor: Colors.secondary,
          border: `1px solid ${borderColor || Colors.secondary}`,
          color: "#00a8ff",
        };
      }
      case success: {
        return {
          backgroundColor: Colors.success,
          border: `1px solid ${borderColor || Colors.success}`,
          color: `${textColor || '#fff'}`,
        };
      }
      case warning: {
        return {
          backgroundColor: Colors.warning,
          border: `1px solid ${borderColor || Colors.warning}`,
          color: `${textColor || '#fff'}`,
        };
      }
      case danger: {
        return {
          backgroundColor: Colors.danger,
          border: `1px solid ${borderColor || Colors.danger}`,
          color: `${textColor || '#fff'}`,
        };
      }
      case info: {
        return {
          backgroundColor: Colors.info,
          border: `1px solid ${borderColor || Colors.info}`,
          color: `${textColor || '#fff'}`,
        };
      }
      case social: {
        return {
          backgroundColor: Colors.white,
          color: Colors.grey7,
          border: `1px solid ${borderColor || Colors.grey7}`,
        };
      }
      case transparent: {
        return {
          backgroundColor: "transparent",
          color: Colors.grey7,
          border: `1px solid ${borderColor || Colors.transparent}`,
        };
      }
      default: {
        return {
          color: Colors.grey7,
          border: `1px solid ${borderColor || Colors.grey7}`,
        };
      }
    }
  }}
`;
