import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import {
  Header,
  LogoContainer,
  NavbarContainer,
  Menu,
  AuthOptions,
  Login,
  MenuIconContainer,
} from "./Navbar.styles";
import Button from "../Button";
import { menuItems } from "../../misc/menuItems";
import { buttonSize } from "../Button/Button.const";
import logo from "../../images/logo.svg";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);

  return (
    <Header>
      <LogoContainer>
        <img src={logo} alt="logo" />
      </LogoContainer>
      <NavbarContainer open={isActive}>
        <Menu>
          {menuItems.map((item) => {
            return (
              <li key={item.name}>
                <a href={item.href}>{item.name}</a>
              </li>
            );
          })}
        </Menu>
        <AuthOptions>
          <Login>Login</Login>
          <Button size={buttonSize.small} text={"Register"}></Button>
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
