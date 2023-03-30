import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { findTrip } from '../../../store/reducers/createTripReducer'
import styles from './SearchTripForm.module.scss';

// Yup is for Validation form

let schema = Yup.object().shape({
  startPoint: Yup.string().required("Вкажіть початок маршруту").min(3, "Назва початкової точки занадто коротка"),
  endPoint: Yup.string().required("Вкажіть кінцеву точку маршруту").min(3, "Назва кінцевої точки занадто коротка"),
  date: Yup.date("Оберіть правильну дату").required("Заповніть це поле"),
});

//Searchform for Search of trips. 

const SearchForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors }, clearErrors } = useForm({
    resolver: yupResolver(schema),
  });

  const [findObject, setFindObject] = useState({
    date: new Date().toISOString().slice(0, 10), seats: 1
  });

  const onChangeHandler = (event) => {
    event.preventDefault();
    clearErrors(event.target.name);
    setFindObject({ ...findObject, [event.target.name]: event.target.value });
  }

  const onSubmit = () => {
    dispatch(findTrip({ ...findObject }));
    return navigate('/tripoffer');
  }

  return (
    <>
      <form className={styles.searchForm} action="" onSubmit={handleSubmit(onSubmit)}>
        <input className={`${styles.searchForm__input} ${errors.startPoint ? styles.searchForm__error : ''}`}
          {...register("startPoint")}
          type="text" id="startPoint" name="startPoint"
          placeholder="Звідки"
          onChange={onChangeHandler} />

        <input className={`${styles.searchForm__input} ${errors.endPoint && styles.searchForm__error}`}
          {...register("endPoint")}
          type="text" id="endPoint" name="endPoint"
          placeholder="Куди"
          onChange={onChangeHandler} />

        <input className={`${styles.searchForm__input} ${styles.searchForm__input_special}`} {...register("date")} type="date" id="userDate" name="date"
          placeholder="Коли" value={findObject.date}
          onChange={onChangeHandler} />

        <input className={`${styles.searchForm__input} ${styles.searchForm__input_special} ${styles.searchForm__input_number}`} {...register("seats")} type="number" id="userSeats" name="seats" min='1' max='8'
          placeholder="Місць" value={findObject.seats}
          onChange={onChangeHandler} />

        <button className={styles.searchForm_button}>
          Знайти
        </button>
      </form>
      <div className={styles.searchForm__errors}>
        {Object.entries(errors).map((e, i) => {
          return <p key={i}>{e[1].message}</p>
        })}
      </div>
    </>
  )
}

export default SearchForm;

