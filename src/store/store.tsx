import {v1} from "uuid";
import {JsImg} from "../component/common/imege/TSImg/JSImg";
import {CssImg} from "../component/common/imege/TSImg/CssImg";
import {ReactImg} from "../component/common/imege/TSImg/ReactImg";
import {WebDevImg} from "../component/common/imege/TSImg/WebDevImg";
import {TsImg} from "../component/common/imege/TSImg/TSImg";
import {ReduxImg} from "../component/common/imege/TSImg/ReduxImg";
import React from "react";

export type SkillType = {
    id: string
    title: string
    completed: number
}
export type ProjectType = {
    id: string
    title: string
    text: string
    href: string
    img: string
}

export type StoreType = {
    skills: Array<SkillType>
    project: Array<ProjectType>
}

export const store: StoreType = {
    skills: [
        {id: v1(), title: 'HTML/CSS', completed: 89},
        {id: v1(), title: 'JavaScript/TypeScript', completed: 78},
        {id: v1(), title: 'React/Redux', completed: 65},

    ],
    project: [
        {
            id: v1(),
            title: 'Social Network',
            text: 'Todolist - react applications for keeping a list of completed tasks',
            href: 'https://artem-hvedinich.github.io/Todolist',
            img: 'https://media.kasperskycontenthub.com/wp-content/uploads/sites/43/2014/06/08085245/social-network-800x450.png',
        },
        {
            id: v1(),
            title: 'Todolist',
            text: 'hsndfsfiughfdsifkhndskjf',
            href: 'https://artem-hvedinich.github.io/Todolist',
            img: 'https://collegeinfogeek.com/wp-content/uploads/2019/05/best-to-list-apps-featured-image.jpg',
        }
    ]
}
