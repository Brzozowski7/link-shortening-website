import React from 'react'
import styled from "styled-components"
import {ReactComponent as Logo} from "../images/logo.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
  return (
    <Header>
      <Logo/>
        <NavbarContainer>
        <FontAwesomeIcon icon={faBars} />
        </NavbarContainer>
    </Header>
  )
}
const Header = styled.header`
display:flex;
flex-direction:row;
width:100%;
justify-content:space-between;
`
const NavbarContainer = styled.nav`

`