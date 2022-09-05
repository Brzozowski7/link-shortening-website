import styled from "styled-components";
import { pallete } from "../../misc/pallete";

const BtnBase = styled.button`
  border: none;
  background-color: ${(props) =>
    props.clicked ? `${pallete.darkerCyan}` : `${pallete.cyan}`};
  color: ${pallete.white};
  display: flex;
  flex-directon: column;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  &:hover {
    cursor: pointer;
  }
`;

const SmallBtn = styled(BtnBase)`
  border-radius: 1rem;
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  @media screen and (max-width: 960px) {
    font-size: 1.5rem;
  }
`;
const MediumBtn = styled(BtnBase)`
  border-radius: 2rem;
  padding: 1rem 2rem;
  width: 13rem;
  height: 3rem;
  font-size: 1.3rem;
  @media screen and (max-width: 960px) {
    width: 70%;
  }
`;

export { SmallBtn, MediumBtn };
