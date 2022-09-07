import styled from "styled-components";
import { pallete } from "../../misc/pallete";

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 3rem;
  align-items: center;
  padding: 3rem 5rem;
  justify-content: space-between;
  @media screen and (max-width: 960px) {
    padding: 2rem;
  }
`;
export const LogoContainer = styled.div`
  width: 12.5rem;
  img {
    vertical-align: middle;
  }
`;
export const NavbarContainer = styled.nav`
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
    height: 100%;
    width: 100vw;
    background-color: ${pallete.darkViolet};
    padding: 4rem 0;
    font-size: 1.5rem;
    font-weight: 700;
  }
`;
export const Menu = styled.ul`
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
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 60%;
    width: 100%;
    border-bottom: 1px ${pallete.gray} solid;
    a {
      color: ${pallete.white};
    }
    a:hover {
      color: ${pallete.white};
    }
  }
`;
export const AuthOptions = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  @media screen and (max-width: 960px) {
    height: 40%;
    gap: 0;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
`;
export const Login = styled.div`
  padding: 0.5rem;
  color: ${pallete.grayishViolet};
  &:hover {
    cursor: pointer;
  }
  @media screen and (max-width: 960px) {
    color: ${pallete.white};
  }
`;
export const MenuIconContainer = styled.div`
  display: none;
  @media screen and (max-width: 960px) {
    display: inline-block;
  }
`;
