import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createTrip } from '../../../store/reducers/createTripReducer'
import styles from './SearchForm.module.scss';
import { idmaker } from '../api/idmaker';

//Searchform for Search of trips. 

const SearchForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const idmaker = (Date.now().toString().split('').slice(-5).join(''));

  const [trip, setTrip] = useState({ startPoint: '', endPoint: '', name: '', place: '' });

  const onChangeHandler = (event) => {
    event.preventDefault();
    setTrip({ ...trip, [event.target.name]: event.target.value });
  }

  const onSubmit = (data) => {
    data.preventDefault();
    // console.log(trip);
    dispatch(createTrip({ ...trip, id: idmaker }));
    setTrip({ startPoint: '', endPoint: '', name: '', place: '' });
    return navigate('tripsearch');
  }

  return (
    <>

      <form className={styles.searchForm} action="" onSubmit={() => onSubmit(trip)}>
        <input className={styles.searchForm_input} type="text" id="fromWear" name="startPoint"
          placeholder="Звідки" value={trip.startPoint}
          onChange={onChangeHandler} />
        <input className={styles.searchForm_input} type="text" id="wear" name="endPoint"
          placeholder="Куди" value={trip.endPoint}
          onChange={onChangeHandler} />
        <input className={styles.searchForm_input} type="text" id="userName" name="name"
          placeholder="Коли" value={trip.name}
          onChange={onChangeHandler} />
        <input className={styles.searchForm_input} type="text" id="userPlace" name="place"
          placeholder="Місць" value={trip.place}
          onChange={onChangeHandler} />
        <button className={styles.searchForm_button} onClick={onSubmit}>
          Відправити заявку
        </button>
      </form>
    </>
  )
}

export default SearchForm;



