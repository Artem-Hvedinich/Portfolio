import React from 'react';
import styled from "styled-components";
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";
import {Project} from "./project/Project";
import {Form} from "./contact/Form";
import {Footer} from "./footer/Footer";
import {Styles} from "../common/Styles";

const RightBlockWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 1;
  inset: 0;
  overflow: hidden;
`
const Scroll = styled.div`
  z-index: 100;
  height: 100vh;
  overflow-y: scroll;`

const InnerContent = styled.div`
  position: relative;
  width: 50%;
  left: 50%;
  overflow: visible;
  transform: translate(0px, 0px);
  transition: transform 1s;`

const SectionContainer = styled.div`
  max-width: 90%;
  position: relative`

const StylesWrapper = styled.div`
  z-index: -5;
  position: fixed;
  height: 20vh;
  width: 20vw;
  right: 1vw;
  top: 10vh;`


export const RightBlock = () => {
    return (
        <RightBlockWrapper>
            <Scroll>
                <InnerContent>
                    <SectionContainer>
                        <Main/>
                        <Skills/>
                        <Project/>
                        <Form/>
                        <Footer/>
                    </SectionContainer>
                </InnerContent>
            </Scroll>
            <StylesWrapper>
                <Styles/>
            </StylesWrapper>
        </RightBlockWrapper>
    );
};
