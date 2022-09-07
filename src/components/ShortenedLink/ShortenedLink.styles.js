import styled from "styled-components";
import { pallete } from "../../misc/pallete";

export const ShortenedLinkContainer = styled.div`
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
export const LinkToShorten = styled.div`
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
export const ReadyLink = styled.div`
  width: 50%;
  color: ${pallete.cyan};
  &:hover {
    cursor: pointer;
  }
  @media screen and (max-width: 960px) {
    width: 70%;
  }
`;

export const IconContainer = styled.div`
  &:hover {
    cursor: pointer;
  }
  @media screen and (max-width: 960px) {
    align-self: center;
  }
`;
