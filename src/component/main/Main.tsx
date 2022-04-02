import React from 'react';
import s from './Main.module.css'

export const Main = () => {
    return (
        <div className={s.main}>
            <div>
                <div className={s.el_title}>
                    <p className={s.title}>INTRODUCTION</p>
                </div>

                <div className={s.el_text}>
                    <h1 className={s.text}>I'm Artem Hvedinich
                        Frontend React Developer</h1>
                </div>
                <div className={s.seperator_box}>
                    <div className={s.seperator_line}></div>
                </div>
            </div>

        </div>
    )
}


