import styled from "styled-components";
import { pallete } from "../../misc/pallete";
import bgBottom from "../../images/bg-shorten-mobile.svg";

export const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 960px) {
    padding: 0;
  }
`;
export const TopElement = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  padding: 0 5rem;
  @media screen and (max-width: 960px) {
    flex-direction: column;
    align-items: center;
    padding: 0;
  }
`;
export const ImageContainer = styled.div`
  width: 50%;
  @media screen and (max-width: 960px) {
    width: 100%;
    img {
      max-width: 100%;
    }
  }
`;
export const InformationContainer = styled.div`
  width: 50%;
  padding: 3rem 1rem 3rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: left;
  h2 {
    font-size: 4rem;
    color: ${pallete.veryDarkBlue};
  }
  p {
    color: ${pallete.grayishViolet};
    font-size: 1.3rem;
  }
  @media screen and (max-width: 960px) {
    gap: 1rem;
    align-items: center;
    width: 100%;
    text-align: center;
    padding: 2rem;
    p {
      color: ${pallete.grayishViolet};
    }
    h2 {
      font-size: 2.5rem;
    }
  }
`;
export const LinkShortenerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 5rem;
  width: 100%;
  @media screen and (max-width: 960px) {
    padding: 0;
  }
`;
export const StatisticsContainer = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  padding: 0 5rem;
  gap: 5rem;
  align-items: center;
  h3 {
    color: ${pallete.veryDarkBlue};
    margin-bottom: -4.5rem;
  }
  p {
    color: ${pallete.grayishViolet};
  }
  @media screen and (max-width: 960px) {
    text-align: center;
    gap: 7rem;
    padding: 0;
  }
`;
export const StatComponentsContainer = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 960px) {
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`;
export const BottomElement = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 14rem;
  justify-content: center;
  align-items: center;
  background-image: url(${bgBottom});
  background-size: cover;
  color: white;
  margin-top: 3rem;
  gap: 2rem;
`;
