import React, { useState, useLayoutEffect } from 'react';
import Button from '../common/Button/Button';
import styles from './TripOffer.module.scss';
import TripOfferCard from './TripOfferCard/TripOfferCard';


const TripOffer = ({ tripsOffer, find }) => {

  const [offerTrips, setOfferTrips] = useState(tripsOffer);

  useLayoutEffect(() => {
    let start = tripsOffer.filter(trip => {
      return trip.startPoint === find.startPoint;
    })
    let filtered = start.filter(trip => {
      return trip.endPoint === find.endPoint;
    })
    console.log(filtered);
    setOfferTrips(filtered);
  }, [tripsOffer, find.startPoint, find.endPoint])

  // console.log(offerTrips)
  // console.log(find);

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
          <h2>Вибачте, але за Вашим маршрутом поїздок не знайдено!</h2>
          :
          offerTrips.map((elem, index) => {
            return (
              <TripOfferCard trip={elem} key={index} />
            );
          })}
    </div>
  </div>;
}
export default TripOffer;
