import React, { useState } from "react";
import styled from "styled-components";
import bgMobile from "../images/bg-shorten-mobile.svg";
import bgDesktop from "../images/bg-shorten-desktop.svg";

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
      <ShortenBtn onClick={() => shortenLink()}>Shorten It !</ShortenBtn>
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
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0rem;
    gap: 1rem;
    width: 90%;
    height: 8rem;
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
  border: ${(props) => (props.error ? "2px solid red" : "1px solid black")};
  border-radius: 0.5rem;
`;
const ErrorMsgContainer = styled.div`
  color: hsl(0, 87%, 67%);
  font-style: italic;
`;
const ShortenBtn = styled.button`
  width: 20%;
  height: 2.5rem;
  background-color: hsl(180, 66%, 49%);
  border: none;
  border-radius: 0.5rem;
  color: white;
  font-size: 1.2rem;
  font-weight: 700;
  :hover {
    cursor: pointer;
  }
  @media screen and (max-width: 960px) {
    width: 90%;
    padding: 0.7rem 4rem;
  }
`;
