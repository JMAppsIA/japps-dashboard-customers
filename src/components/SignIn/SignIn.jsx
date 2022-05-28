import React, { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";

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
  RememberContainer,
  ToggleContainer,
} from "../../styled-components/SignIn";
import { Text } from "../../styled-components/Text";
import { Link } from "../../styled-components/Link";
import backgroundImage from "../../assets/images/sign-in-background.png";
import logoImage from "../../assets/images/logo.png";
import { Button } from "../../styled-components/Button";
import FacebookIcon from "../../assets/images/social/facebook.svg";
import GoogleIcon from "../../assets/images/social/google.svg";
import TextInput from "../../styled-components/Input/TextInput";
import Switch from "../../styled-components/Switch/Switch";

function SignIn() {
  const [passwordShown, setPasswordShown] = React.useState(false);
  const [remembered, setRemembered] = useState(false);

  const togglePassword = (event) => {
    event.preventDefault();
    setPasswordShown(!passwordShown);
  };

  return (
    <Container>
      <LeftSide>
        <Header>
          <LogoContainer>
            <Logo src={logoImage} alt={`Your-logo`} />
            <Text regular>{`Your logo`}</Text>
          </LogoContainer>
          <SignUpContainer>
            <Text light>
              {`No tienes una cuenta? `}
              <Link>{`Registrate!`}</Link>
            </Text>
          </SignUpContainer>
        </Header>
        <Body>
          <Text semi h1 align="center">
            {`Bienvenido`}
          </Text>
          <Text
            regular
            h4
            align="center"
            style={{ marginTop: "3px" }}
          >{`Ingresa tus datos y empieza administrar tu negocio`}</Text>
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
                style={{ marginBottom: "38px" }}
                placeholder={`Email`}
              />
              <TextInput
                type={passwordShown ? `text` : `password`}
                placeholder={`Contraseña`}
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
            <RememberContainer>
              <ToggleContainer>
                <Switch
                  switchId={`remember`}
                  isOn={remembered}
                  handleToggle={() => setRemembered(!remembered)}
                />
                <Text regular h6 align={`center`} style={{marginLeft: 11.72}}>{`Recordarme`}</Text>
              </ToggleContainer>
              <Link style={{paddingTop: 20}}>{`Olvidé mi contraseña`}</Link>
            </RememberContainer>
          </form>
        </Body>
        <Footer>
          <Text light>
            {`No tienes una cuenta? `}
            <Link>{`Registrate!`}</Link>
          </Text>
        </Footer>
      </LeftSide>
      <RightSide hasBackground background={backgroundImage}></RightSide>
    </Container>
  );
}

export default SignIn;
