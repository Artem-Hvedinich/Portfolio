import React from 'react';
import {MainText, Text, Title, Wrapper} from "../common/Wrappers";
import {RightBlockTitle} from "../common/RightBlockTitle";
import styled from "styled-components";
import {store} from "../../store/store";

const ExperienceWrapper = styled.div`
  background-color: #181818;
  width: 25vw;
  margin-top: 2vw;
  padding: 3vw 4vw 0 4vw;
  z-index: 1;
  transform: translate(20%, 0%);

  ::after {
    display: block;
    content: "";
    background: #181818;
    color: #fff;
    width: 3vw;
    height: 3vw;
    bottom: 0;
    z-index: 0;
    //border: 1px solid white;
    transform: translate(-150%, -370%) rotate(225deg);
  }`

const LineExperience = styled.div`
  width: 4vw;
  border-width: 0;
  border-color: white;
  border-style: solid;
  border-bottom-width: 2px;
  opacity: 1;
  transform: translate(-12vw, 3vw) rotate(90deg);
`

const LineResume = styled.div`
  width: 59vw;
  border-width: 0;
  border-color: white;
  border-style: solid;
  border-bottom-width: 1px;
  opacity: 0.3;
  transform: translate(-29vw, 31.5vw) rotate(90deg);
`

export const Resume = () => {
    const experience = store.experience
    return (
        <Wrapper id={'Resume'}>
            <RightBlockTitle title={'RESUME'} text={'Experience'} width={32}/>
            <MainText>Lorem ipsum dolor sit amet, consectetur. Adipiscing elit. Aenean et elementum purus.</MainText>
            <LineResume/>
            {experience.map((m) => {
                return <ExperienceWrapper key={m.id}>
                    <LineExperience/>
                    <Title fontSz={1}>{m.project}</Title>
                    <Text width={30} mrgLeft={0} mrgIn={2} fontSz={1.5}>{m.position}</Text>
                    <MainText>{m.info}</MainText>
                </ExperienceWrapper>
            })}

        </Wrapper>
    );
};

export const ResumeMemo = React.memo(Resume)

