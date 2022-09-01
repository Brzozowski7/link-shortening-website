import React from "react";
import logo from "../images/logo-white.svg";
import styled from "styled-components";
import { pallete } from "../misc/pallete";
import { menuItems } from "../misc/menuItems";
export default function Footer() {
  return (
    <FooterContainer>
      <LogoContainer width="200px">
        <img src={logo} alt="logo" />
      </LogoContainer>
      <Menu>
        {menuItems.map((item) => {
          return (
            <MenuElement>
              <p key={item.name}>{item.name}</p>
              <List>
                {item.items.map((option) => {
                  return <li key={option}>{option}</li>;
                })}
              </List>
            </MenuElement>
          );
        })}
      </Menu>
    </FooterContainer>
  );
}
const FooterContainer = styled.footer`
  background-color: ${pallete.veryDarkViolet};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  color: white;
  padding: 3rem;
`;
const Menu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  text-align: center;
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
