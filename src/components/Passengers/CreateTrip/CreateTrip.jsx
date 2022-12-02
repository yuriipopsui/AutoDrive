import React from 'react';
import styles from './CreateTrip.module.scss';
import FormOrder from '../../common/FormOrder/FormOrder';

const CreateTrip = (props) => {

  return (
    <div className={styles.createTrip}>
      <h1 className={styles.createTrip__title}>На цій сторінці Ви можете подати заявку, щоб знайти водія для своєї поїздки </h1>
      <FormOrder />
    </div>
  )

}

export default CreateTrip;