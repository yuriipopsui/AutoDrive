import React from 'react';
import styles from './CreateTripDriver.module.scss';
// import FormOrder from '../../common/FormOrder/FormOrder';
import FormOrderDriver from '../../common/FormOrderDriver/FormOrderDriver';

const CreateTripDriver = (props) => {

  return (
    <div className={styles.createTripDriver}>
      <h1 className={styles.createTripDriver__title}>
        На цій сторінці Ви можете створити поїздку і знайти пасажирів
      </h1>
      <FormOrderDriver />
    </div>
  )

}

export default CreateTripDriver;