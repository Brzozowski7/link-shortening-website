import React, { useState } from "react";
import styled from "styled-components";
import mainImage from "../images/illustration-working.svg";
import LinkShortener from "./LinkShortener";
import { pallete } from "../lists/pallete";
import ShortenedLink from "./ShortenedLink";
import StatComponent from "./StatComponent";
import { statList } from "../lists/statList";

export default function MainSection() {
  const [linkArr, setLinkArr] = useState([]);
  return (
    <Main>
      <TopElement>
        <ImageContainer>
          <img src={mainImage} alt="main" />
        </ImageContainer>
        <InformationContainer>
          <h2>More than just shorter links</h2>
          <p>
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </p>
          <GetStarted>Get Started</GetStarted>
        </InformationContainer>
      </TopElement>
      <LinkShortener setLinkArr={setLinkArr} />
      {linkArr.map((item) => {
        return (
          <ShortenedLink
            setLinkArr={setLinkArr}
            key={item.short}
            long={item.long}
            short={item.short}
          />
        );
      })}
      <StatisticsContainer>
        <h3>Advanced Statistics</h3>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
        <StatComponentsContainer>
          {statList.map((item) => {
            return (
              <StatComponent
                key={item.name}
                name={item.name}
                image={item.image}
                content={item.content}
              />
            );
          })}
        </StatComponentsContainer>
      </StatisticsContainer>
    </Main>
  );
}
const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 5rem;
  @media screen and (max-width: 960px) {
    padding: 0;
  }
`;
const TopElement = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  @media screen and (max-width: 960px) {
    flex-direction: column;
    align-items: center;
  }
`;
const ImageContainer = styled.div`
  width: 50%;
  @media screen and (max-width: 960px) {
    width: 100%;
    img {
      max-width: 100%;
    }
  }
`;
const InformationContainer = styled.div`
  width: 50%;
  padding: 3rem 1rem 3rem 0;
  display: flex;
  flex-direction: column;
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
    align-items: center;
    width: 100%;
    text-align: center;
    padding: 2rem 2rem;
    p {
      color: ${pallete.grayishViolet};
    }
    h2 {
      font-size: 2.5rem;
    }
  }
`;
const GetStarted = styled.div`
  background-color: ${pallete.cyan};
  color: ${pallete.white};
  text-align: center;
  width: 30%;
  padding: 1rem 2rem;
  border-radius: 2rem;
  margin-top: 2rem;
  &:hover {
    cursor: pointer;
  }
  @media screen and (max-width: 960px) {
    width: 70%;
    color: ${pallete.white};
    border-radius: 1rem;
    margin-top: 1rem;
  }
`;
const StatisticsContainer = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
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
  }
`;
const StatComponentsContainer = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 960px) {
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`;
