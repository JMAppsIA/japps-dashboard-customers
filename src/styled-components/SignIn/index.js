import styled from "styled-components";
export const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;

  @media (min-width: 900px) {
    padding-left: 0px;
    padding-right: 0px;
    height: auto;
  };

  /* @media (min-width: 0px) {
    padding-left: 40px;
    padding-right: 40px;
    height: auto;
  }; */
`;

export const LeftSide = styled.div`
  box-sizing: border-box;
  margin: 0;
  flex-direction: row;
  flex-basis: 100%;
  flex-grow: 0;
  max-width: 100%;
  position: relative;
  padding-top: 49px;
  padding-left: 68.55px;
  padding-right: 54px;

  @media (min-width: 900px) {
    flex-basis: 50%;
    flex-grow: 0;
    max-width: 50%;
    background-color: #F0F2F5;
    height: 100vh;
  }
`;

export const RightSide = styled.div`
  box-sizing: border-box;
  margin: 0;
  flex-direction: row;
  flex-basis: 100%;
  flex-grow: 0;
  max-width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 900px) {
    flex-basis: 50%;
    flex-grow: 0;
    max-width: 50%;
  }

  @media (min-width: 900px) {
    flex-direction: row;
    height: 100vh;
  }

  ${({ hasBackground, background }) => {
      switch(true) {
          case hasBackground: {
              return `
                background-repeat: no-repeat;
                background-size: cover;
                background-image: url(${background});
                background-position: left;
              `
          }
      }
  }}
`;

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media (max-width: 649px) {
      display: flex;
      flex-direction: column;
  };
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (max-width: 649px) {
    display: flex;
    flex-direction: column;
  };
`;

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (max-width: 649px) {
    display: none;
  };
`;

export const Logo = styled.img`
    width: 34.85px;
    height: 34.87px;
    margin-right: 12.59px;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 84.84px;
  margin-left: 198px;
  margin-right: 223px;
  align-items: center;

  @media (max-width: 649px) {
    margin-top: 50px;
    margin-left: 0px;
    margin-right: 0px;
  }
`;

export const Footer = styled.div`

  display: none;

  @media (max-width: 649px) {
    display: flex;
    flex-direction: column;
    text-align-last: center;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 38px;
  justify-content: center;
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 35px;
`;

export const RememberContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 19px;
  align-items: center;
  justify-content: space-between;
`;

export const ToggleContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 19px;
  align-items: center;
`;
