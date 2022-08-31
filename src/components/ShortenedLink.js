import React, { useState } from "react";
import styled from "styled-components";
import { pallete } from "../misc/pallete";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";

const isLink = function (props, propName, componentName) {
  const regex =
    /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

  if (!regex.test(props[propName])) {
    return new Error(
      `Invalid prop ${propName} passed to ${componentName}. Expected a link.`
    );
  }
};
export default function ShortenedLink({ long, short, setLinkArr }) {
  const [isCopied, setIsCopied] = useState(false);
  const handleClick = () => {
    navigator.clipboard.writeText(short);
    setIsCopied(true);
  };
  const removeLink = () => {
    console.log(short);
    setLinkArr((prev) =>
      prev.filter((item) => {
        return item.short !== short;
      })
    );
  };
  return (
    <ShortenedLinkContainer>
      <LinkToShorten>{long}</LinkToShorten>
      <ReadyLink>{short}</ReadyLink>
      <Button
        align={"center"}
        fontSize={1.2}
        radius={0.5}
        height={2.5}
        width={20}
        widthMobile={90}
        text={isCopied ? "Copied !" : "Copy !"}
        onClick={() => handleClick()}
      ></Button>
      <IconContainer>
        <FontAwesomeIcon onClick={() => removeLink()} icon={faX} />
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
    align-items: flex-start;
    gap: 1rem;
    width: 90%;
    padding: 2rem;
    border-radius: 1rem;
  }
`;
const LinkToShorten = styled.div`
  width: 30%;
  max-height: 2rem;
  color: black;
  word-wrap: break-word;
  border-bottom: 1px ${pallete.gray} solid;
  overflow: hidden;
  text-overflow: ellipsis;
  @media screen and (max-width: 960px) {
    max-width: 100%;
    max-height: 3rem;
  }
`;
const ReadyLink = styled.div`
  width: 30%;
  color: ${pallete.cyan};
`;

const IconContainer = styled.div`
  &:hover {
    cursor: pointer;
  }
  @media screen and (max-width: 960px) {
    align-self: center;
  }
`;
