import React, { useState } from "react";
import styled from "styled-components";
import { pallete } from "../misc/pallete";
import Button from "./Button";
import PropTypes from "prop-types";
import Loader from "./Loader";
const linkRegex =
  /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

export default function LinkShortener({ setLinkArr, scrollToLink }) {
  const [nextLink, setNextLink] = useState("");
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setNextLink(e.target.value);
  };
  const shortenLink = async () => {
    if (!nextLink) {
      setErrorMsg("Please add link");
      setIsError(true);
    } else if (!nextLink.match(linkRegex)) {
      setErrorMsg("That's not a link");
      setIsError(true);
    } else {
      setIsLoading(true);
      const api = await fetch(
        `https://api.shrtco.de/v2/shorten?url=${nextLink}`
      );
      if (!api.ok) {
        setIsError(true);
        setErrorMsg(`An error has occured: ${api.status}`);
        setIsLoading(false);
      } else {
        const data = await api.json();
        setLinkArr((prev) => [
          ...prev,
          {
            id: prev.length === 0 ? 1 : prev[prev.length - 1].id + 1,
            long: nextLink,
            short: data.result.full_short_link,
          },
        ]);
        setIsLoading(false);
        setIsError(false);
        setNextLink("");
        scrollToLink();
      }
    }
  };
  return (
    <LinkShortenerContainer>
      <InputContainer>
        <LinkInput
          isError={isError}
          value={nextLink}
          onChange={(e) => handleChange(e)}
          type="text"
        />
        <ErrorMsgContainer>{isError ? errorMsg : ""}</ErrorMsgContainer>
      </InputContainer>
      <Button
        size={"medium"}
        text={isLoading ? <Loader /> : "Shorten It !"}
        onClick={() => shortenLink()}
      ></Button>
    </LinkShortenerContainer>
  );
}
LinkShortener.propTypes = {
  setLinkArr: PropTypes.func,
  scrollToLink: PropTypes.func,
};
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
  position: relative;
  @media screen and (max-width: 960px) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
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
    props.isError
      ? `2px solid ${pallete.red}`
      : `1px solid ${pallete.veryDarkViolet}`};
  border-radius: 0.5rem;
`;
const ErrorMsgContainer = styled.div`
  color: ${pallete.red};
  font-style: italic;
  position: absolute;
  transform: translateY(150%);
`;
