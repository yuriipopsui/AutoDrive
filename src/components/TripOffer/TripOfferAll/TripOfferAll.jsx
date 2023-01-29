import React, { useState } from 'react';
import Button from '../../common/Button/Button';
import styles from './TripOfferAll.module.scss';
import TripOfferCard from '../TripOfferCard/TripOfferCard';
import { useEffect } from 'react';

// TripOfferAll just render All Triips from data base ( This page is more for the developer, almost service Page )

const TripOfferAll = ({ tripsOffer }) => {
  console.log(tripsOffer);
  const [offerTrips, setOfferTrips] = useState(tripsOffer);

  useEffect(() => {
    setOfferTrips(tripsOffer)
  }, [tripsOffer])

  const timeSortingEarlier = () => {
    const result = offerTrips.slice().sort((x, y) =>
      +x.time.split('').slice(0, 2).join('') - +y.time.split('').slice(0, 2).join('')
    );
    setOfferTrips(result);
  }

  const timeSortingLater = () => {
    const result = offerTrips.slice().sort((x, y) =>
      +y.time.split('').slice(0, 2).join('') - +x.time.split('').slice(0, 2).join('')
    );
    setOfferTrips(result);
  }

  return <div className={styles.tripOffer}>

    <div className={styles.tripOffer__manage}>
      <h3 className={styles.tripOffer__manage_title}>Сортувати за</h3>
      <div className={styles.tripOffer__manage_filter}>
        <Button className={offerTrips.length === 0 ? styles.tripOffer__manage_button : ''} buttonTitle="Раніші" buttonColor="#fff" onClick={timeSortingEarlier} />
        <Button buttonTitle="Піздніші" buttonColor="#fff" onClick={timeSortingLater} />
      </div>
    </div>

    <div className={styles.tripOffer__content}>
      {
        offerTrips.length === 0
          ?
          <h2>Вибачте, але нічого не знайдено!</h2>
          :
          offerTrips.map((elem, index) => {
            return (
              <TripOfferCard trip={elem} key={index} />
            );
          })}
    </div>
  </div>;
}
export default TripOfferAll;
