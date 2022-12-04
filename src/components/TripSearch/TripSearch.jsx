import React from 'react';
import styles from './TripSearch.module.scss';
import TripCard from './TripCard/TripCard';

const TripSearch = (props) => {

  console.log(props);
  const trips = props.tripsRequest;
  console.log(trips);

  return (

    <div className={styles.tripSearch}>
      <h1>This is TripSearch page</h1>
      <div className={styles.tripSearch__container}>
        {
          trips.map((elem, index) => {

            console.log(elem);
            return (
              <TripCard trip={elem} key={index} />
            )
          })
        }
      </div>
    </div>


  )
}

export default TripSearch;