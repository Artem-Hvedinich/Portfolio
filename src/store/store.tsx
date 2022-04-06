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
    img: any
    title: string
    text: string
}
export type ProjectType = {
    id: string
    title: string
    text: string
    href: string
}

export type StoreType = {
    skills: Array<SkillType>
    project: Array<ProjectType>
}

export const store: StoreType = {
    skills: [
        {
            id: v1(),
            img: <JsImg/>,
            title: 'JS',
            text:
                'Lorem Ipsum is simply dummy text of the printing' +
                ' and typesetting industry. Lorem Ipsum has been the '
        }, {
            id: v1(),
            img: <CssImg/>,
            title: 'CSS',
            text: 'Lorem Ipsum is simply dummy text of the printing' +
                ' and typesetting industry. Lorem Ipsum has been the '
        }, {
            id: v1(),
            img: <ReactImg/>,
            title: 'React',
            text: 'Lorem Ipsum is simply dummy text of the printing' +
                ' and typesetting industry. Lorem Ipsum has been the '
        },
        {
            id: v1(),
            img: <WebDevImg/>,
            title: 'Web Development',
            text: 'Lorem Ipsum is simply dummy text of the printing' +
                ' and typesetting industry. Lorem Ipsum has been the '
        }, {
            id: v1(),
            img: <TsImg/>,
            title: 'TypeScript',
            text: 'Lorem Ipsum is simply dummy text of the printing' +
                ' and typesetting industry. Lorem Ipsum has been the '
        }, {
            id: v1(),
            img: <ReduxImg/>,
            title: 'Redux',
            text: 'Lorem Ipsum is simply dummy text of the printing' +
                ' and typesetting industry. Lorem Ipsum has been the '
        },
    ],
    project: [
        {
            id: v1(),
            title: 'Todolist',
            text: 'Todolist - react applications for keeping a list of completed tasks',
            href: 'https://artem-hvedinich.github.io/Todolist'
        },
        {
            id: v1(),
            title: 'Todolist',
            text: 'hsndfsfiughfdsifkhndskjf',
            href: 'https://artem-hvedinich.github.io/Todolist'
        }
    ]
}
