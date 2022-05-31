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
  RememberContainer,
  ToggleContainer,
} from "../../styled-components/SignIn";
import { Text } from "../../styled-components/Text";
import { ClickableInfo } from "../../styled-components/Link";
import backgroundImage from "../../assets/images/sign-in-background.png";
import logoImage from "../../assets/images/logo.png";
import { Button } from "../../styled-components/Button";
import FacebookIcon from "../../assets/images/social/facebook.svg";
import GoogleIcon from "../../assets/images/social/google.svg";
import TextInput from "../../styled-components/Input/TextInput";
import Switch from "../../styled-components/Switch/Switch";
import Card from "../../styled-components/Card/Card";
import Colors from "../../constants/Colors";

function SignIn(props) {
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
              <ClickableInfo to='/register'>{`Registrate!`}</ClickableInfo>
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
                style={{ marginBottom: "28px" }}
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
              <ClickableInfo style={{paddingTop: 20}}>{`Olvidé mi contraseña`}</ClickableInfo>
            </RememberContainer>
            <Button transparent hasHover hoverTextColor={Colors.white}><Text regular align={'center'}>{`Ingresar`}</Text></Button>
          </form>
        </Body>
        <Footer>
          <Text light>
            {`No tienes una cuenta? `}
            <ClickableInfo to='/register'>{`Registrate!`}</ClickableInfo>
          </Text>
        </Footer>
      </LeftSide>
      <RightSide hasBackground background={backgroundImage}> 
        <Card glassed title={`👍 Mejores recursos, mejores soluciones`} description={`Creamos soluciones tecnológicas para los desafíos que enfrentan nuestros partners en su día a día.`}/>
      </RightSide>
    </Container>
  );
}

export default SignIn;
