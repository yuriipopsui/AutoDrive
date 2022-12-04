import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.scss';

const Home = (props) => {

  return (
    <div className={styles.home}>
      <div className={styles.home__container}>
        <h2 className={styles.home__title}>Вітаємо на Автодрайв!</h2>
        <p className={styles.home__text}>
          Наша компанія надає послуги з перевезення пассажирів та невеликих вантажів. З нашою допомогою ви можете дістатися місця відпочинку або перевезти речі. Також можемо зустріти вас в аєропорту міста Києва або на залізничному вокзалі. Забезпечуємо трансфер між містами України і , за потреби, за кордон. Для замовлення перевезення мікроавтобусом ви можете скористатися формою нижче. Або Зареєструватися як <Link to='/passengers'>Пассажир</Link> і користуватися деякими привілеями постійних користувачів. Також, при бажанні співробітниства та при наявності автомобіля ви можете зареєструватися як <Link to='/drivers'>Водій</Link>.
        </p>
        <form className={styles.home__form} action="">
          <div className={styles.home__form_input}>
            <label htmlFor="fromWear">Звідки їхати</label>
            <input type="text" id="fromWear" placeholder="Звідки їхати" />
          </div>
          <div className={styles.home__form_input}>
            <label htmlFor="wear">Куди їхати</label>
            <input type="text" id="wear" placeholder="Куди їхати" />
          </div>
          <div className={styles.home__form_input}>
            <label htmlFor="userName">Ваше ім'я</label>
            <input type="text" id="userName" placeholder="Ваше ім'я" />
          </div>
          <div className={styles.home__form_input}>
            <label htmlFor="userPhone">Телефон для зв'язку</label>
            <input type="text" id="userPhone" placeholder="Телефон для зв'язку" />
          </div>

          <button className={styles.home__form_button}>
            Відправити заявку
          </button>

        </form>
      </div>

    </div>
  )
}
export default Home;