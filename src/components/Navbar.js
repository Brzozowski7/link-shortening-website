import React from 'react'
import styled from "styled-components"
import {ReactComponent as Logo} from "../images/logo.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const menuItems = [
  {
    name:"Features",
    href:"#",
  },
  {
    name:"Pricing",
    href:"#",
  },
  {
    name:"Resources",
    href:"#",
  },
]

export default function Navbar() {
  return (
    <Header>
      <Logo width="200px"/>
        <NavbarContainer>
        <DekstopMenu>
        {menuItems.map(item =>{
          return <li><a href={item.href}>{item.name}</a></li>
        })}
        </DekstopMenu>
        <AuthOptions>
          <Login>Login</Login>
          <Register>Sign up</Register>
        </AuthOptions>
        <MenuIconContainer><FontAwesomeIcon icon={faBars} size="2xl"/></MenuIconContainer>
        </NavbarContainer>
    </Header>
  )
}
const Header = styled.header`
display:flex;
flex-direction:row;
width:100%;
padding:0 5rem;
height:3rem;
align-items:center;
justify-content:space-between;
@media screen and (max-width: 960px){
  display:flex;
  flex-direction:row;
  padding:0;
  width:100%;
  justify-content:space-between;
}
`
const NavbarContainer = styled.nav`
display:flex;
flex-direction:row;
width:100%;
justify-content:space-between;
@media screen and (max-width: 960px){
  justify-content:flex-end;
}
`
const DekstopMenu = styled.ul`
display:flex;
flex-direction:row;
li{
  list-style-type:none;
  padding:0.5rem 2rem;
}
a{
  text-decoration:none;
  color:hsl(257, 7%, 63%);
}
a:hover{
  color:hsl(257, 27%, 26%);
}
@media screen and (max-width: 960px){
  display:none;
}
`
const AuthOptions = styled.div`
display:flex;
flex-direction:row;
gap:2rem;
@media screen and (max-width: 960px){
  display:none;
}
`
const Login = styled.div`
padding:0.5rem;
color:hsl(257, 7%, 63%)
`
const Register = styled.div`
color:white;
background-color:hsl(180, 66%, 49%);
padding:0.5rem;
border-radius:1rem;
`
const MenuIconContainer = styled.div`
display:none;
@media screen and (max-width: 960px){
  display:inline-block;
}
`