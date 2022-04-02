import React from 'react';
import s from './Skills.module.css'
import {SkillsType} from "../../App";
import {Skill} from "./skill/Skill";

type SkillsPropsType = {
    skills: Array<SkillsType>
}


export const Skills = (props: SkillsPropsType) => {
    return (
        <div className={s.skills_block}>
            <div className={`$s.skills_contanier $c.container`}>
                <h2 className={s.title}>Skills</h2>
                <div className={s.skills}>
                    <Skill skills={props.skills}/>
                </div>
            </div>
        </div>
    )
}