import React from 'react';
import styles from './MyTripsDriver.module.scss';
import data from '../../../data/db.json';
import { useNavigate } from 'react-router-dom';

const MyTripsDriver = (props) => {

  console.log(data.passengers[0]);

  const navigate = useNavigate();
  const user = data.drivers[0];

  return (
    <div className={styles.myTripsDriver}>
      <h1 className={styles.myTripsDriver__title}>Всі поїздки обранного водія</h1>
      <h3 className={styles.myTripsDriver__text}>
        Вітаємо {user.name}! На цій сторінці ви знайдете усі ваші поїздки.
      </h3>
      <table className={styles.myTripsDriver__table}>
        <thead>
          <tr>
            <th>My Trips</th>
          </tr>
          <tr>
            <th className={styles.myTripsDriver__table_header}>Date</th>
            <th className={styles.myTripsDriver__table_header}>Route</th>
            <th className={styles.myTripsDriver__table_header}>Passengers</th>
            <th className={styles.myTripsDriver__table_header}>Car</th>
          </tr>
        </thead>
        <tbody>
          {
            user.trips.map(elem => {
              return (
                <tr>
                  <td className={styles.myTripsDriver__table_sell}>{elem.date}</td>
                  <td className={styles.myTripsDriver__table_sell}>{elem.route}</td>
                  <td className={styles.myTripsDriver__table_sell}>
                    {
                      elem.passengers.map(item => <>{item} </>)
                    }
                  </td>
                  <td className={styles.myTripsDriver__table_sell}>{elem.car}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      <button className={styles.myTripsDriver__button} onClick={() => navigate("/drivers")}>Back</button>
    </div>
  )
}

export default MyTripsDriver;