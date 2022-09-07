import { useState } from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
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
  LanguagesContainer,
} from "./Navbar.styles";
import Button from "../Button";
import { languages } from "../../misc/languagesList";
import { menuItems } from "../../misc/menuItems";
import { buttonSize } from "../Button/Button.const";
import logo from "../../images/logo.svg";

export default function Navbar({ setLanguage }) {
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
                <a href={item.href}>
                  <FormattedMessage id={item.id} defaultMessage={item.name} />
                </a>
              </li>
            );
          })}
        </Menu>
        <LanguagesContainer>
          {languages?.map((item) => {
            return (
              <img
                onClick={() => setLanguage(item.alt)}
                key={item.alt}
                src={item.src}
                alt={item.alt}
              />
            );
          })}
        </LanguagesContainer>
        <AuthOptions>
          <Login>
            <FormattedMessage id="navbar.login" defaultMessage="Login" />
          </Login>
          <Button
            size={buttonSize.small}
            text={
              <FormattedMessage
                id="navbar.register"
                defaultMessage="Register"
              />
            }
          ></Button>
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
Navbar.propTypes = {
  setLanguage: PropTypes.func.isRequired,
};
