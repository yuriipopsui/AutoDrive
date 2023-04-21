import React, { useState } from 'react';
import styles from './Register.module.scss';
import { useDispatch } from 'react-redux';
import Button from '../common/Button/Button';
import { userRegister } from '../../store/reducers/registerReducer';

const RegisterForm = () => {

  const dispatch = useDispatch();
  const [userData, setUserData] = useState({ username: '', password: '', role: '' });

  const onClickHandler = (e) => {
    e.preventDefault();
    dispatch(userRegister({ userData }));
  }

  const onChangeHandler = (e) => {
    e.preventDefault();
    setUserData({ ...userData, [e.target.name]: e.target.value });
    console.log(userData);
  }

  return (
    <div className={styles.login}>
      <h1 className={styles.login__title}>Сторінка реєстрації</h1>
      <form className={styles.login__form} action="">
        <label htmlFor="userName">User Name</label>
        <input id="userName" className={styles.loginform__name} type="text" placeholder="Name" name="username" value={userData.username} onChange={onChangeHandler} />
        <label htmlFor="password">Password</label>
        <input id="password" className={styles.loginform__password} type="password" placeholder="Password" name="password" value={userData.password} onChange={onChangeHandler} />
        <label htmlFor="role">Role</label>
        <select id="role" className={styles.loginform__password} name="role" defaultValue={"Default"} onChange={onChangeHandler}>
          <option value="Default" disabled>-- choose role --</option>
          <option value="driver">Driver</option>
          <option value="passenger">Passenger</option>
        </select>



        <Button buttonTitle={'Register'} onClick={onClickHandler} />
      </form>
    </div>

  )
}

export default RegisterForm;