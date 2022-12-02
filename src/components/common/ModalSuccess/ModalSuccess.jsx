import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ModalSuccess.module.scss';

const ModalSuccess = ({ isOpen, setIsOpen }) => {

  let navigate = useNavigate();

  const closeModalHandler = () => {
    setIsOpen(false);
    return navigate("/passengers");
  }



  const activeModal = `${styles.modal} ${styles.active}`;
  return (

    <div className={isOpen ? activeModal : styles.modal} onClick={closeModalHandler}>
      <div className={styles.modal__content} onClick={e => e.stopPropagation()} >
        <h3>
          Вашу заявку отримано! Ми зателефонуємо Вам найближчим часом.
        </h3>
      </div>

    </div>
  )
}

export default ModalSuccess;