import React from 'react'
import styled from "styled-components"
import mainImage from '../images/illustration-working.svg'
export default function MainSection() {
  return (
    <Main>
      <ImageContainer><img src={mainImage} alt="main"/></ImageContainer>
      <InformationContainer>
        <h2>More than just shorter links</h2>
        <p>Build your brand's recognition and get detailed insights on how your links are performing.</p>
        <GetStarted>Get Started</GetStarted>
      </InformationContainer>
    </Main>
  )
}
const Main = styled.main`
width:100%;
display:flex;
flex-direction:row-reverse;
padding:0 5rem;
@media screen and (max-width: 960px){
  display:flex;
  flex-direction:column;
  align-items:center;
  padding:0;
}
`
const ImageContainer = styled.div`
width:50%;
@media screen and (max-width: 960px){
  width:100%;
img{
  max-width:100%;
}
}

`
const InformationContainer = styled.div`
  width:50%;
  padding:3rem 1rem 3rem 0;
  display:flex;
  flex-direction:column;
  align-items:left;
h2{
  font-size: 4rem;
  color:hsl(255, 11%, 22%);
}
p{
  color:hsl(257, 7%, 63%);
  font-size:1.3rem;
}
@media screen and (max-width: 960px){
  align-items:center;
  width:100%;
  display:flex;
  flex-direction:column;
  text-align: center;
  padding:2rem 2rem;
p{
  color:hsl(257, 7%, 63%)
}
h2{
  font-size:2.5rem;
}
}
`
const GetStarted = styled.div`
  background-color:hsl(180, 66%, 49%);
  color:white;
  text-align:center;
  width:30%;
  padding:1rem 2rem;
  border-radius: 2rem;
  margin-top:2rem;
@media screen and (max-width: 960px){
  width:50%;
  color:white;
  padding:1rem 2rem;
  border-radius: 1rem;
  margin-top:1rem;
}
`