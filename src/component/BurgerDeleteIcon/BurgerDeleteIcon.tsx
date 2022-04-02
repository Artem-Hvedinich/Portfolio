import React from 'react';
import s from './BurgerDeleteIcon.module.css'

type Props = {
    active: boolean
    onChange: (active: boolean) => void
}
export const BurgerDeleteIcon = (props: Props) => {
    const onClick = () => {
        props.onChange(!props.active)
    }

    return (
        <div>
            {
                props.active
                    ? <div onClick={onClick} className={s.m_menu_button}>
                        <div className={s.burger}>
                            <div className={s.line} style={{transform: "translate(0px, 0.2rem) rotate(45deg)"}}></div>
                            <div className={s.line} style={{transform: "translate(0px, -0.4rem) rotate(-45deg)"}}></div>
                        </div>
                    </div>
                    : <div onClick={onClick} className={s.m_menu_button}>
                        <div className={s.burger}>
                            <div className={s.line} style={{transform: "translate(0px, 0px)"}}></div>
                            <div className={s.line} style={{transform: "translate(0px, 0px)"}}></div>
                        </div>
                    </div>
            }
        </div>
    )
}