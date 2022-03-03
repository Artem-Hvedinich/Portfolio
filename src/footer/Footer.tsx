import React from 'react';
import s from './Footer.module.css'

export const Footer = () => {
    return (
        <div className={s.footer}>
            <div>
                <h2>Artem Hvedinich</h2>
            </div>
            <div className={s.href}>
                <a href="https://www.linkedin.com/in/artem-hvedinich/">Linkedin</a>
                <a href="https://github.com/Artem-Hvedinich">GitHub</a>
                <a href="https://t.me/hvedinich">Telegram</a>
                <a href="">Instagram</a>
                <a href="">Vkontakte</a>
            </div>
        </div>
    );
};

