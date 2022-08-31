import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { pallete } from "./pallete";

export default function StatComponent({ name, image, content }) {
  return (
    <StatContainer>
      <ImgContainer>
        <img src={image} alt="stat icon" loading="lazy"/>
      </ImgContainer>
      <h4>{name}</h4>
      <p>{content}</p>
    </StatContainer>
  );
}

StatComponent.propTypes = {
  name: PropTypes.string,
  content: PropTypes.string,
  image: PropTypes.string,
};
const StatContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  padding: 3rem;
  gap: 1rem;
  background-color: ${pallete.gray};
  border-radius: 0.5rem;
  text-align: center;
  position: relative;
`;
const ImgContainer = styled.div`
  position: absolute;
  width: 5rem;
  height: 5rem;
  top: -2.7rem;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  background-color: black;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    object-fit: contain;
  }
`;
