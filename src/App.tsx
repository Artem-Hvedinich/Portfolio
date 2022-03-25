import React, {useState} from 'react';
import './App.css';
import {Header} from "./component/header/Header";
import {Main} from "./component/main/Main";
import {Skills} from "./component/skills/Skills";
import {v1} from "uuid";
import {Project} from "./component/project/Project";
import {Form} from "./component/contact/Form";
import {Footer} from "./component/footer/Footer";

export type SkillsType = {
    id: string
    img: string
    title: string
    text: string
}
export type ProjectType = {
    id: string
    title: string
    text: string
    href: string
}

function App() {

    const [skills, setSkills] = useState<Array<SkillsType>>([
        {
            id: v1(),
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/2048px-User_icon_2.svg.png',
            title: 'JS',
            text:
                'Lorem Ipsum is simply dummy text of the printing' +
                ' and typesetting industry. Lorem Ipsum has been the '
        }, {
            id: v1(),
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/2048px-User_icon_2.svg.png',
            title: 'CSS',
            text: 'Lorem Ipsum is simply dummy text of the printing' +
                ' and typesetting industry. Lorem Ipsum has been the '
        }, {
            id: v1(),
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/2048px-User_icon_2.svg.png',
            title: 'React',
            text: 'Lorem Ipsum is simply dummy text of the printing' +
                ' and typesetting industry. Lorem Ipsum has been the '
        },
        {
            id: v1(),
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/2048px-User_icon_2.svg.png',
            title: 'Web Development',
            text: 'Lorem Ipsum is simply dummy text of the printing' +
                ' and typesetting industry. Lorem Ipsum has been the '
        }, {
            id: v1(),
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/2048px-User_icon_2.svg.png',
            title: 'TypeScript',
            text: 'Lorem Ipsum is simply dummy text of the printing' +
                ' and typesetting industry. Lorem Ipsum has been the '
        }, {
            id: v1(),
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/2048px-User_icon_2.svg.png',
            title: 'Redax',
            text: 'Lorem Ipsum is simply dummy text of the printing' +
                ' and typesetting industry. Lorem Ipsum has been the '
        },
    ])
    const [project, setProject] = useState<Array<ProjectType>>([
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
    ])
    return (
        <div>
            <Header/>
            <Main/>
            <Skills skills={skills}/>
            <Project project={project}/>
            <Form/>
            <Footer/>
        </div>
    );
}

export default App;
