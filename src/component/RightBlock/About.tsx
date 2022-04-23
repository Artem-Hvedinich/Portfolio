import React from 'react';
import {MainText, Wrapper} from "../common/Wrappers";
import {RightBlockTitle} from "../common/RightBlockTitle";
import {Home} from "./Home";

export const About = () => {
    return (
        <Wrapper id={'About'}>
            <RightBlockTitle width={35} title={'ABOUT'} text={'My approach to buildingthe tech brands of tomorrow.'}/>
            <MainText> I`m a result oriented front end developer with experience in creating.</MainText>
            <MainText> Landing Pages and SPA, using React(JS/TS), Redux, HTML & CSS, you can see my projects on GitHub.</MainText>
            <MainText> Now I am improving my skills in this direction and expanding them with new technologies. I'm planning to
                become a full-stack developer and learn NodeJs. My free time is dedicated to solving katas on Codewars
                and boosting my English.</MainText>
        </Wrapper>
    );
};
export const AboutMemo = React.memo(About)
