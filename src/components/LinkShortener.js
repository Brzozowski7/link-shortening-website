import React,{useState} from 'react'
import styled from "styled-components"
import bgMobile from "../images/bg-shorten-mobile.svg"
import bgDesktop from "../images/bg-shorten-desktop.svg"

export default function LinkShortener() {
  return (
    <LinkShortenerContainer>
        <InputContainer>
            <LinkInput type="text"/>
            <ErrorMsgContainer>Please add link</ErrorMsgContainer>
        </InputContainer>
        <ShortenBtn>Shorten it !</ShortenBtn>
    </LinkShortenerContainer>
  )
}

const LinkShortenerContainer = styled.div`
    margin-top:2rem;
    display:flex;
    flex-direction:row;
    justify-content:center;
    width:100%;
    padding:3rem 8rem 1rem;
    background-image:url(${bgDesktop});
    background-size:cover;
    border-radius:0.5rem;
    gap:2rem;
@media screen and (max-width: 960px){
    display:flex;
    flex-direction:column;
    align-items:center;
    padding:0rem;
    gap:1rem;
    width:90%;
    padding:2rem;
    border-radius:1rem;
    background-image:url(${bgMobile});
    background-size:cover;
}

`
const InputContainer = styled.div`
width:100%;
display:flex;
flex-direction:column;
align-items:left;

`

const LinkInput = styled.input`
width:100%;
font-size:2rem;
@media screen and (max-width: 960px){
    width:100%;
    font-size:1.7rem;
}
`
const ErrorMsgContainer = styled.div`
    color:hsl(0, 87%, 67%);
    font-style:italic;
`
const ShortenBtn = styled.button`
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