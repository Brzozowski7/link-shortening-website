import React from "react";
import styled from "styled-components";
import { pallete } from "../misc/pallete";

export default function Button({ size, text, onClick }) {
  return size === "small" ? (
    <SmallBtn onClick={onClick}>{text}</SmallBtn>
  ) : (
    <MediumBtn onClick={onClick}>{text}</MediumBtn>
  );
}
const SmallBtn = styled.button`
  border: none;
  border-radius: 1rem;
  padding: 0.5rem;
  background-color: ${pallete.cyan};
  color: ${pallete.white};
  text-align: center;
  font-size: 1.2rem;
  font-weight: 700;
  &:hover {
    cursor: pointer;
  }
  @media screen and (max-width: 960px) {
    font-size: 1.5rem;
  }
`;
const MediumBtn = styled.button`
  border: none;
  border-radius: 2rem;
  padding: 1rem 2rem;
  width: 13rem;
  height: 3rem;
  font-size: 1.3rem;
  background-color: ${pallete.cyan};
  color: ${pallete.white};
  text-align: center;
  font-weight: 700;
  display: flex;
  flex-directon: column;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: pointer;
  }
  @media screen and (max-width: 960px) {
    width: 70%;
  }
`;
