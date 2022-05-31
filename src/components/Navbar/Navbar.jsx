import React from "react";
import Colors from "../../constants/Colors";
import { Button } from "../../styled-components/Button";
import Icon from "../../styled-components/Icon/Icon";
import { Container, LeftSide, RightSide, NotificationBadge } from "../../styled-components/Navbar";
import { Text } from "../../styled-components/Text";
import bellIcon from "../../assets/images/icons/bell.svg";
import avatarIcon from "../../assets/images/tom-avatar.png";
import Dropdown from "../../styled-components/Dropdown/Dropdown";

const Navbar = () => {
  
  return (
    <Container>
      <LeftSide>
        <Text bold size={32} align={`center`}>
          Panel de control
        </Text>
        <Button small transparent hasHover hoverColor={Colors.lightBlue02} borderColor={Colors.lightBlue02}>
          <Text semi size={16} align={`center`}>
            Ver Precios
          </Text>
        </Button>
      </LeftSide>
      <RightSide>
          <Button transparent extraSmall radius={100} backgroundColor={Colors.grey8}><Icon source={bellIcon} width={40} height={40}/>
          <NotificationBadge>2</NotificationBadge></Button>
          <Dropdown></Dropdown>
      </RightSide>
    </Container>
  );
};

export default Navbar;
