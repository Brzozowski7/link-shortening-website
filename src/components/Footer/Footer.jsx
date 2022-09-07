import {
  FooterContainer,
  LogoContainer,
  Menu,
  MenuElement,
  List,
  SocialMediaContainer,
} from "./Footer.styles";
import logo from "../../images/logo-white.svg";
import { menuItems } from "../../misc/menuItems";
import { socialMediaList } from "../../misc/socialMedia";
export default function Footer() {
  return (
    <FooterContainer>
      <LogoContainer>
        <img src={logo} alt="logo" />
      </LogoContainer>
      <Menu>
        {menuItems.map((item, index) => {
          return (
            <MenuElement key={index}>
              <p key={index}>{item.name}</p>
              <List>
                {item.items.map((option, id) => {
                  return <li key={id}>{option}</li>;
                })}
              </List>
            </MenuElement>
          );
        })}
      </Menu>
      <SocialMediaContainer>
        {socialMediaList.map((item) => {
          return (
            <img
              src={item.icon}
              alt={item.alt}
              key={item.name}
              loading="lazy"
            />
          );
        })}
      </SocialMediaContainer>
    </FooterContainer>
  );
}
