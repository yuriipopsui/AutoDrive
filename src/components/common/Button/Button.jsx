import React from 'react';
import styles from './Button.module.scss';

const Button = ({ buttonTitle }) => {

  return (
    <button className={styles.button}>{buttonTitle}</button>
  )
}

export default Button;
