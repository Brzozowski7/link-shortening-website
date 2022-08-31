import React, { useState } from "react";
import styled from "styled-components";
import logo from "../images/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { MenuItems } from "./MenuItems";
import { pallete } from "./pallete";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);

  return (
    <Header>
      <LogoContainer width="200px">
        <img src={logo} alt="logo" />
      </LogoContainer>
      <NavbarContainer open={isActive}>
        <Menu>
          {MenuItems.map((item) => {
            return (
              <li key={item.name}>
                <a href={item.href}>{item.name}</a>
              </li>
            );
          })}
        </Menu>
        <AuthOptions>
          <Login>Login</Login>
          <Register>Sign up</Register>
        </AuthOptions>
      </NavbarContainer>
      <MenuIconContainer onClick={() => setIsActive((prev) => !prev)}>
        {isActive ? (
          <FontAwesomeIcon icon={faX} size="2xl" />
        ) : (
          <FontAwesomeIcon icon={faBars} size="2xl" />
        )}
      </MenuIconContainer>
    </Header>
  );
}

const Header = styled.header`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 3rem;
  align-items: center;
  padding: 3rem 5rem;
  justify-content: space-between;
  @media screen and (max-width: 960px) {
    padding: 2rem 2rem;
  }
`;
const LogoContainer = styled.div`
  img {
    vertical-align: middle;
  }
`;
const NavbarContainer = styled.nav`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  @media screen and (max-width: 960px) {
    display: ${(props) => (props.open ? "flex" : "none")};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 4rem;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    height: 90%;
    width: 90vw;
    background-color: ${pallete.darkViolet};
    border-radius: 1rem;
    padding: 4rem 0;
    font-size: 1.5rem;
    font-weight: 700;
  }
`;
const Menu = styled.ul`
  display: flex;
  flex-direction: row;
  li {
    list-style-type: none;
    padding: 0.5rem 2rem;
  }
  a {
    text-decoration: none;
    color: ${pallete.grayishViolet};
  }
  a:hover {
    color: ${pallete.darkViolet};
  }
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 60%;
    width: 100%;
    border-bottom: 1px gray solid;
    li {
      list-style-type: none;
    }
    a {
      text-decoration: none;
      color: white;
    }
    a:hover {
      color: white;
    }
  }
`;
const AuthOptions = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  @media screen and (max-width: 960px) {
    display: flex;
    height: 40%;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
`;
const Login = styled.div`
  padding: 0.5rem;
  color: ${pallete.grayishViolet};
  @media screen and (max-width: 960px) {
    color: white;
  }
`;
const Register = styled.div`
  color: white;
  background-color: ${pallete.cyan};
  padding: 0.5rem;
  border-radius: 1rem;
  @media screen and (max-width: 960px) {
    width: 30vw;
    text-align: center;
  }
`;
const MenuIconContainer = styled.div`
  display: none;
  @media screen and (max-width: 960px) {
    display: inline-block;
  }
`;
