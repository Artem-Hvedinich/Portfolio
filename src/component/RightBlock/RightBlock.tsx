import React from 'react';
import styled from "styled-components";
import {Skills} from "./skills/Skills";
import {Project} from "./project/Project";
import {Styles} from "../common/Styles";
import {About} from './About';
import {Resume} from './Resume';
import { Home } from './Home';
import {Contact} from "./Contact";

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
  overflow-y: scroll;
  scroll-behavior: inherit;`

const InnerContent = styled.div`
  position: relative;
  width: 50%;
  left: 50%;
  overflow: visible;
  transform: translate(0px, -10px);
  transition: transform 1s;
  transition-delay: 1s;
`

const SectionContainer = styled.div`
  max-width: 85%;
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
                            <Home/>
                            <About/>
                            <Resume/>
                            <Skills/>
                            <Project/>
                            <Contact/>
                    </SectionContainer>
                </InnerContent>
            </Scroll>
            <StylesWrapper>
                <Styles/>
            </StylesWrapper>
        </RightBlockWrapper>
    );
};
