import React from 'react';
import s from './Nav.module.css'
import {CssImg} from "../../common/imege/TSImg/CssImg";
import {Menu} from "./menu/Menu";
import styled from "styled-components";

export type MenuType = {
    title: string
    img: {}
}

const NavWrapper = styled.div<{ width: number, height: number }>`
  transform: ${props => `translate(${props.width}%,${props.height}rem)`};
  transition: transform 1s;

`

type PropsType = {
    active: boolean
}
export const Nav = (props: PropsType) => {

    const menu: Array<MenuType> = ([
        {title: 'Home', img: <CssImg/>},
        {title: 'About', img: <CssImg/>},
        {title: 'Resume', img: <CssImg/>},
        {title: 'Portfolio', img: <CssImg/>},
        {title: 'Contact', img: <CssImg/>},

    ])

    let width = props.active ? 0 : 100
    return (
        <div>
            <NavWrapper width={width} height={0}>
                <div className={s.nav}>
                    <div className={s.menu}>
                        <p className={s.text}>Menu</p>
                        <Menu menu={menu}/>
                    </div>
                </div>
            </NavWrapper>
        </div>
    );
};

