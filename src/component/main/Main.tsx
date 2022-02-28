import React from 'react';
import s from './Main.module.css'
import c from '../common/styles/Contanier.module.css'

export const Main = () => {
    return (
        <div className={s.main}>
            <div className={c.container}>
                <div className={s.text}>
                    <span>Hi there</span>
                    <h1>I'm Artem Hvedinich
                        Frontend React Developer</h1>
                    <p>Frontend React Developer</p>
                </div>
                <div>
                    <img className={s.photo}
                         src="https://images.unsplash.com/photo-1566275529824-cca6d008f3da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cGhvdG98ZW58MHx8MHx8&w=1000&q=80"/>
                </div>
            </div>
        </div>
    );
};

