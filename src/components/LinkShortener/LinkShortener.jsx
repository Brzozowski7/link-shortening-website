import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  LinkShortenerContainer,
  InputContainer,
  LinkInput,
  ErrorMsgContainer,
} from "./LinkShortener.styles";
import { linkRegex } from "./LinkShortener.const";
import Button from "../Button/Button";
import Loader from "../Loader/Loader";
import { buttonSize } from "../Button/Button.styles";

export default function LinkShortener({ setLinkArr, scrollToLink }) {
  const [nextLink, setNextLink] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setNextLink(e.target.value);
  };
  const shortenLink = async () => {
    if (!nextLink) {
      setErrorMsg("Please add link");
    } else if (!nextLink.match(linkRegex)) {
      setErrorMsg("That's not a link");
    } else {
      setIsLoading(true);
      const response = await fetch(
        `https://api.shrtco.de/v2/shorten?url=${nextLink}`
      );
      if (!response.ok) {
        setErrorMsg(`An error has occured: ${response.status}`);
        setIsLoading(false);
      } else {
        const data = await response.json();
        setLinkArr((prev) => [
          ...prev,
          {
            id: prev.length === 0 ? 1 : prev[prev.length - 1].id + 1,
            long: nextLink,
            short: data.result.full_short_link,
          },
        ]);
        setIsLoading(false);
        setNextLink("");
        scrollToLink();
      }
    }
  };
  return (
    <LinkShortenerContainer>
      <InputContainer>
        <LinkInput
          isError={errorMsg}
          value={nextLink}
          onChange={(e) => handleChange(e)}
          type="text"
        />
        <ErrorMsgContainer>{errorMsg ? errorMsg : ""}</ErrorMsgContainer>
      </InputContainer>
      <Button
        size={buttonSize.medium}
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
