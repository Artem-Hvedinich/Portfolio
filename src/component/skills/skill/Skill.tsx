import React from 'react';
import s from './Skills.module.css'
import c from '../common/styles/Contanier.module.css'
import {SkillsType} from "../../App";

type SkillsPropsType = {
    skills: Array<SkillsType>
}

export const Skills = (props: SkillsPropsType) => {
    return (
        <div className={s.skills_block}>
            <div className={`${s.skills_contanier} ${c.container}`}>
                <h2 className={s.title}>Skills</h2>

                {props.skills.map(m => {
                    return <div className={s.skills}
                        key={m.id}>
                        <img src={m.img} alt={'My Photo'} style={{width:"60px"}}/>
                        <div className={s.title_skills}>{m.title}</div>
                        <div>{m.text}</div>
                    </div>
                })}

            </div>
        </div>
    )
}