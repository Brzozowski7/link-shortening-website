import { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import {
  LinkShortenerContainer,
  InputContainer,
  LinkInput,
  ErrorMsgContainer,
} from "./LinkShortener.styles";
import Button from "../Button";
import Loader from "../Loader";
import { buttonSize } from "../Button/Button.const";
import useFetchLink from "./useFetchLink";

export default function LinkShortener({ setLinkArr, scrollToLink }) {
  const [nextLink, setNextLink] = useState({ value: "" });
  const isMounted = useRef(false);
  const inputRef = useRef(null);
  const { shortLink, loading, error, newLink } = useFetchLink(nextLink);

  const handleClick = () => {
    setNextLink({ value: inputRef.current.value });
  };

  useEffect(() => {
    setLinkArr((prev) => [
      ...prev,
      {
        id: prev.length === 0 ? 1 : prev[prev.length - 1].id + 1,
        long: nextLink.value,
        short: shortLink,
      },
    ]);
    if (isMounted.current) {
      scrollToLink();
    } else {
      isMounted.current = true;
    }
    inputRef.current.value = "";
  }, [newLink]);

  return (
    <LinkShortenerContainer>
      <InputContainer>
        <LinkInput isError={error} ref={inputRef} type="text" />
        <ErrorMsgContainer>{error ? error : ""}</ErrorMsgContainer>
      </InputContainer>
      <Button
        size={buttonSize.medium}
        text={
          loading ? (
            <Loader />
          ) : (
            <FormattedMessage
              id="linkShortener.shortenItBtn"
              defaultMessage="Shorten It !"
            />
          )
        }
        onClick={handleClick}
      ></Button>
    </LinkShortenerContainer>
  );
}
LinkShortener.propTypes = {
  setLinkArr: PropTypes.func,
  scrollToLink: PropTypes.func,
  fetchedLink: PropTypes.string,
  linkArr: PropTypes.array,
};
