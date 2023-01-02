import React from 'react';
import styles from './TripOfferCard.module.scss';

const TripOfferCard = ({ trip: { startPoint, endPoint, name, place, userCar, userPhone, rate = 5 } }) => {

  let endWord = (place) => {
    let lastLetter = null;
    let lastNumber = place.toString().split('').slice(-1);
    if (place > 10 && place < 20) {
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
    <div className={styles.offerCard}>
      {/* <h2 className={styles.offerCard__title}>
        This is Offer Card
      </h2> */}

      <div className={styles.offerCard__route}>
        <div className={styles.offerCard__route_point}>{startPoint}</div>
        <div className={styles.offerCard__route_point}>{endPoint}</div>
      </div>
      <div className={styles.offerCard__user}>{name}</div>
      {/* <div className={styles.offerCard__info}>
        <div className={styles.offerCard__route_car}>{userCar}</div>
        <div className={styles.offerCard__route_phone}>{`тел.: ${userPhone}`}</div>
      </div> */}
      <div className={styles.offerCard__place}>
        {`Я маю ${place} місц${endWord(place)}`}
      </div>
      <div className={styles.offerCard__rate}>
        {`Рейтінг водія: ${rate}`}
      </div>
    </div>
  )
}

export default TripOfferCard;