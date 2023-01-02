import React from 'react';
import styles from './Button.module.scss';

const Button = ({ buttonTitle, buttonColor }) => {

  return (
    <button className={styles.button} style={{ backgroundColor: buttonColor }}>{buttonTitle}</button>
  )
}

export default Button;
