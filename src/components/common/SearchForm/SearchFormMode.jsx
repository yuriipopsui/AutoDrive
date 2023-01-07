import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { findTrip } from '../../../store/reducers/createTripReducer'
import styles from './SearchFormMode.module.scss';

//Searchform for Search of trips. 

const SearchFormMode = ({ trips }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [findObject, setFindObject] = useState({ startPoint: '', endPoint: '', date: '', seats: '' });

  const onChangeHandler = (event) => {
    event.preventDefault();
    setFindObject({ ...findObject, [event.target.name]: event.target.value });
  }

  const onSubmit = (data) => {
    data.preventDefault();
    console.log(findObject);
    dispatch(findTrip({ ...findObject }));
    setFindObject({ startPoint: '', endPoint: '', date: '', seats: '' });

    return navigate('/tripoffer');
  }



  return (
    <>
      <form className={styles.searchForm} action="" onSubmit={() => onSubmit(findObject)}>
        <input className={styles.searchForm_input} type="text" id="fromWear" name="startPoint"
          placeholder="Звідки" value={findObject.startPoint}
          onChange={onChangeHandler} />
        <input className={styles.searchForm_input} type="text" id="wear" name="endPoint"
          placeholder="Куди" value={findObject.endPoint}
          onChange={onChangeHandler} />
        <input className={styles.searchForm_input} type="text" id="userName" name="date"
          placeholder="Коли" value={findObject.date}
          onChange={onChangeHandler} />
        <input className={styles.searchForm_input} type="text" id="userPlace" name="seats"
          placeholder="Місць" value={findObject.seats}
          onChange={onChangeHandler} />
        <button className={styles.searchForm_button} onClick={onSubmit}>
          Знайти
        </button>
      </form>
    </>
  )
}

export default SearchFormMode;

