import React, { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import {
  Container,
  LeftSide,
  Header,
  Body,
  Footer,
  RightSide,
  Logo,
  LogoContainer,
  SignUpContainer,
  ButtonsContainer,
  InputsContainer,
} from "../../styled-components/SignUp";
import { Text } from "../../styled-components/Text";
import { ClickableInfo } from "../../styled-components/Link";
import backgroundImage from "../../assets/images/sign-up-background.png";
import logoImage from "../../assets/images/logo.png";
import { Button } from "../../styled-components/Button";
import FacebookIcon from "../../assets/images/social/facebook.svg";
import GoogleIcon from "../../assets/images/social/google.svg";
import TextInput from "../../styled-components/Input/TextInput";

function SignUp(props) {
  const [passwordShown, setPasswordShown] = React.useState(false);
  const [confirmShown, setConfirmShown] = React.useState(false);
  const togglePassword = (event) => {
    event.preventDefault();
    setPasswordShown(!passwordShown);
  };

  const toggleConfirm = (event) => {
    event.preventDefault();
    setConfirmShown(!confirmShown);
  };

  return (
    <Container>
      <LeftSide hasBackground background={backgroundImage}></LeftSide>
      <RightSide>
      <Header>
          <LogoContainer>
            <Logo src={logoImage} alt={`Your-logo`} />
            <Text regular>{`Your logo`}</Text>
          </LogoContainer>
          <SignUpContainer>
            <Text light>
              {`Tienes una cuenta? `}
              <ClickableInfo to='/register'>{`Ingresa!`}</ClickableInfo>
            </Text>
          </SignUpContainer>
        </Header>
        <Body>
          <Text semi h1 align="center">
            {`Empecemos`}
          </Text>
          <Text
            regular
            h4
            align="center"
            style={{ marginTop: "3px" }}
          >{`Dejanos conocerte un poco`}</Text>
          <form>
            <ButtonsContainer>
              <Button social small>
                <svg width="26" height="26">
                  <image href={GoogleIcon} />
                </svg>
              </Button>
              <Button social small style={{ marginLeft: 14 }}>
                <svg width="26" height="26">
                  <image href={FacebookIcon} />
                </svg>
              </Button>
            </ButtonsContainer>
            <InputsContainer>
              <TextInput
                type="text"
                style={{ marginBottom: "20px" }}
                placeholder={`Como te llamas?`}
              />
              <TextInput
                type="text"
                style={{ marginBottom: "20px" }}
                placeholder={`Ingresa un correo electrónico`}
              />
              <TextInput
                type={passwordShown ? `text` : `password`}
                placeholder={`Confirma tu contraseña`}
                hasIconButton
                style={{ marginBottom: "20px" }}
                icon={
                  passwordShown ? (
                    <BsEyeSlash
                      style={{
                        width: "23.64px",
                        height: "23.64px",
                        marginBottom: "20px",
                      }}
                    />
                  ) : (
                    <BsEye
                      style={{
                        width: "23.64px",
                        height: "23.64px",
                        marginBottom: "20px",
                      }}
                    />
                  )
                }
                onClick={togglePassword}
              />
              <TextInput
                type={confirmShown ? `text` : `password`}
                placeholder={`Confirma tu contraseña`}
                hasIconButton
                icon={
                  confirmShown ? (
                    <BsEyeSlash
                      style={{ width: "23.64px", height: "23.64px" }}
                    />
                  ) : (
                    <BsEye style={{ width: "23.64px", height: "23.64px" }} />
                  )
                }
                onClick={toggleConfirm}
              />
            </InputsContainer>
            <Button
              primary
              hasHover
              style={{ marginTop: 28 }}
            >{`Registrarme`}</Button>
          </form>
        </Body>
        <Footer>
          <Text light>
            {`No tienes una cuenta? `}
            <ClickableInfo to='/register'>{`Registrate!`}</ClickableInfo>
          </Text>
        </Footer>

      </RightSide>
    </Container>
  );
}

export default SignUp;



/**
 * 
 * <Container>
      <LeftSide hasBackground background={backgroundImage}></LeftSide>
      <RightSide>
        <Header>
          <LogoContainer>
            <Logo src={logoImage} alt={`Your-logo`} />
            <Text regular>{`Your logo`}</Text>
          </LogoContainer>
          <SignUpContainer>
            <Text light>
              {`tienes una cuenta? `}
              <ClickableInfo>{`Ingresa!`}</ClickableInfo>
            </Text>
          </SignUpContainer>
        </Header>
        <Body>
          <Text semi h1 align="center">
            {`Empecemos con tus datos`}
          </Text>
          <Text
            regular
            h4
            align="center"
            style={{ marginTop: "3px" }}
          >{`Dejanos conocerte un poco`}</Text>
          <form>
            <ButtonsContainer>
              <Button social small>
                <svg width="26" height="26">
                  <image href={GoogleIcon} />
                </svg>
              </Button>
              <Button social small style={{ marginLeft: 14 }}>
                <svg width="26" height="26">
                  <image href={FacebookIcon} />
                </svg>
              </Button>
            </ButtonsContainer>
            <InputsContainer>
              <TextInput
                type="text"
                style={{ marginBottom: "20px" }}
                placeholder={`Como te llamas?`}
              />
              <TextInput
                type="text"
                style={{ marginBottom: "20px" }}
                placeholder={`Ingresa un correo electrónico`}
              />
              <TextInput
                type={passwordShown ? `text` : `password`}
                placeholder={`Confirma tu contraseña`}
                hasIconButton
                style={{ marginBottom: "20px" }}
                icon={
                  passwordShown ? (
                    <BsEyeSlash
                      style={{
                        width: "23.64px",
                        height: "23.64px",
                        marginBottom: "20px",
                      }}
                    />
                  ) : (
                    <BsEye
                      style={{
                        width: "23.64px",
                        height: "23.64px",
                        marginBottom: "20px",
                      }}
                    />
                  )
                }
                onClick={togglePassword}
              />
              <TextInput
                type={passwordShown ? `text` : `password`}
                placeholder={`Confirma tu contraseña`}
                hasIconButton
                icon={
                  passwordShown ? (
                    <BsEyeSlash
                      style={{ width: "23.64px", height: "23.64px" }}
                    />
                  ) : (
                    <BsEye style={{ width: "23.64px", height: "23.64px" }} />
                  )
                }
                onClick={togglePassword}
              />
            </InputsContainer>
            <Button
              primary
              hasHover
              style={{ marginTop: 28 }}
            >{`Registrarme`}</Button>
          </form>
        </Body>
        <Footer>
          <Text light>
            {`Ya tienes una cuenta? `}
            <ClickableInfo>{`Ingresa!`}</ClickableInfo>
          </Text>
        </Footer>
      </RightSide>
    </Container>
 * 
 */
