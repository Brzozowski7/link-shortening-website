import React, { useState } from "react";
import styled from "styled-components";
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
        size={"medium"}
        text={"Shorten It !"}
        onClick={() => shortenLink()}
      ></Button>
    </LinkShortenerContainer>
  );
}

const LinkShortenerContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 1.5rem 5.5rem;
  border-radius: 0.5rem;
  gap: 2rem;
  background-color: ${pallete.darkViolet};
  @media screen and (max-width: 960px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: 90%;
    padding: 2rem;
    border-radius: 1rem;
  }
`;
const InputContainer = styled.div`
  width: 80%;
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
