import React from 'react';
import c from "../common/styles/Contanier.module.css"
import s from './Project.module.css'
import {MyProject} from "./myProject/MyProject";



export const Project = () => {
    return (
        <div className={s.project_block}>
            <div className={`${s.project_contanier} ${c.container}`}>
                <h2>Project</h2>
                <div className={s.my_portfolio}>
                    <MyProject/>
                </div>
            </div>
        </div>
    );
};

