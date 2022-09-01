import React, { useState, useEffect } from "react";
import styled from "styled-components";
import mainImage from "../images/illustration-working.svg";
import bgBottom from "../images/bg-shorten-mobile.svg";
import LinkShortener from "./LinkShortener";
import { pallete } from "../misc/pallete";
import ShortenedLink from "./ShortenedLink";
import StatComponent from "./StatComponent";
import { statList } from "../misc/statList";
import Button from "./Button";

export default function MainSection() {
  const [linkArr, setLinkArr] = useState([]);
  useEffect(() => {
    const check = localStorage.getItem(`links`);
    if (check) {
      setLinkArr(JSON.parse(check));
    } else {
      return;
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("links", JSON.stringify(linkArr));
  }, [linkArr]);

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
          <Button size={"medium"} text={"Get Started"}></Button>
        </InformationContainer>
      </TopElement>
      <LinkShortenerContainer>
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
      </LinkShortenerContainer>
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
      <BottomElement>
        <h2>Boost your links today</h2>
        <Button size={"medium"} text={"Get Started"}></Button>
      </BottomElement>
    </Main>
  );
}
const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 960px) {
    padding: 0;
  }
`;
const TopElement = styled.div`
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
    padding: 2rem 2rem;
    p {
      color: ${pallete.grayishViolet};
    }
    h2 {
      font-size: 2.5rem;
    }
  }
`;
const LinkShortenerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 5rem;
  width: 100%;
  @media screen and (max-width: 960px) {
    padding: 0;
  }
`;
const StatisticsContainer = styled.div`
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
const StatComponentsContainer = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 960px) {
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`;
const BottomElement = styled.div`
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
