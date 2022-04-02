import React from 'react';
import s from './Nav.module.css'
import {CssImg} from "../common/imege/TSImg/CssImg";
import {Menu} from "./menu/Menu";

export type MenuType = {
    title: string
    img: {}
}

export const Nav = () => {

    const menu: Array<MenuType> = ([
        {title: 'Home', img: <CssImg/>},
        {title: 'About', img: <CssImg/>},
        {title: 'Resume', img: <CssImg/>},
        {title: 'Portfolio', img: <CssImg/>},
        {title: 'Contact', img: <CssImg/>},

    ])

    return (
        <div className={s.nav}>
            <div className={s.menu}>
                <p className={s.text}>Menu</p>
                <Menu menu={menu}/>
            </div>
        </div>
    );
};

