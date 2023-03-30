import React from 'react';
// import { Outlet } from 'react-router-dom'
import styles from './Passengers.module.scss';
import SearchTripForm from '../common/SearchTripForm/SearchTripForm';

const Passengers = () => {

  return (
    <div className={styles.passengers}>
      <p className={styles.passengers__text}>
        Вітаємо! На нашому сайті Ви можете замовити перевезення мікроавтобусом групи до 8 осіб. Також можна замовити перевезення невеликого вантажу по Україні. Зустрінемо в аеропорту Києва та відвеземо в будь-яке місце в Україні. Для замовлення перевезення заповніть, будь-ласка форму нижче.
      </p>
      <SearchTripForm />
      {/* <Outlet /> */}
    </div>
  )
}
export default Passengers;