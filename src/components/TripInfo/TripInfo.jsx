import React from 'react';
import styles from './TripInfo.module.scss';
import { useParams } from 'react-router-dom';

const TripInfo = (props) => {
  const params = useParams();

  console.log(params)
  // console.log(trip)
  return (
    <>
      <h1>This is a TripInfo Page</h1>
      <div className={styles.tripInfo}>
        <div className={styles.tripInfo__container}>
          <div className={styles.tripInfo__route}>

          </div>
        </div>
      </div>
    </>
  )
}

export default TripInfo;