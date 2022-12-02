import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.scss';

const Navbar = (props) => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.nav}>
        <NavLink className={styles.nav__link} to='/'>Home</NavLink>
        <NavLink className={styles.nav__link} to='/drivers'>Drivers</NavLink>
        <NavLink className={styles.nav__link} to='/passengers'>Passengers</NavLink>
        <NavLink className={styles.nav__link} to='/login'>Login</NavLink>
      </div>
    </nav>

  )
}

export default Navbar;