import React from 'react';
import styles from './TripCard.module.scss';

const TripCard = ({ trip: { passengerName, date, startPoint, endPoint, startTime } }) => {

  
  return (
    <div className={styles.tripCard}>

      <h2>This is TripCard</h2>

      <div className={styles.tropCard__dates}>
        <div className={styles.tripCard__date_date}>{date}</div>
        <div className={styles.tripCard__date_time}>{startTime}</div>
      </div>

      <div className={styles.tripCard__route}>
        <div className={styles.tripCard__route_point}>{startPoint}</div>
        <div className={styles.tripCard__route_point}>{endPoint}</div>
      </div>
      <div className={styles.tripCard__passenger}>{passengerName}</div>
    </div>
  )
}

export default TripCard;