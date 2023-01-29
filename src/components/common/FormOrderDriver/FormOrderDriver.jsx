import React, { useState } from 'react';
import styles from './FormOrderDriver.module.scss';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { offerTrip } from '../../../store/reducers/driversReducer';
// import ModalSuccess from '../ModalSuccess/ModalSuccess';



const FormOrderDriver = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const idmaker = `o-${(Date.now().toString().split('').slice(-5).join(''))}`;

  const [offer, setOffer] = useState({ name: '', userPhone: '', startPoint: '', endPoint: '', userCar: '', place: '' });

  // const [modalIsOpen, setModalIsOpen] = useState(false);
  // const openModalHandler = (e) => {
  //   e.preventDefault();
  //   setModalIsOpen(true);

  // }
  const onChangeHandler = (event) => {
    event.preventDefault();
    console.log(offer);
    setOffer({ ...offer, [event.target.name]: event.target.value });
  }

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(offerTrip({ ...offer, id: { idmaker } }));
    console.log(offer);
    setOffer({ name: '', userPhone: '', startPoint: '', endPoint: '', userCar: '', place: '' });
    return navigate('/tripoffer');
  }

  return (
    <>
      <form className={styles.formOrder} action="" onSubmit={onSubmit}>

        <div className={styles.formOrder_input}>
          <label htmlFor="fromWear">Я їду з:</label>
          <input type="text" id="fromWear"
            name="startPoint"
            placeholder="Звідки їду" onChange={onChangeHandler} />
        </div>
        <div className={styles.formOrder_input}>
          <label htmlFor="wear">Я їду до:</label>
          <input type="text" id="wear"
            name="endPoint"
            placeholder="Куди їду" onChange={onChangeHandler} />
        </div>
        <div className={styles.formOrder_input}>
          <label htmlFor="userCar">Автомобіль</label>
          <input type="text" id="userCar"
            name="userCar"
            placeholder="Автомобіль" onChange={onChangeHandler} />
        </div>
        <div className={styles.formOrder_input}>
          <label htmlFor="places">Кількість місць</label>
          <select name="place" id="places" onChange={onChangeHandler} >
            <option value="1">1 місце</option>
            <option value="2">2 місця</option>
            <option value="3">3 місця</option>
            <option value="4">4 місця</option>
            <option value="5">5 місць</option>
            <option value="6">6 місць</option>
            <option value="7">7 місць</option>
            <option value="8">8 місць</option>
          </select>
        </div>
        <div className={styles.formOrder_input}>
          <label htmlFor="userName">Ваше ім'я</label>
          <input type="text" id="userName"
            name="name"
            placeholder="Ваше ім'я" onChange={onChangeHandler} />
        </div>
        <div className={styles.formOrder_input}>
          <label htmlFor="userPhone">Телефон для зв'язку</label>
          <input type="text" id="userPhone"
            name="userPhone"
            placeholder="Телефон для зв'язку" onChange={onChangeHandler} />
        </div>

        <button className={styles.formOrder_button} onClick={onSubmit}>
          Відправити заявку
        </button>
      </form>

      {/* <ModalSuccess isOpen={modalIsOpen} setIsOpen={setModalIsOpen} /> */}
    </>
  )
}

export default FormOrderDriver;



