import React from 'react';
import styles from './Login.module.scss';
import Button from '../common/Button/Button';

const Login = ({ buttonTitle }) => {
  return (
    <div className={styles.login}>
      <h1 className={styles.login__title}>Сторінка реєстрації</h1>
      <form className={styles.login__form} action="">
        <label htmlFor="userName">User Name</label>
        <input id="userName" className={styles.loginform__name} type="text" placeholder="Name" />
        <label htmlFor="password">Password</label>
        <input id="password" className={styles.loginform__password} type="password" placeholder="Password" />
        <label htmlFor="rememberMe">Rememer Me</label>
        <input id="rememberMe" type="checkbox" />
        <Button buttonTitle={'Submit'} />
      </form>
    </div>

  )
}

export default Login;