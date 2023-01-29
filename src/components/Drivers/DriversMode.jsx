import React from 'react';
import styles from './DriversMode.module.scss';
import CreateForm from '../common/CreateForm/CreateForm';

const DriversMode = () => {

  return (
    <div className={styles.drivers}>
      <p className={styles.drivers__text}>
        Вітаємо, Водій! Тут Ви можете створити поїздку і зменшити її вартість для себе. Для створення поїздки заповніть, будь-ласка, форму нижче.
      </p>
      <CreateForm />
    </div>
  )
}
export default DriversMode;