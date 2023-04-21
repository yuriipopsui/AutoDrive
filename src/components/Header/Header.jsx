import React from 'react';
import styles from './Header.module.scss';
import Navbar from '../Navbar/Navbar';
import Logo from '../Logo/Logo';

const Header = (props) => {

  return (

    <div className={styles.header}>
      < Logo />
      < Navbar />
    </div>

  )

}
export default Header;