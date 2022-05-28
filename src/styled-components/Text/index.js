import styled from "styled-components";
import Colors from "../../constants/Colors";
import Fonts from "../../constants/Fonts";

export const Text = styled.span`
  /* default black */
  color: ${(props) => props.color || Colors.black};
  /* default 16px */
  font-size: ${(props) => props.size || 16}px;
  /* default left */
  text-align: ${(props) => props.align || "left"};
  ${({uppercase}) => {
    switch(true) {
      case uppercase: {
        return { textTransform: 'uppercase'}
      }
    }
  }}
  ${({
    black,
    blackItalic,
    bold,
    boldItalic,
    heavy,
    heavyItalic,
    light,
    lightItalic,
    medium,
    mediumItalic,
    regular,
    regularItalic,
    semi,
    semiItalic,
    thin,
    thinItalic,
    extraLight,
    extraLightItalic,
  }) => {
    switch (true) {
      case black: {
        return Fonts.type.black;
      }
      case blackItalic: {
        return Fonts.type.blackItalic;
      }
      case bold: {
        return Fonts.type.bold;
      }
      case boldItalic: {
        return Fonts.type.boldItalic;
      }
      case heavy: {
        return Fonts.type.extraBold;
      }
      case heavyItalic: {
        return Fonts.type.extraBoldItalic;
      }
      case light: {
        return Fonts.type.light;
      }
      case lightItalic: {
        return Fonts.type.lightItalic;
      }
      case medium: {
        return Fonts.type.medium;
      }
      case mediumItalic: {
        return Fonts.type.mediumItalic;
      }
      case regular: {
        return Fonts.type.regular;
      }
      case regularItalic: {
        return Fonts.type.regularItalic;
      }
      case semi: {
        return Fonts.type.semiBold;
      }
      case semiItalic: {
        return Fonts.type.semiBoldItalic;
      }
      case thin: {
        return Fonts.type.thin;
      }
      case thinItalic: {
        return Fonts.type.thinItalic;
      }
      case extraLight: {
        return Fonts.type.extraLight;
      }
      case extraLightItalic: {
        return Fonts.type.extraLightItalic;
      }
      default: {
        return Fonts.type.regular;
      }
    }
  }}
  ${({ h1, h2, h3, h4, h5, h6 }) => {
    switch (true) {
      case h1: {
        return { fontSize: `${30}px` };
      }
      case h2: {
        return { fontSize: `${24}px` };
      }
      case h3: {
        return { fontSize: `${20}px` };
      }
      case h4: {
        return { fontSize: `${16}px` };
      }
      case h5: {
        return { fontSize: `${14}px` };
      }
      case h6: {
        return { fontSize: `${13}px` };
      }
    }
  }}
  ${({ hero, title1, title2, title3, body, button, header }) => {
    switch (true) {
      case hero: {
        return {
          fontWeight: '',
          fontSize: `80px`,
          lineHeight: `80px`,
        };
      }
      case title1: {
        return {
          fontWeight: '',
          fontSize: `28px`,

        };
      }
      case title2: {
        return {
          fontWeight: '',
          fontSize: `${24}px`,
          lineHeight: `${24+6}px`,
        };
      }
      case title3: {
        return {
          fontWeight: '',
          fontSize: `${16}px`,
        };
      }
      case body: {
        return {
          fontWeight: '',
          fontSize: `${16}px`,
          lineHeight: `${16+8}px`
        };
      }
      case button: {
        return {
          fontWeight: '',
          fontSize: `${15}px`,
        };
      }
      case header: {
        return {
          fontWeight: '',
          fontSize: `${12}px`,
          lineHeight: `${12*2}px`,
        };
      }
    }
  }}
`;