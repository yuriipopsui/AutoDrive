import React from 'react';
// import { Link } from 'react-router-dom';
// import SearchForm from '../common/SearchForm/SearchForm';
import SearchFormMode from '../common/SearchForm/SearchFormMode';
import styles from './HomeMode.module.scss';

const HomeMode = () => {

  return (
    <div className={styles.home}>
      <div className={styles.home__container}>


        <section className={styles.home__banner}>
          <h2 className={styles.home__title}>
            Подорожуй куди хочеш. Це доступно.
          </h2>
          <SearchFormMode />
        </section>


      </div>

    </div>
  )
}
export default HomeMode;