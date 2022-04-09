import React from 'react';
import s from './Skills.module.css'
import {Skill} from "./Skill";
import {Wrapper, Title, Text, LineSeparator} from '../../common/Wrappers';
import {RightBlockTitle} from "../../common/RightBlockTitle";

export const Skills = () => {
    return (
        <Wrapper>
            <RightBlockTitle
                title={'Skills'}
                text={'I have collectedover the years and days.'}/>
            <Skill/>
        </Wrapper>
    )
}