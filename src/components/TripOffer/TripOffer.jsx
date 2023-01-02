import React from 'react';
import Button from '../common/Button/Button';
import styles from './TripOffer.module.scss';
import TripOfferCard from './TripOfferCard/TripOfferCard';

const TripOffer = ({ tripsOffer }) => {

  console.log(tripsOffer);

  return <div className={styles.tripOffer}>

    <div className={styles.tripOffer__manage}>
      <Button buttonTitle="Show All" buttonColor="#fff" />
      <h3 className={styles.tripOffer__manage_title}>Сортувати за</h3>
      <div className={styles.tripOffer__manage_filter}>
        <Button buttonTitle="Найраньші" buttonColor="#fff" />
        <Button buttonTitle="Найдешевші" buttonColor="#fff" />
      </div>
    </div>

    <div className={styles.tripOffer__container}>
      {tripsOffer.map((elem, index) => {

        console.log(elem.place);
        return (
          <TripOfferCard trip={elem} key={index} />
        );
      })}
    </div>

  </div>;

}

export default TripOffer;
