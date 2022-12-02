import React, { useState } from 'react';
import styles from './FormOrderDriver.module.scss';
import ModalSuccess from '../ModalSuccess/ModalSuccess';



const FormOrderDriver = (props) => {

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModalHandler = (e) => {
    e.preventDefault();
    setModalIsOpen(true);

  }

  return (
    <>
      <form className={styles.formOrder} action="">

        <div className={styles.formOrder_input}>
          <label htmlFor="fromWear">Я їду з:</label>
          <input type="text" id="fromWear" placeholder="Звідки їду" />
        </div>
        <div className={styles.formOrder_input}>
          <label htmlFor="wear">Я їду до:</label>
          <input type="text" id="wear" placeholder="Куди їду" />
        </div>
        <div className={styles.formOrder_input}>
          <label htmlFor="userCar">Автомобіль</label>
          <input type="text" id="userCar" placeholder="Автомобіль" />
        </div>
        <div className={styles.formOrder_input}>
          <label htmlFor="places">Кількість місць</label>
          <select name="select" id="places">
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
          <input type="text" id="userName" placeholder="Ваше ім'я" />
        </div>
        <div className={styles.formOrder_input}>
          <label htmlFor="userPhone">Телефон для зв'язку</label>
          <input type="text" id="userPhone" placeholder="Телефон для зв'язку" />
        </div>

        <button className={styles.formOrder_button} onClick={openModalHandler}>
          Відправити заявку
        </button>
      </form>

      <ModalSuccess isOpen={modalIsOpen} setIsOpen={setModalIsOpen} />
    </>
  )
}

export default FormOrderDriver;



