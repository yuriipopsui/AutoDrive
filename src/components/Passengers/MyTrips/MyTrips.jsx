import React from 'react';
import styles from './MyTrips.module.scss';
import data from '../../../data/db.json';
import { useNavigate } from 'react-router-dom';

const MyTrips = (props) => {

  console.log(data.passengers[0]);

  const navigate = useNavigate();
  const user = data.passengers[0];

  return (
    <div className={styles.myTrips}>
      <h1 className={styles.myTrips__title}>Сторінка всіх поїздок Пассажира</h1>
      <p className={styles.myTrips__text}>
        Вітаємо {user.name}! На цій сторінці ви знайдете усі ваші поїздки.
      </p>
      <table className={styles.myTrips__table}>
        <thead>
          <tr>
            <th>My Trips</th>
          </tr>
          <tr>
            <th className={styles.myTrips__table_header}>Date</th>
            <th className={styles.myTrips__table_header}>Route</th>
            <th className={styles.myTrips__table_header}>Driver</th>
            <th className={styles.myTrips__table_header}>Car</th>
            <th className={styles.myTrips__table_header}>Rating</th>
          </tr>
        </thead>
        <tbody>
          {
            user.trips.map(elem => {
              return (
                <tr>
                  <td className={styles.myTrips__table_sell}>{elem.date}</td>
                  <td className={styles.myTrips__table_sell}>{elem.route}</td>
                  <td className={styles.myTrips__table_sell}>{elem.driver}</td>
                  <td className={styles.myTrips__table_sell}>{elem.car}</td>
                  <td className={styles.myTrips__table_sell}>{elem.rating}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      <button className={styles.myTrips__button} onClick={() => navigate("/passengers")}>Back</button>
    </div>
  )
}

export default MyTrips;