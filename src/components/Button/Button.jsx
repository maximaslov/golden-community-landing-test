import React from 'react';
import styles from './Button.module.css';

const Button = ({text, onBtnClick}) => {
    return (
        <button className={styles.mainBtn}>{text}</button>
    )
}

export default Button;