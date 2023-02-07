import React, { useState, useEffect } from 'react';
import styles from './TripInfo.module.scss';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getTripInfoOperation } from '../../store/reducers/driversReducer';
import Button from '../common/Button/Button';

const TripInfo = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const [tripInfo, setTripInfo] = useState();

  console.log(params);

  useEffect(() => {
    dispatch(getTripInfoOperation(params.tripId, setTripInfo));
  }, [dispatch, params.tripId])

  return (
    <>
      <h1>This is a TripInfo Page</h1>
      <div className={styles.tripInfo}>
        {
          tripInfo &&
          <div className={styles.tripInfo__container}>
            <div className={styles.tripInfo__route}>
              <div className={styles.tripInfo__route_start}>
                {tripInfo.startPoint}
              </div>
              <div className={styles.tripInfo__route_end}>
                {tripInfo.endPoint}
              </div>
            </div>
            <div className={styles.tripInfo__dateTime}>
              <div className={styles.tripInfo__date}>{tripInfo.date}</div>
              <div className={styles.tripInfo__time}>{tripInfo.time}</div>
            </div>
            <div className={styles.tripInfo__seats}>
              Залишилось Місць: {tripInfo.seats}
            </div>
            <Button className={styles.tripInfo__button} buttonTitle="Забронювати" buttonColor="lightblue" />
          </div>
        }
      </div>
    </>
  )
}

export default TripInfo;