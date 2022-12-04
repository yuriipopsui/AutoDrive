import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './FormOrder.module.scss';
import ModalSuccess from '../ModalSuccess/ModalSuccess';



const FormOrder = (props) => {

  const navigate = useNavigate();

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModalHandler = (e) => {
    e.preventDefault();
    setModalIsOpen(true);
    return navigate('/tripsearch')
  }

  return (
    <>
      <form className={styles.formOrder} action="">

        <div className={styles.formOrder_input}>
          <label htmlFor="fromWear">Звідки їхати</label>
          <input type="text" id="fromWear" placeholder="Звідки їхати" />
        </div>
        <div className={styles.formOrder_input}>
          <label htmlFor="wear">Куди їхати</label>
          <input type="text" id="wear" placeholder="Куди їхати" />
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

export default FormOrder;



