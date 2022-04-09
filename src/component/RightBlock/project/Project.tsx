import React from 'react';
import {MyProject} from "./myProject/MyProject";
import {RightBlockTitle} from "../../common/RightBlockTitle";


export const Project = () => {
    return (
        <div style={{  gap: '5vw'}}>
            <RightBlockTitle
                title={'PORTFOLIO'}
                text={'Selected Work'}/>
            <MyProject/>
        </div>
    )
}

