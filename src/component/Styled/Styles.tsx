import React from 'react';
import s from './Styles.module.css';

export const Styles = () => {
    return (<>
            <div style={{transform: 'translate(10%, 0px) rotate(30deg) ', opacity: '0.3', zIndex: '-20'}}>
                <div className={s.code} style={{right: '0', top: '1rem'}}/>
                <div className={s.code} style={{right: '0.5rem', top: '1.5rem'}}/>
                <div className={s.code} style={{right: '1rem', top: '2rem'}}/>
                <div className={s.code} style={{right: '1.5rem', top: '2.5rem'}}/>
                <div className={s.code} style={{right: '2rem', top: '3rem'}}/>
                <div className={s.code} style={{right: '2.5rem', top: '3.5rem'}}/>
                <div className={s.code} style={{right: '3rem', top: '4rem'}}/>
                <div className={s.code} style={{right: '3.5rem', top: '4.5rem'}}/>
                <div className={s.code} style={{right: '4rem', top: '5rem'}}/>
            </div>
        </>
    );
};
