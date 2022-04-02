import React from 'react';
import s from './Skill.module.css'
import {SkillsType} from "../../../App";
import reactImg from '../../common/imege/react-svg.svg'

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
                            <div className={s.img}>{m.img}</div>

                            <h3 className={s.title_skills}>{m.title}</h3>
                            <span className={s.text}>{m.text}</span>
                        </div>)
                })
            }
        </>
    )
}