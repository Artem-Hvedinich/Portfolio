import React from 'react';
import {store} from "../../../store/store";
import styled from "styled-components";
import {LineSeparator, Text} from '../../common/Wrappers';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 2rem;
  margin-top: 20px;
`

export const SkillWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin-top: 2vw;`

export const Fill = styled.p<{ completed: number }>`
  width: ${props => `${props.completed}%`};
  border-width: 0;
  border-color: #fff;
  border-style: solid;
  border-bottom-width: 0.1rem;`

const Bar = styled.div<{ left: number }>`
  padding: 0.5vw 1vw;
  margin-bottom: 1vw;
  left: ${props => `${props.left}%`};
  position: absolute;
  background: #030303;
  transform: translateX(-50%)`

const Percent = styled.p`
  font-size: 1.2vw;
  line-height: 1vw;
  color: white;

  ::after {
    display: block;
    content: "";
    background: #030303;
    color: #fff;
    width: 0.5vw;
    height: 0.5vw;
    bottom: 0;
    z-index: -2;
    left: 50%;
    position: absolute;
    transform: translate(-50%, 50%) rotate(225deg);
`

export const Skill = () => {
    const skills = store.skills
    return (
        <Wrap>
            {
                skills.map(m => {
                    return (
                        <SkillWrapper key={m.id}>
                            <Text mrgIn={0} mrgLeft={0} fontSz={2}>{m.title}</Text>
                            <LineSeparator colorOpacity={0.2}>
                                <Fill completed={m.completed}/>
                            </LineSeparator>
                            <Bar left={m.completed}>
                                <Percent>{m.completed}%</Percent>
                            </Bar>
                        </SkillWrapper>)
                })}
        </Wrap>
    )
}