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

export default function LinkShortener({ setLinkArr, scrollToLink, linkArr }) {
  const [nextLink, setNextLink] = useState("");
  const [fetchedLink, setFetchedLink] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const checkLink = () => {
    if (!nextLink) {
      setErrorMsg("Please add link");
      return false;
    } else if (!nextLink.match(linkRegex)) {
      setErrorMsg("That's not a link");
      return false;
    } else if (linkArr.some((item) => item.long === nextLink)) {
      setErrorMsg(
        "You've already shortened this link. Please check links listed below."
      );
      return false;
    } else return true;
  };
  const fetchLink = async () => {
    setIsLoading(true);
    await fetch(`https://api.shrtco.de/v2/shorten?url=${nextLink}`)
      .then((response) => console.log(response))
      .then((response) => response.json())
      .then((data) => {
        setFetchedLink(data.result.short_link);
        scrollToLink();
        setErrorMsg("");
      })
      .catch((err) => setErrorMsg(`An error has occured: ${err}`));
    setIsLoading(false);
  };
  const handleChange = (e) => {
    setNextLink(e.target.value);
  };

  const shortenLink = async () => {
    setErrorMsg("");
    if (checkLink()) {
      await fetchLink();
    }
  };

  useEffect(() => {
    setLinkArr((prev) => [
      ...prev,
      {
        id: prev.length === 0 ? 1 : prev[prev.length - 1].id + 1,
        long: nextLink,
        short: fetchedLink,
      },
    ]);
    setNextLink("");
  }, [fetchedLink]);

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
