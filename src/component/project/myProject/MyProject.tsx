import {ProjectType} from "../../../App";
import s from "./MyProject.module.css";
import React from "react";
import IMG12 from '../../common/imege/lonely-man.jpg'

export type MyProjectPropsType = {
    project: Array<ProjectType>
}
export const MyProject = (props: MyProjectPropsType) => {
    return (
        <>
            {
                props.project.map(m => {
                    return <div className={s.project}
                                key={m.id}>
                        <div className={s.image_block}>
                            <p><a href={m.href} className={s.button}>Go to GitHub</a></p>
                        </div>
                        <div>
                            <h3 className={s.title_skills}>{m.title}</h3>
                            <span className={s.text}>{m.text}</span>
                        </div>
                    </div>
                })
            }
        </>
    )
}

