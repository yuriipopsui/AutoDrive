import React from 'react';
import styles from './TripCard.module.scss';

const TripCard = ({ trip: { name, date, startPoint, endPoint, startTime, place } }) => {

  let endWord = (place) => {
    let lastLetter = null;
    let lastNumber = place.toString().split('').slice(-1);
    if (+lastNumber === 1) {
      lastLetter = 'е';
    }
    else if (+lastNumber > 4) {
      lastLetter = 'ь';
    }
    else {
      lastLetter = 'я';
    }
    return lastLetter;
  }

  return (
    <div className={styles.tripCard}>

      <h2>This is TripCard</h2>

      <div className={styles.tripCard__dates}>
        <div className={styles.tripCard__date_date}>{date}</div>
        <div className={styles.tripCard__date_time}>{startTime}</div>
      </div>

      <div className={styles.tripCard__route}>
        <div className={styles.tripCard__route_point}>{startPoint}</div>
        <div className={styles.tripCard__route_point}>{endPoint}</div>
      </div>
      <div className={styles.tripCard__person}>
        <div className={styles.tripCard__passenger}>{name}</div>
        <div className={styles.tripCard__place}>
          {`Потрібно ${place} місц${endWord(place)}`}
        </div>
      </div>
    </div>
  )
}

export default TripCard;