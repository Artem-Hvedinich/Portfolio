import React from 'react';
import c from "../common/styles/Contanier.module.css"
import s from './Project.module.css'
import {ProjectType} from "../../App";
import {MyProject} from "./myProject/MyProject";

type ProjectPropsType = {
    project: Array<ProjectType>
}

export const Project = (props: ProjectPropsType) => {
    return (
        <div className={s.project_block}>
            <div className={`${s.project_contanier} ${c.container}`}>
                <h2>Project</h2>
                <div className={s.my_portfolio}>
                    <MyProject project={props.project}/>
                </div>
            </div>
        </div>
    );
};

