import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createTrip } from '../../../store/reducers/createTripReducer'
import styles from './FormOrder.module.scss';
// import ModalSuccess from '../ModalSuccess/ModalSuccess';



const FormOrder = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const idmaker = (Date.now().toString().split('').slice(-5).join(''));
  // const [modalIsOpen, setModalIsOpen] = useState(false);
  // const openModalHandler = (e) => {
  //   e.preventDefault();
  //   setModalIsOpen(true);
  //   return navigate('/tripsearch')
  // }

  const [trip, setTrip] = useState({ startPoint: '', endPoint: '', name: '', seats: '' });

  const onChangeHandler = (event) => {
    event.preventDefault();
    setTrip({ ...trip, [event.target.name]: event.target.value });
  }

  const onSubmit = (data) => {
    data.preventDefault();
    console.log(trip);
    dispatch(createTrip({ ...trip, id: { idmaker } }));
    setTrip({ startPoint: '', endPoint: '', name: '', seats: '' });
    return navigate('tripsearch');
  }

  return (
    <>
      <form className={styles.formOrder} action="" onSubmit={() => onSubmit(trip)}>

        <div className={styles.formOrder_input}>
          <label htmlFor="fromWear">Звідки їхати</label>
          <input type="text" id="fromWear" name="startPoint"
            placeholder="Звідки їхати" value={trip.startPoint}
            onChange={onChangeHandler} />
        </div>
        <div className={styles.formOrder_input}>
          <label htmlFor="wear">Куди їхати</label>
          <input type="text" id="wear" name="endPoint"
            placeholder="Куди їхати" value={trip.endPoint}
            onChange={onChangeHandler} />
        </div>
        <div className={styles.formOrder_input}>
          <label htmlFor="userName">Ваше ім'я</label>
          <input type="text" id="userName" name="name"
            placeholder="Ваше ім'я" value={trip.name}
            onChange={onChangeHandler} />
        </div>
        <div className={styles.formOrder_input}>
          <label htmlFor="userPlace">Кількість місць</label>
          <input type="text" id="userPlace" name="seats"
            placeholder="кількість місць" value={trip.seats}
            onChange={onChangeHandler} />
        </div>

        <button className={styles.formOrder_button} onClick={onSubmit}>
          Відправити заявку
        </button>
      </form>

      {/* <ModalSuccess isOpen={modalIsOpen} setIsOpen={setModalIsOpen} /> */}
    </>
  )
}

export default FormOrder;



