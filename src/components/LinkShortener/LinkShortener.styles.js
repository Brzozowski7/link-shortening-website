import styled from "styled-components";
import { pallete } from "../../misc/pallete";

export const LinkShortenerContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 1.5rem 5.5rem;
  border-radius: 0.5rem;
  gap: 2rem;
  background-color: ${pallete.darkViolet};
  position: relative;
  @media screen and (max-width: 960px) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    width: 90%;
    padding: 2rem;
    border-radius: 1rem;
  }
`;
export const InputContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: left;
`;
export const LinkInput = styled.input`
  width: 100%;
  padding: 0.5rem 0.5rem;
  font-size: 1rem;
  border: ${(props) =>
    props.isError
      ? `2px solid ${pallete.red}`
      : `1px solid ${pallete.veryDarkViolet}`};
  border-radius: 0.5rem;
`;
export const ErrorMsgContainer = styled.div`
  color: ${pallete.red};
  font-style: italic;
  position: absolute;
  transform: translateY(150%);
`;
