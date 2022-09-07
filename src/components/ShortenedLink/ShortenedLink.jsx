import { useState } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import {
  ShortenedLinkContainer,
  LinkToShorten,
  ReadyLink,
  IconContainer,
} from "./ShortenedLink.styles";
import { isLink } from "./ShortenedLink.utils";
import Button from "../Button";
import { buttonSize } from "../Button/Button.const";

export default function ShortenedLink({ long, short, id, setLinkArr }) {
  const [isCopied, setIsCopied] = useState(false);
  const handleClick = () => {
    navigator.clipboard
      .writeText(short)
      .then((res) => setIsCopied(true))
      .catch((err) => console.log(err));
    setTimeout(() => {
      setIsCopied((prev) => !prev);
    }, 5000);
  };
  const removeLink = () => {
    setLinkArr((prev) =>
      prev.filter((item) => {
        return item.id !== id;
      })
    );
  };
  return (
    <ShortenedLinkContainer
      as={motion.div}
      initial={{ x: "-100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: " 100%", opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <LinkToShorten>{long}</LinkToShorten>
      <ReadyLink onClick={handleClick}>{short}</ReadyLink>
      <Button
        clicked={isCopied}
        size={buttonSize.medium}
        text={isCopied ? <FormattedMessage id="shortenedLink.copiedBtn" defaultMessage="Copied"/> : <FormattedMessage id="shortenedLink.copyBtn" defaultMessage="Copy"/>}
        onClick={handleClick}
      ></Button>
      <IconContainer>
        <FontAwesomeIcon onClick={removeLink} icon={faX} size={"sm"} />
      </IconContainer>
    </ShortenedLinkContainer>
  );
}

ShortenedLink.propTypes = {
  long: isLink,
  short: isLink,
  id: PropTypes.number,
  setLinkArr: PropTypes.func,
};
