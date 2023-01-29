import React from 'react';
import styles from './Button.module.scss';

const Button = ({ buttonTitle, buttonColor, onClick }) => {

  return (
    <button className={styles.button} style={{ backgroundColor: buttonColor }} onClick={onClick}>{buttonTitle}</button>
  )
}

export default Button;
