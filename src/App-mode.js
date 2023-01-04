import styles from './AppMode.module.scss';
import { Routes, Route, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from './components/Header/Header';
import HomeMode from './components/Home/HomeMode';
import PassengersMode from './components/Passengers/PassengersMode';
import TripSearch from './components/TripSearch/TripSearch';
import { tripSearchSelector } from './store/selectors/tripSearchSelector';
import { tripOfferSelector } from './store/selectors/tripOfferSelector';
import DriversMode from './components/Drivers/DriversMode';
import TripOffer from './components/TripOffer/TripOffer';


const AppMode = (props) => {

  const tripsRequest = useSelector(tripSearchSelector);
  const tripsOffer = useSelector(tripOfferSelector);

  return (
    <div className={styles.App}>
      <Header />

      <div className={styles.main} >
        <div className={styles.main__content}>
          <h1>This is a modified App Page</h1>

          <Routes>
            <Route path="/" index element={<HomeMode store={props.store} />} />
            <Route path="passengers">
              <Route path="" element={< PassengersMode tripsOffer={tripsOffer} />} />
              <Route path="tripsearch" element={< TripSearch tripsRequest={tripsRequest} />} />
            </Route>
            <Route path="tripsearch" element={< TripSearch tripsRequest={tripsRequest} />} />
            <Route path="drivers" element={<DriversMode tripsOffer={tripsOffer} />} />
            <Route path="tripoffer" element={<TripOffer tripsOffer={tripsOffer} />} />

          </Routes>

        </div>
      </div>
      <Outlet />
    </div>
  )
}

export default AppMode;