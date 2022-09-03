import { useState } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import {
  ShortenedLinkContainer,
  LinkToShorten,
  ReadyLink,
  IconContainer,
} from "./ShortenedLink.styles";
import { isLink } from "./ShortenedLink.utils";
import Button from "../Button/Button";
import { buttonSize } from "../Button/Button.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

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
        text={isCopied ? "Copied !" : "Copy !"}
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
