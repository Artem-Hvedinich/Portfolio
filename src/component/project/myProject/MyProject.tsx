import {ProjectType} from "../../../App";
import s from "./MyProject.module.css";
import React from "react";

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
                        <button type={'button'}><img src={m.img} alt={'My Photo'} style={{width: "360px"}}/></button>
                        <h3 className={s.title_skills}>{m.title}</h3>
                        <span className={s.text}>{m.text}</span>
                        <p><a href={m.href}>Go to GitHub</a></p>

                    </div>
                })
            }
        </>
    )
}

