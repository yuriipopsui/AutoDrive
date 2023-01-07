import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { findTrip } from '../../../store/reducers/createTripReducer'
import styles from './SearchFormMode.module.scss';

//Searchform for Search of trips. 

const SearchFormMode = ({ trips }) => {
  // const navigate = useNavigate();
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
    // storageEditor();
    // return navigate('tripsearch');
  }

  // let newStorage = []

  // const storageEditor = () => {
  //   let storage = JSON.parse(localStorage.getItem('localTrips'));
  //   console.log(storage);
  //   // const storageArr = [storage[0], storage[1], storage[2]];
  //   // storageArr.map(item => {
  //   //   delete item.place;
  //   //   item.seats = 2;
  //   //   return true
  //   // }
  //   // )
  //   newStorage = storage.map((item, index) => {
  //     if (index === 0 || index === 1 || index === 2) {
  //       delete item.place;
  //       item.seats = "2";

  //     }
  //     return item;
  //   })

  //   console.log(newStorage);

  //   localStorage.setItem('localOffers', JSON.stringify(newStorage));
  // }

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

