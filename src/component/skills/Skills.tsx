import React from 'react';
import s from './Skills.module.css'
import {Skill} from "./skill/Skill";



export const Skills = () => {
    return (
        <div className={s.skills_block}>
            <div className={`$s.skills_contanier $c.container`}>
                <h2 className={s.title}>Skills</h2>
                <div className={s.skills}>
                    <Skill/>
                </div>
            </div>
        </div>
    )
}