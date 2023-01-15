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
import { findTripSelector } from './store/selectors/findTripSelector';


const AppMode = (props) => {

  const tripsRequest = useSelector(tripSearchSelector);
  const tripsOffer = useSelector(tripOfferSelector);
  const findTripObject = useSelector(findTripSelector);

  return (
    <div className={styles.App}>
      <Header />

      <div className={styles.main} >
        <div className={styles.main__content}>

          <Routes>
            <Route path="/" index element={<HomeMode />} />
            <Route path="passengers">
              <Route path="" element={< PassengersMode tripsOffer={tripsOffer} />} />
              <Route path="tripsearch" element={< TripSearch tripsRequest={tripsRequest} />} />
            </Route>
            <Route path="drivers">
              <Route path="" element={<DriversMode tripsOffer={tripsOffer} />} />
              <Route path="all-trips" element={<TripOffer tripsOffer={tripsOffer} />} />
            </Route>

            {/* <Route path="drivers" element={<DriversMode tripsOffer={tripsOffer} />} /> */}
            <Route path="tripoffer" element={<TripOffer tripsOffer={tripsOffer} find={findTripObject} />} />
            {/* <Route path="tripsearch" element={< TripSearch tripsRequest={tripsRequest} />} /> */}

          </Routes>

        </div>
      </div>
      <Outlet />
    </div>
  )
}

export default AppMode;