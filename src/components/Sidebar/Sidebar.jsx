import React from "react";
import Colors from "../../constants/Colors";
import {
  SbContainer,
  SbHeader,
  SbBody,
  SbFooter,
  MenuList,
  MenuTitle,
  MenuItem,
  Notification,
  SbLogo,
  FooterBox,
  BoxHeader,
  BoxBody,
  BoxFooter,
  Link,
} from "../../styled-components/Sidebar";
import { Text } from "../../styled-components/Text";
import Icon from "../../styled-components/Icon/Icon";
import logo from "../../assets/images/logo-dashboard.png";
import dashboardIcon from "../../assets/images/icons/chart-fill.svg";
import inboxIcon from "../../assets/images/icons/chat.svg";
import accountIcon from "../../assets/images/icons/user-box.svg";
import calendarIcon from "../../assets/images/icons/calendar.svg";
import searchIcon from "../../assets/images/icons/search-alt.svg";
import chartIcon from "../../assets/images/icons/chart-alt.svg";
import folderIcon from "../../assets/images/icons/folder-alt.svg";
import settingsIcon from "../../assets/images/icons/settings.svg";
import questionIcon from "../../assets/images/icons/question-mark.svg";
import whatsAppIcon from "../../assets/images/social/whatsapp.svg";
import IconButton from "../../styled-components/IconButton/IconButton";
import { Button } from "../../styled-components/Button";

const Sidebar = () => {
  return (
    <SbContainer>
      <SbHeader>
        <SbLogo src={logo} alt="logo" />
        <Text
          align="center"
          size={20}
          bold
          color={Colors.white}
          logo
        >{` Jappadmin`}</Text>
      </SbHeader>
      <SbBody>
        <MenuList>
          <MenuTitle>
            <Text
              uppercase
              color={Colors.lightBlue}
              size={12}
            >{`Menu principal`}</Text>
          </MenuTitle>
          <MenuItem>
            <Icon source={dashboardIcon} width={24} height={24} isLeft /> Dashboard
          </MenuItem>
          <MenuItem>
            <Icon source={inboxIcon} width={24} height={24} isLeft /> Inbox
            <Notification><Text bold size={14} color={Colors.white}>3</Text></Notification>
          </MenuItem>
          <MenuTitle>
            <Text
              uppercase
              color={Colors.lightBlue}
              size={12}
            >{`Espacio de trabajo`}</Text>
          </MenuTitle>
          <MenuItem>
            <Icon source={accountIcon} width={24} height={24} isLeft />
            Accounts
          </MenuItem>
          <MenuItem>
            <Icon source={calendarIcon} width={24} height={24} isLeft /> Schedule Post
          </MenuItem>
          <MenuItem>
            <Icon source={chartIcon} width={24} height={24} isLeft />
            Analytics
          </MenuItem>
          <MenuTitle>
            <Text
              uppercase
              color={Colors.lightBlue}
              size={12}
            >{`General`}</Text>
          </MenuTitle>
          <MenuItem>
            <Icon source={folderIcon} width={24} height={24} isLeft /> File & Folders
          </MenuItem>
          <MenuItem>
            <Icon source={settingsIcon} width={24} height={24} isLeft />
            Settings
          </MenuItem>
        </MenuList>
      </SbBody>
      <SbFooter>
        <FooterBox>
          <BoxHeader>
           <Icon source={questionIcon} width={24} height={24} />
          </BoxHeader> 
          <BoxBody>
            <Text regular size={14} color={Colors.white} align='center'>
              {`Necesitas `} <Text bold size={14} color={Colors.white} align='center'>{`ayuda?`}</Text>
            </Text>
          </BoxBody>
          <BoxFooter>
            <Link href='https://api.whatsapp.com/send?phone=51957525112&text=Necesito%20ayuda' target='_blank'>
              <Button medium hasHover hoverColor={Colors.whatsApp} borderColor={Colors.whatsApp}>
                <Text align='center' color={Colors.white} style={{display: 'flex', placeItems: 'center'}}> <Icon source={whatsAppIcon} width={40} height={40} isLeft/> Escríbenos</Text>
              </Button>
            </Link>
          </BoxFooter>
        </FooterBox>
      </SbFooter>
    </SbContainer>
  );
};

export default Sidebar;
