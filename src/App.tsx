import React, {useState} from 'react';
import './App.css';
import {Main} from "./component/main/Main";
import {Skills} from "./component/skills/Skills";
import {v1} from "uuid";
import {Project} from "./component/project/Project";
import {Form} from "./component/contact/Form";
import {Footer} from "./component/footer/Footer";
import {ReactImg} from "./component/common/imege/TSImg/ReactImg";
import {CssImg} from "./component/common/imege/TSImg/CssImg";
import {TsImg} from "./component/common/imege/TSImg/TSImg";
import {JsImg} from "./component/common/imege/TSImg/JSImg";
import {WebDevImg} from "./component/common/imege/TSImg/WebDevImg"
import {ReduxImg} from "./component/common/imege/TSImg/ReduxImg";
import {Burger} from "./component/burger/Burger";
import {Avatar} from "./component/avatar/Avatar";
import {BurgerDeleteIcon} from "./component/BurgerDeleteIcon/BurgerDeleteIcon";
import {Styles} from "./component/Styled/Styles";

export type SkillsType = {
    id: string
    img: {}
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

    const skills = ([
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
    ])
    const project = ([
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

    const [active, setActive] = useState(false)
    const toggleClick = () => {
        setActive(!active)
    }

    const styled = active ? 'upMain' : 'downMain'

    return (
        <>
            <div className={styled}>
                <div className='App'
                     style={{opacity: '1', transform: ' translate(0px, 0px)'}}>
                    <div className={'left_container'} style={{zIndex: '2'}}>
                        <Avatar/>
                    </div>

                    <div className={'right_container'}
                         style={{inset: '0px', width: '100%', height: ' 100%', position: 'fixed', overflow: 'hidden'}}>
                        <div className={'elementor'}>
                            <div className={'inner-content'}
                                 style={{overflow: 'visible', transform: 'translate(0px, 0px)'}}>
                                <div className={'section-container '} style={{position: 'relative'}}>
                                    <Main/>
                                    <Skills skills={skills}/>
                                    <Project project={project}/>
                                    <Form/>
                                    <Footer/>
                                </div>
                            </div>
                        </div>
                        <div className='styles_container'>
                            <Styles/>
                        </div>
                    </div>
                </div>
            </div>

            <Burger active={active}/>
            <BurgerDeleteIcon active={active} onChange={toggleClick}/>


        </>

    );
}

export default App;
