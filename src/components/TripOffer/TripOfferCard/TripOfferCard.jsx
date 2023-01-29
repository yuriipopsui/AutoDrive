import React from 'react';
import styles from './TripOfferCard.module.scss';

const TripOfferCard = ({ trip, trip: { startPoint, endPoint, seats, date, time, rate = 5 }, onClick }) => {
  let endWord = (seats) => {
    let lastLetter = null;
    let lastNumber = seats.toString().split('').slice(-1);
    if (seats > 10 && seats < 20) {
      lastLetter = 'ь';
      return lastLetter;
    }
    if (+lastNumber === 1) {
      lastLetter = 'е';
    }
    else if (+lastNumber > 4 || +lastNumber === 0) {
      lastLetter = 'ь';
    }
    else {
      lastLetter = 'я';
    }
    return lastLetter;
  }

  return (
    <div className={styles.offerCard} onClick={onClick}>
      {!trip && <h2>There are no offers on your route!</h2>}
      <div className={styles.offerCard__route}>
        <div className={styles.offerCard__route_point}>{startPoint}</div>
        <div className={styles.offerCard__route_point}>{endPoint}</div>
      </div>
      <div className={styles.offerCard__info}>
        <div className={styles.offerCard__route_car}>{date}</div>
        <div className={styles.offerCard__route_phone}>{time}</div>
      </div>
      <div className={styles.offerCard__seats}>
        {`Я маю ${seats} місц${endWord(seats)}`}
      </div>
      <div className={styles.offerCard__rate}>
        {`Рейтінг водія: ${rate}`}
      </div>
    </div>
  )
}

export default TripOfferCard;