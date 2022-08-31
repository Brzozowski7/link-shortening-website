import React, { useState } from "react";
import styled from "styled-components";
import bgMobile from "../images/bg-shorten-mobile.svg";
import bgDesktop from "../images/bg-shorten-desktop.svg";
import { pallete } from "../misc/pallete";
import Button from "./Button";

const linkRegex =
  /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

export default function LinkShortener({ setLinkArr }) {
  const [nextLink, setNextLink] = useState("");
  const [errorActive, setErrorActive] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const handleChange = (e) => {
    setNextLink(e.target.value);
  };
  const shortenLink = async () => {
    if (nextLink === "") {
      setErrorMsg("Please add link");
      setErrorActive(true);
    } else if (!nextLink.match(linkRegex)) {
      setErrorMsg("That's not a link");
      setErrorActive(true);
    } else {
      const api = await fetch(
        `https://api.shrtco.de/v2/shorten?url=${nextLink}`
      );
      const data = await api.json();
      console.log(data.result.full_short_link);
      setLinkArr((prev) => [
        ...prev,
        { long: nextLink, short: data.result.full_short_link },
      ]);
      setErrorActive(false);
      setNextLink("");
    }
  };
  return (
    <LinkShortenerContainer>
      <InputContainer>
        <LinkInput
          error={errorActive}
          value={nextLink}
          onChange={(e) => handleChange(e)}
          type="text"
        />
        <ErrorMsgContainer>{errorActive ? errorMsg : ""}</ErrorMsgContainer>
      </InputContainer>
      <Button
        padVer={0.7}
        padHor={0.7}
        fontSize={1.2}
        radius={0.5}
        height={2.5}
        width={20}
        widthMobile={90}
        text={"Shorten It"}
        onClick={() => shortenLink()}
      ></Button>
    </LinkShortenerContainer>
  );
}

const LinkShortenerContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 8rem;
  padding: 3rem 8rem 3rem;
  background-image: url(${bgDesktop});
  background-size: cover;
  border-radius: 0.5rem;
  gap: 2rem;
  @media screen and (max-width: 960px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: 90%;
    padding: 2rem;
    border-radius: 1rem;
    background-image: url(${bgMobile});
    background-size: cover;
  }
`;
const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: left;
`;
const LinkInput = styled.input`
  width: 100%;
  padding: 0.5rem 0.5rem;
  font-size: 1rem;
  border: ${(props) =>
    props.error
      ? `2px solid ${pallete.red}`
      : `1px solid ${pallete.veryDarkViolet}`};
  border-radius: 0.5rem;
`;
const ErrorMsgContainer = styled.div`
  color: ${pallete.red};
  font-style: italic;
`;
