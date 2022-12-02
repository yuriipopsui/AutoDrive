import React from 'react';
import styles from './Drivers.module.scss';
// import FormOrder from '../common/FormOrder/FormOrder';
import FormOrderDriver from '../common/FormOrderDriver/FormOrderDriver';

const Drivers = (props) => {

  return (
    <div className={styles.drivers}>
      {/* <h1 className={styles.drivers__title}>This is Drivers Page!</h1> */}
      <p className={styles.drivers__text}>
        Вітаємо, Водій! На нашому сайті Ви можете створити поїздку і, тим самим зменшити її вартість для себе. Для створення поїздки заповніть, будь-ласка, форму нижче.
      </p>
      <FormOrderDriver />
    </div>
  )
}
export default Drivers;