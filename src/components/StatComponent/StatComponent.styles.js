import styled from "styled-components";
import { pallete } from "../../misc/pallete";

export const StatContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  padding: 3rem;
  gap: 1rem;
  background-color: ${pallete.gray};
  text-align: center;
  position: relative;
  @media screen and (max-width: 960px) {
    border-radius: 0.5rem;
  }
`;
export const ImgContainer = styled.div`
  position: absolute;
  width: 5rem;
  height: 5rem;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  transform: translateY(-110%);
  background-color: black;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    object-fit: contain;
  }
`;
