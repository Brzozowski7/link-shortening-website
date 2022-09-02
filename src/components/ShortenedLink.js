import React, { useState } from "react";
import styled from "styled-components";
import { pallete } from "../misc/pallete";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";
import { motion } from "framer-motion";
const isLink = function (props, propName, componentName) {
  const regex =
    /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

  if (!regex.test(props[propName])) {
    return new Error(
      `Invalid prop ${propName} passed to ${componentName}. Expected a link.`
    );
  }
};
export default function ShortenedLink({ long, short, id, setLinkArr }) {
  const [isCopied, setIsCopied] = useState(false);
  const handleClick = () => {
    navigator.clipboard.writeText(short);
    setIsCopied(true);
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
      initial={{ x: -1500, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 1500, opacity: 0 }}
    >
      <LinkToShorten>{long}</LinkToShorten>
      <ReadyLink>{short}</ReadyLink>
      <Button
        size={"medium"}
        text={isCopied ? "Copied !" : "Copy !"}
        onClick={() => handleClick()}
      ></Button>
      <IconContainer>
        <FontAwesomeIcon onClick={() => removeLink()} icon={faX} size={"sm"} />
      </IconContainer>
    </ShortenedLinkContainer>
  );
}

ShortenedLink.propTypes = {
  long: isLink,
  short: isLink,
};

const ShortenedLinkContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 1.5rem 3rem;
  border-radius: 0.5rem;
  gap: 2rem;
  background-color: ${pallete.gray};
  @media screen and (max-width: 960px) {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
    width: 90%;
    padding: 2rem;
    border-radius: 1rem;
  }
`;
const LinkToShorten = styled.div`
  width: 30%;
  max-height: 3rem;
  color: black;
  word-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  @media screen and (max-width: 960px) {
    width: 70%;
  }
`;
const ReadyLink = styled.div`
  width: 50%;
  color: ${pallete.cyan};
  @media screen and (max-width: 960px) {
    width: 70%;
  }
`;

const IconContainer = styled.div`
  &:hover {
    cursor: pointer;
  }
  @media screen and (max-width: 960px) {
    align-self: center;
  }
`;
