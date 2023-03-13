import React from 'react';
import styles from "./Infoblock.module.css";
import Button from "../Button/Button";

const Team = () => {
    return (
        <div className={styles.secondBlock} >
            <h2>Стань частиною команди</h2>
            <p>Хочеш стати частиною команди? Поспілкуватись з розробниками, 
                розпитати дизайнерів, чи дізнатись що таке таргетинг?
                <br />
                <br />
                Долучайся до нашого діскорду, ти опинишся в нашій команді, 
                де зможеш отримати перший досвід у web3 та роботі з командою. 
                Дізнаєшся як працює ІТ сфера та отримаєш досвід. </p>
            <Button text='ПРИЄДНАТИСЯ'/>
        </div>
    )
}

export default Team;