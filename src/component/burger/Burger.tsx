import React from 'react';
import {Nav} from "../nav/Nav";

type BurgerPropsType = {
    active: boolean
}
export const Burger: React.FC<BurgerPropsType> = ({active}) => {

    return (
        <div className={`$styled $s.m_menu`}>
            {active && <div><Nav/></div>}
        </div>

    )
}

