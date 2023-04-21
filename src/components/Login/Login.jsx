import React, { useState } from 'react';
import styles from './Login.module.scss';
import { useDispatch } from 'react-redux';
import Button from '../common/Button/Button';
import { userAuth } from '../../store/reducers/authReducer';
import { NavLink } from 'react-router-dom';

const Login = ({ buttonTitle }) => {

  const dispatch = useDispatch();
  const [userData, setUserData] = useState({ username: '', password: '' });

  const onClickHandlerLogin = (e) => {
    e.preventDefault();
    dispatch(userAuth({ userData }));
  }

  const onChangeHandler = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value })
  }

  return (
    <div className={styles.login}>
      <h1 className={styles.login__title}>Сторінка LOGIN</h1>
      <form className={styles.login__form} action="">
        <label htmlFor="userName">User Name</label>
        <input id="userName" className={styles.loginform__name} type="text" placeholder="Name" name="username" value={userData.username} onChange={onChangeHandler} />
        <label htmlFor="password">Password</label>
        <input id="password" className={styles.loginform__password} type="password" placeholder="Password" name="password" value={userData.password} onChange={onChangeHandler} />
        <label htmlFor="rememberMe">Rememer Me</label>
        <input id="rememberMe" type="checkbox" />

        <Button buttonTitle={'Log In'} onClick={onClickHandlerLogin} />
        <p>OR</p>
        <NavLink to="/register">Register Now</NavLink>

      </form>
    </div>

  )
}

export default Login;