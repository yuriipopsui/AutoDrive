import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import styles from './CreateTripForm.module.scss';
import { createTripOperation } from '../../../store/reducers/driversReducer';

const schema = Yup.object().shape({
  startPoint: Yup.string().required("Вкажіть початок маршруту").min(3, "Назва початкової точки занадто коротка"),
  endPoint: Yup.string().required("Вкажіть кінець маршруту").min(3, "Назва кінцевої точки занадто коротка"),

});

const CreateForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [trip, setTrip] = useState({
    startPoint: '',
    endPoint: '',
    date: new Date().toISOString().slice(0, 10),
    time: new Date().toISOString().slice(11, 16),
    seats: 1
  });
  const { register, handleSubmit, formState: { errors }, clearErrors } = useForm({
    resolver: yupResolver(schema)
  })

  const onChangeHandler = (event) => {
    event.preventDefault();
    clearErrors(event.target.name);
    setTrip({ ...trip, [event.target.name]: event.target.value });
  }

  const onSubmit = () => {
    dispatch(createTripOperation({ ...trip }));
    setTrip({
      startPoint: '',
      endPoint: '',
      date: new Date().toISOString().slice(0, 10),
      time: new Date().toISOString().slice(11, 16),
      seats: 1
    });
    return navigate('all_trips');
  }

  return (
    <>
      <form className={styles.createForm} action="" onSubmit={handleSubmit(onSubmit)}>
        <input className={`${styles.createForm__input} ${errors.startPoint ? styles.createForm__error : ''}`} {...register("startPoint")} type="text" id="tripFrom" name="startPoint"
          placeholder="Звідки" value={trip.startPoint}
          onChange={onChangeHandler} />

        <input className={`${styles.createForm__input} ${errors.startPoint ? styles.createForm__error : ''}`} {...register("endPoint")} type="text" id="tripTo" name="endPoint"
          placeholder="Куди" value={trip.endPoint}
          onChange={onChangeHandler} />

        <input className={`${styles.createForm__input} ${styles.createForm__input_special}`} {...register("date")} type="date" id="when" name="date"
          placeholder="Коли" value={trip.date}
          onChange={onChangeHandler} />

        <input className={`${styles.createForm__input} ${styles.createForm__input_special}`} {...register("time")} type="time" id="time" name="time"
          placeholder="Час" value={trip.time}
          onChange={onChangeHandler} />


        <input className={`${styles.createForm__input} ${styles.createForm__input_special} ${styles.createForm__input_number}`}
          {...register("seats")}
          type="number" id="userPlace" name="seats"
          placeholder="Місць" value={trip.seats} min="1" max="8"
          onChange={onChangeHandler} />
        <button className={styles.createForm__button}>
          Поділитися поїздкою
        </button>
      </form>

      {/* Logging of Errors in Form */}

      <div className={styles.createForm__errors}>
        {Object.entries(errors).map((e, i) => {
          return <p key={i}>{e[1].message}</p>
        })}
      </div>
    </>
  )
}

export default CreateForm;



