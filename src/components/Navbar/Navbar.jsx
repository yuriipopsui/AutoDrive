import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Navbar.module.scss';
import { isAuthSelector } from '../../store/selectors/isAuthSelector';
import { isAuthSelectorUser } from '../../store/selectors/isAuthSelector';
import { logOut } from '../../store/reducers/authReducer';

const Navbar = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogOutHandler = (e) => {
    e.preventDefault();
    dispatch(logOut());
    navigate('/');
  }

  const isAuth = useSelector(isAuthSelector);
  const isAuthUser = useSelector(isAuthSelectorUser);
  console.log(isAuthUser);

  return (
    <nav className={styles.navbar}>
      <div className={styles.nav}>
        <NavLink className={styles.nav__link} to='/'>Home</NavLink>
        {
          isAuthUser?.role === 'passenger'
            ? <NavLink className={styles.nav__link} to='/passengers'>Passengers</NavLink>
            : isAuthUser?.role === 'driver'
              ? <NavLink className={styles.nav__link} to='/drivers'>Drivers</NavLink>
              : ''
        }
        {
          isAuth
            ? <NavLink className={styles.nav__link} to='/logout' onClick={onLogOutHandler}>Logout</NavLink>
            : <NavLink className={styles.nav__link} to='/login'>Login</NavLink>
        }
      </div>
    </nav>

  )
}

export default Navbar;