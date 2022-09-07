import styled from "styled-components";
import { pallete } from "../../misc/pallete";

export const FooterContainer = styled.footer`
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
export const Menu = styled.div`
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

export const LogoContainer = styled.div`
  width: 12.5rem;
  img {
    vertical-align: middle;
  }
`;
export const MenuElement = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: center;
  p:hover {
    cursor: pointer;
  }
`;
export const List = styled.ul`
  color: ${pallete.grayishViolet};
  list-style-type: none;
  li:hover {
    cursor: pointer;
    color: ${pallete.white};
  }
`;
export const SocialMediaContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  @media screen and (max-width: 960px) {
    width: 100%;
    justify-content: space-around;
  }
`;

