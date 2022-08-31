import React from 'react'
import styled from "styled-components"

export default function ShortenedLink() {
  return (
    <ShortenedLinkContainer>
        <LinkToShorten>https://stackoverflow.com/questions/53920405</LinkToShorten>
        <ReadyLink>ShortenedLink.com</ReadyLink>
        <CopyBtn>Copy !</CopyBtn>
    </ShortenedLinkContainer>
  )
}

const ShortenedLinkContainer = styled.div`
margin-top:2rem;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    width:100%;
    padding:1.5rem 3rem;
    border-radius:0.5rem;
    gap:2rem;
    background-color:hsl(0, 0%, 95%);
@media screen and (max-width: 960px){
    display:flex;
    flex-direction:column;
    align-items:center;
    padding:0rem;
    gap:1rem;
    width:90%;
    padding:2rem;
    border-radius:1rem;
}
`
const LinkToShorten = styled.div`
max-width:100%;
color:black;
word-wrap: break-word;
border-bottom:1px gray solid;
`
const ReadyLink = styled.div`
width:100%;
color:hsl(180, 66%, 49%);
`
const CopyBtn = styled.button`
    width:20%;
    height:2.5rem;
    background-color:hsl(180, 66%, 49%);
    border:none;
    border-radius:0.5rem;
    color:white;
    font-size:1.2rem;
    font-weight:700;
@media screen and (max-width: 960px){
    width:90%;
    padding:0.7rem 4rem;
}
`