import React from "react";
import logo from "../images/logo-white.svg";
import styled from "styled-components";
import { pallete } from "../misc/pallete";
import { menuItems } from "../misc/menuItems";
import fbIcon from "../images/icon-facebook.svg";
import igIcon from "../images/icon-instagram.svg";
import pinIcon from "../images/icon-pinterest.svg";
import twIcon from "../images/icon-twitter.svg";
export default function Footer() {
  return (
    <FooterContainer>
      <LogoContainer width="200px">
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
        <img src={fbIcon} alt="fbIcon" loading="lazy"/>
        <img src={igIcon} alt="igIcon" loading="lazy"/>
        <img src={pinIcon} alt="pinIcon" loading="lazy"/>
        <img src={twIcon} alt="twIcon" loading="lazy"/>
      </SocialMediaContainer>
    </FooterContainer>
  );
}
const FooterContainer = styled.footer`
  display: flex;
  flex-direction: row;
  padding: 3rem 5rem;
  background-color: ${pallete.veryDarkViolet};
  justify-content: space-between;
  align-items: flex-start;
  color: white;
  @media screen and (max-width: 960px) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding: 3rem;
  }
`;
const Menu = styled.div`
  width: 40%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  @media screen and (max-width: 960px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
`;

const LogoContainer = styled.div`
  img {
    vertical-align: middle;
  }
`;
const MenuElement = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: center;
`;
const List = styled.ul`
  color: ${pallete.grayishViolet};
  list-style-type: none;
  li:hover {
    cursor: pointer;
    color: ${pallete.white};
  }
`;
const SocialMediaContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  @media screen and (max-width: 960px) {
    width: 100%;
    justify-content: space-around;
  }
`;
