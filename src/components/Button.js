import React from "react";
import styled from "styled-components";
import { pallete } from "../misc/pallete";

export default function Button({
  height,
  width = "auto",
  widthMobile,
  text = "template",
  padHor,
  padVer,
  radius,
  fontSize,
  align = "inherit",
  onClick,
}) {
  return (
    <Btn
      height={height}
      width={width}
      widthMobile={widthMobile}
      fontSize={fontSize}
      radius={radius}
      padHor={padHor}
      padVer={padVer}
      align={align}
      onClick={onClick}
    >
      {text}
    </Btn>
  );
}

const Btn = styled.button`
  height: ${(props) => `${props.height}rem`};
  width: ${(props) => `${props.width}%`};
  background-color: ${pallete.cyan};
  color: ${pallete.white};
  border: none;
  border-radius: ${(props) => `${props.radius}rem`};
  padding: ${(props) => `${props.padVer}rem ${props.padHor}rem`};
  text-align: center;
  font-weight: 700;
  font-size: ${(props) => `${props.fontSize}rem`};
  vertical-align: center;
  &:hover {
    cursor: pointer;
  }
  @media screen and (max-width: 960px) {
    width: ${(props) =>
      props.widthMobile ? `${props.widthMobile}%` : `${props.width}%`};
    font-size: ${(props) => `${props.fontSize}rem`};
    align-self: ${(props)=> `${props.align}`}
  }
`;
