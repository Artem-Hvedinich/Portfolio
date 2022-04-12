import React from 'react';
import {MainText, Wrapper} from "../common/Wrappers";
import {RightBlockTitle} from "../common/RightBlockTitle";

export const About = () => {
    return (
        <Wrapper id={'About'}>
            <RightBlockTitle width={35} title={'ABOUT'} text={'My approach to buildingthe tech brands of tomorrow.'}/>
            <MainText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                leap into electronic typesetting.</MainText>
        </Wrapper>
    );
};
