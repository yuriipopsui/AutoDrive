import React from 'react';
import styles from './Home.module.scss';
import SearchTripForm from '../common/SearchTripForm/SearchTripForm';

const Home = () => {

  return (
    <div className={styles.home}>
      <div className={styles.home__container}>
        <section className={styles.home__banner}>
          <h2 className={styles.home__title}>
            Подорожуй куди хочеш. Це доступно.
          </h2>
          <SearchTripForm />
        </section>
      </div>
    </div>
  )
}
export default Home;