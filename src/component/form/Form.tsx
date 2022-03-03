import React from 'react';
import s from './Form.module.css'
import c from "../common/styles/Contanier.module.css";

export const Form = () => {
    return (
        <div className={s.form_block}>
            <div className={`${s.form_container} ${c.container}`}>
                <h3>Contact</h3>
                <form>
                    <input placeholder={'Name'} className={s.input}/>
                    <input placeholder={'Your contact'} className={s.input}/>
                    <textarea placeholder={'Your message'} className={s.textarea}/>
                </form>
                <button className={s.button}>SEND MESSAGE</button>
            </div>
        </div>
    );
};

