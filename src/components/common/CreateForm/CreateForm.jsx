import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { offerTrip } from '../../../store/reducers/driversReducer';
import styles from './CreateForm.module.scss';
import { idmaker } from '../api/idmaker';

const CreateForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [trip, setTrip] = useState({ startPoint: '', endPoint: '', date: '', time: '', seats: '' });

  const onChangeHandler = (event) => {
    event.preventDefault();
    setTrip({ ...trip, [event.target.name]: event.target.value });
  }

  const onSubmit = (data) => {
    data.preventDefault();
    dispatch(offerTrip({ ...trip, id: idmaker }));
    setTrip({ startPoint: '', endPoint: '', name: '', seats: '' });
    return navigate('/tripoffer');
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
        <input className={styles.searchForm_input} type="text" id="when" name="date"
          placeholder="Коли" value={trip.name}
          onChange={onChangeHandler} />
        <input className={styles.searchForm_input} type="text" id="time" name="time"
          placeholder="Час" value={trip.name}
          onChange={onChangeHandler} />
        <input className={styles.searchForm_input} type="text" id="userPlace" name="seats"
          placeholder="Місць" value={trip.seats}
          onChange={onChangeHandler} />
        <button className={styles.searchForm_button} onClick={onSubmit}>
          Поділитися поїздкою
        </button>
      </form>
    </>
  )
}

export default CreateForm;


