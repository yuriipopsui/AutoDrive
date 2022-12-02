import React from 'react';
import styles from './Sidebar.module.scss';
import { Link, useLocation } from 'react-router-dom';


const Sidebar = () => {
  const location = useLocation();
  const path = location.pathname.split("/");

  return (
    <div className={styles.sidebar}>
      <Link className={styles.sidebar__link} to={`${path[1] === "drivers" ? path[1] : "passengers"}/create_trip`}>
        Створити поїздку
      </Link>
      <Link className={styles.sidebar__link} to={`${path[1] === "drivers" ? path[1] : "passengers"}/my_trips`}>
        Мої поїздки
      </Link>
      <Link className={styles.sidebar__link} to={`/my_messages`}>Мої повідомлення</Link>
    </div>
  )
}

export default Sidebar;


