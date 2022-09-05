import { useState, useEffect, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import {
  Main,
  TopElement,
  ImageContainer,
  InformationContainer,
  LinkShortenerContainer,
  StatisticsContainer,
  StatComponentsContainer,
  BottomElement,
} from "./MainSection.styles";
import Button from "../Button";
import { buttonSize } from "../Button/Button.const";
import ShortenedLink from "../ShortenedLink";
import LinkShortener from "../LinkShortener";
import StatComponent from "../StatComponent";
import { statList } from "../../misc/statList";
import mainImage from "../../images/illustration-working.svg";

export default function MainSection() {
  const [linkArr, setLinkArr] = useState([]);
  const ref = useRef(null);
  useEffect(() => {
    const checkLinksFromBefore = localStorage.getItem(`links`);
    if (checkLinksFromBefore) {
      setLinkArr(JSON.parse(checkLinksFromBefore));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("links", JSON.stringify(linkArr));
  }, [linkArr]);
  const scrollToLink = () => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
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
          <Button size={buttonSize.medium} text={"Get Started"}></Button>
        </InformationContainer>
      </TopElement>
      <LinkShortenerContainer>
        <LinkShortener
          scrollToLink={scrollToLink}
          setLinkArr={setLinkArr}
          linkArr={linkArr}
        />
        <AnimatePresence>
          {linkArr.map((item) => {
            return (
              <ShortenedLink
                setLinkArr={setLinkArr}
                key={item.id}
                id={item.id}
                long={item.long}
                short={item.short}
              />
            );
          })}
          {/* div to scroll to after new ShortenedLink is rendered */}
          <div ref={ref}></div>
        </AnimatePresence>
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
        <Button size={buttonSize.medium} text={"Get Started"}></Button>
      </BottomElement>
    </Main>
  );
}
