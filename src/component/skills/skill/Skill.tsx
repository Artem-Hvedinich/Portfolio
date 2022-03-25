import React from 'react';
import s from './Skill.module.css'
import {SkillsType} from "../../../App";

type SkillsPropsType = {
    skills: Array<SkillsType>
}

export const Skill = (props: SkillsPropsType) => {
    return (
        <>
            {
                props.skills.map(m => {
                    return (
                        <div className={s.skill}
                             key={m.id}>
                            <img className={s.img} src={m.img} alt={'My Photo'}/>
                            <h3 className={s.title_skills}>{m.title}</h3>
                            <span className={s.text}>{m.text}</span>
                        </div>)
                })
            }
        </>
    )
}