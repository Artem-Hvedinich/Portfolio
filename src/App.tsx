import {useState} from 'react';
import './App.css';
import {Avatar} from './component/avatar/Avatar';
import {Avatar2} from './component/Avatar2';
import {Burger} from './component/burger/Burger';
import {BurgerDeleteIcon} from "./component/BurgerDeleteIcon/BurgerDeleteIcon";
import {Form} from './component/contact/Form';
import {Footer} from './component/footer/Footer';
import {Main} from './component/main/Main';
import {Project} from './component/project/Project';
import {Skills} from './component/skills/Skills';
import {Styles} from './component/Styled/Styles';
import {store} from './store/store';


function App() {


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
                        <Avatar2/>
                    </div>

                    <div className={'right_container'}
                         style={{inset: '0px', width: '100%', height: ' 100%', position: 'fixed', overflow: 'hidden'}}>
                        <div className={'elementor'}>
                            <div className={'inner-content'}
                                 style={{overflow: 'visible', transform: 'translate(0px, 0px)'}}>
                                <div className={'section-container '} style={{position: 'relative'}}>
                                    <Main/>
                                    <Skills/>
                                    <Project/>
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
