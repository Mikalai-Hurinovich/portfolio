import React from 'react';
import s from './Button.module.scss'

const Button = (props) => {
    return (
        <div className={s.button__wrapper}>
            <button className={`${s.customButton} ${s.btn}`}>
                <span>{props.title}</span>
            </button>
        </div>
    );
};

export default Button;