import React from 'react';
import styles from './TripOffer.module.scss';
import TripOfferCard from './TripOfferCard/TripOfferCard';

const TripOffer = ({ tripsOffer }) => {

  console.log(tripsOffer);

  return <div className={styles.tripOffer}>
    <h1 className={styles.tripOffer__title}>
      This Is a TripOffer Page
    </h1>
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
