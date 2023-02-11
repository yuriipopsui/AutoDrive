import React, { useState, useEffect } from 'react';
import styles from './SuccessBooking.module.scss';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getTripInfoOperation } from '../../../store/reducers/driversReducer';

const SuccessBooking = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const [trip, setTrip] = useState()

  useEffect(() => {
    dispatch(getTripInfoOperation(params.tripId, setTrip))
  }, [dispatch, params.tripId])

  // console.log(params);
  return (
    <div className={styles.success}>
      <h2 className={styles.success__title}>Вітаємо! Ви забронювали поїздку.</h2>
      {
        trip &&
        <div className={styles.success__container}>
          <div className={styles.success__info}>
            <p>Маршрут: {trip.startPoint} - {trip.endPoint}</p>
            <p>Дата відправлення: {trip.date}</p>
            <p>Час відправлення: {trip.time}</p>
          </div>
          <div className={styles.success__driver}>
            <p>
              Ви можете зв'язатися з водієм за телефоном:
              <a href="tel:+380500000000"> +380500000000 </a>
              та узгодити деталі поїздки.
            </p>
          </div>
        </div>
      }
    </div>
  )
}

export default SuccessBooking;