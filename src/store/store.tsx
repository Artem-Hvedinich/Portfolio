import {v1} from "uuid";
import React from "react";
import {About} from "../component/RightBlock/About";
import {Resume} from "../component/RightBlock/Resume";
import {Skills} from "../component/RightBlock/skills/Skills";
import {AboutImg} from "../component/common/imege/AboutImg";
import {ContactImg} from "../component/common/imege/ContactImg";
import {HomeImg} from "../component/common/imege/HomeImg";
import {PortfolioImg} from "../component/common/imege/PortfolioImg";
import ResumeImg from "../component/common/imege/ResumeImg";
import {SkillsImg} from "../component/common/imege/SkillsImg";

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
export type ExperienceType = {
    project: string
    position: string
    info: string
    id: string
}

export type StoreType = {
    skills: Array<SkillType>
    project: Array<ProjectType>
    experience: Array<ExperienceType>
    menu: Array<MenuType>
}

export type MenuType = {
    id: string
    title: string
    img: {}
}

export const store: StoreType = {
    skills: [
        {id: v1(), title: 'HTML/CSS', completed: 89},
        {id: v1(), title: 'JavaScript/TypeScript', completed: 78},
        {id: v1(), title: 'React/Redux', completed: 75},

    ],
    project: [
        {
            id: v1(),
            title: 'Social Network',
            text: 'Todolist - react applications for keeping a list of completed tasks',
            href: 'https://artem-hvedinich.github.io/way_of_samuraya',
            img: 'https://media.kasperskycontenthub.com/wp-content/uploads/sites/43/2014/06/08085245/social-network-800x450.png',
        },
        {
            id: v1(),
            title: 'Todolist',
            text: 'hsndfsfiughfdsifkhndskjf',
            href: 'https://artem-hvedinich.github.io/Todolist',
            img: 'https://collegeinfogeek.com/wp-content/uploads/2019/05/best-to-list-apps-featured-image.jpg',
        }
    ],
    experience: [
        {
            id: v1(),
            project: 'IT-Incubator 2022',
            position: 'Front-End Developer',
            info: 'Lorem Ipsum is simply dummy text of the printing industry.'
        },
        {
            id: v1(),
            project: 'Tesla 2021',
            position: 'Front-End Developer',
            info: 'Lorem Ipsum is simply dummy text of the printing industry.'
        },
        {
            id: v1(),
            project: 'Google 2020',
            position: 'Front-End Developer',
            info: 'Lorem Ipsum is simply dummy text of the printing industry.'
        }
    ],
    menu: [
        {id: v1(), title: 'Home', img: <HomeImg/>},
        {id: v1(), title: 'About', img: <AboutImg/>},
        {id: v1(), title: 'Resume', img: <ResumeImg/>},
        {id: v1(), title: 'Skills', img: <SkillsImg/>},
        {id: v1(), title: 'Portfolio', img: <PortfolioImg/>},
        {id: v1(), title: 'Contact', img: <ContactImg/>},
    ],
}
