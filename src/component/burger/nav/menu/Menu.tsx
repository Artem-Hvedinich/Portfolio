import React from 'react';
import {MenuType} from "../Nav";
import s from './Menu.module.css'

type propsMenuType = {
    menu: Array<MenuType>
}

export const Menu = (props: propsMenuType) => {
    return (
        <div>
            {props.menu.map((m,index) =>
                <div key={index} className={s.menu}>
                    <span>{m.img}</span>
                    <p className={s.text}>{m.title}</p>
                </div>)}
        </div>
    );
};

