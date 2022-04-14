import React from 'react';
import {MainText, Text, Wrapper} from "../common/Wrappers";
import {RightBlockTitle} from "../common/RightBlockTitle";
import styled from "styled-components";

export const IconButtonWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 10vw;
  height: 3vw;
  opacity: 1;
  transition: .75s;
  z-index: 1;
  margin-top: 2vw`

export const IconButton = styled.div`
  font-size: 2vw;
  height: 3vw;
  width: 3vw;
  right: 0;
  border-style: solid;
  border-color: #fff;
  border-width: 0.1rem;
  border-radius: 50%;
  position: absolute;
  z-index: 2;
  transition: all 0.35s;

  :hover {
    border-color: #e3af00;
  }`

export const Arrow = styled.span`
  position: absolute;
  top: 1.2vw;
  right: 1.3vw;
  border-style: solid;
  border-color: #fff;
  border-width: 0 0.2vw 0.2vw 0;
  display: inline-block;
  padding: 0.2vw;
  transform: rotate(-45deg);
  transition: all 0.35s;

  :hover {
    border-color: #e3af00;
  }`


const Input = styled.input`
  width: 100%;
  background-color: rgba(255, 0, 0, 0);
  margin-top: 3vw;
  font-size: 1.5vw;
  color: white;
  border-width: 0;
  border-color: #fff;
  border-style: solid;
  border-bottom-width: 0.1rem;
  outline: none;
  font-family: 'Source Sans Pro', sans-serif;
  padding-bottom: 1vw;
`

const Textarea = styled.textarea`
  width: 100%;
  height: 5vw;
  background-color: rgba(255, 0, 0, 0);
  margin-top: 3vw;
  font-size: 1.5vw;
  color: white;
  resize: none;
  border-width: 0;
  border-color: #fff;
  border-style: solid;
  border-bottom-width: 0.1rem;
  outline: none;`

export const Contact = () => {
    console.log('Contact')
    return (
        <Wrapper id={'Contact'}>
            <RightBlockTitle title={'CONTACT'} text={"Let's get in touch."} width={32}/>
            <MainText>Fill out my form below and send me an email.</MainText>
            <form>
                <Input placeholder={'*Name'}/>
                <Input placeholder={'*E-mail'}/>
                <Input placeholder={'Phone'}/>
                <Textarea placeholder={'*Message'}/>
            </form>
            <IconButtonWrapper>
                <Text fontSz={2} mrgIn={0} mrgLeft={0}>Send</Text>
                <IconButton>
                    <Arrow/>
                </IconButton>
            </IconButtonWrapper>
        </Wrapper>
    )
};

export const ContactMemo = React.memo(Contact)
