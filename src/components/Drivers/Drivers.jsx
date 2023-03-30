import React from 'react';
import styles from './Drivers.module.scss';
import CreateTripForm from '../common/CreateTripForm/CreateTripForm';

const Drivers = () => {

  return (
    <div className={styles.drivers}>
      <p className={styles.drivers__text}>
        Вітаємо, Водій! Тут Ви можете створити поїздку і зменшити її вартість для себе. Для створення поїздки заповніть, будь-ласка, форму нижче.
      </p>
      <CreateTripForm />
    </div>
  )
}
export default Drivers;