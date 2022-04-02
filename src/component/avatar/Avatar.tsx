import React from 'react';
import s from './Avatar.module.css' ;

export const Avatar = () => {
    return (
        <div className={s.inner_content}
             style={{transform: 'translate(0%, 0px) rotateY(20deg) ', opacity: '1', zIndex: '-20'}}
        >
            <div className={s.name} style={{opacity: '1'}}>
                <p className={s.small}>Hvedinich Artem</p>
                <div className={s.seperator_line}/>
            </div>

            <div className={s.picture_box}>
                <div className={s.picture}/>
                <canvas className={s.photo}
                />
            </div>
            <div className={`${s.frame_1} ${s.frame}`}
                 style={{borderStyle: 'solid', borderWidth: '0.1rem', borderColor: '#FFFFFF'}}/>
            <div className={`${s.frame_2} ${s.frame}`}
                 style={{borderStyle: 'solid', borderWidth: '0.1rem', borderColor: '#FFFFFF'}}/>
            <div className={`${s.frame_3} ${s.frame}`}
                 style={{borderStyle: 'solid', borderWidth: '0.1rem', borderColor: '#FFFFFF'}}/>

        </div>
    );
};