import React,{useState} from 'react'
import styled from "styled-components"
import {ReactComponent as Logo} from "../images/logo.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faX } from '@fortawesome/free-solid-svg-icons'
import { MenuItems } from './MenuItems'

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);

  return (
    <Header>
      <Logo width="200px"/>
        <NavbarContainer open={isActive}>
        <Menu>
        {MenuItems.map(item =>{
          return <li><a href={item.href}>{item.name}</a></li>
        })}
        </Menu>
        <AuthOptions>
          <Login>Login</Login>
          <Register>Sign up</Register>
        </AuthOptions>
        </NavbarContainer>
        <MenuIconContainer onClick={()=>setIsActive(prev => !prev)}>
        {isActive 
        ? <FontAwesomeIcon icon={faX} size="2xl"/> 
        : <FontAwesomeIcon icon={faBars} size="2xl"/>}
        </MenuIconContainer>
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
  display:${props => props.open ? "flex" : "none"};
  flex-direction:column;
  align-items:center;
  justify-content:center;
  position:absolute;
  top:4rem;
  left: 0; 
  right: 0; 
  margin-left: auto; 
  margin-right: auto; 
  height:60%;
  width:90vw;
  background-color:hsl(257, 27%, 26%);
  border-radius:1rem;
}
`
const Menu = styled.ul`
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
  display:flex;
  flex-direction:column;
  align-items:center;
  width:100%;
  border-bottom:1px gray solid;
li{
  list-style-type:none;
  padding:2rem;
}
a{
  text-decoration:none;
  color:white;
}
a:hover{
  color:white;
}
}
`
const AuthOptions = styled.div`
  display:flex;
  flex-direction:row;
  gap:2rem;
@media screen and (max-width: 960px){
  margin-top:1rem;
  display:flex;
  flex-direction:column;
  align-items:center;
}
`
const Login = styled.div`
  padding:0.5rem;
  color:hsl(257, 7%, 63%);
@media screen and (max-width: 960px){
  color:white;
}
`
const Register = styled.div`
  color:white;
  background-color:hsl(180, 66%, 49%);
  padding:0.5rem;
  border-radius:1rem;
@media screen and (max-width: 960px){
  width:50vw;
  text-align:center;
}
`
const MenuIconContainer = styled.div`
  display:none;
@media screen and (max-width: 960px){
  display:inline-block;
}
`