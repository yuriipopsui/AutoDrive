import React, { useState } from 'react';
import Button from '../common/Button/Button';
import styles from './TripOffer.module.scss';
import TripOfferCard from './TripOfferCard/TripOfferCard';


const TripOffer = ({ tripsOffer }) => {

  const [offerTrips, setOfferTrip] = useState(tripsOffer);

  const offerData = (data) => {
    return setOfferTrip(data);
  }

  const timeSortingEarlier = () => {
    console.log('Working Up!');
    const result = tripsOffer.slice().sort((x, y) =>
      +x.time.split('').slice(0, 2).join('') - +y.time.split('').slice(0, 2).join('')
    );
    console.log(result);
    return offerData(result);
  }

  const timeSortingLater = () => {
    console.log('Working Down!');
    const result = tripsOffer.slice().sort((x, y) =>
      +y.time.split('').slice(0, 2).join('') - +x.time.split('').slice(0, 2).join('')
    );
    console.log(result);
    return offerData(result);
  }

  return <div className={styles.tripOffer}>

    <div className={styles.tripOffer__manage}>
      <Button buttonTitle="Show All" buttonColor="#fff" />
      <h3 className={styles.tripOffer__manage_title}>Сортувати за</h3>
      <div className={styles.tripOffer__manage_filter}>
        <Button buttonTitle="Раніші" buttonColor="#fff" onClick={timeSortingEarlier} />
        <Button buttonTitle="Піздніші" buttonColor="#fff" onClick={timeSortingLater} />
      </div>
    </div>

    <div className={styles.tripOffer__container}>
      {offerTrips.map((elem, index) => {
        return (
          <TripOfferCard trip={elem} key={index} />
        );
      })}
    </div>
  </div>;

}

export default TripOffer;
