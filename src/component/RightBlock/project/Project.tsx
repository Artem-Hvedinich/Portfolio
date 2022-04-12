import React from 'react';
import {MyProject} from "./MyProject";
import {RightBlockTitle} from "../../common/RightBlockTitle";
import {Wrapper} from "../../common/Wrappers";


export const Project = () => {
    return (
        <Wrapper id={'Portfolio'}>
            <RightBlockTitle width={32}
                             title={'PORTFOLIO'}
                             text={'Selected Work'}/>
            <MyProject/>
        </Wrapper>
    )
}

