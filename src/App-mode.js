import styles from './AppMode.module.scss';
import { useEffect } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Header from './components/Header/Header';
import HomeMode from './components/Home/HomeMode';
import Footer from './components/Footer/Footer';
import PassengersMode from './components/Passengers/PassengersMode';
import TripSearch from './components/TripSearch/TripSearch';
import { tripSearchSelector } from './store/selectors/tripSearchSelector';
import { tripOfferSelector } from './store/selectors/tripOfferSelector';
import DriversMode from './components/Drivers/DriversMode';
import TripOffer from './components/TripOffer/TripOffer';
import { findTripSelector } from './store/selectors/findTripSelector';
import TripOfferAll from './components/TripOffer/TripOfferAll/TripOfferAll';
import TripInfo from './components/TripInfo/TripInfo';
import { getTripsOperation } from './store/reducers/driversReducer';
import SuccessBooking from './components/Passengers/SuccessBooking/SuccessBooking';

const AppMode = () => {
  const dispatch = useDispatch();

  const tripsRequest = useSelector(tripSearchSelector);
  const tripsOffer = useSelector(tripOfferSelector);
  const findTripObject = useSelector(findTripSelector);

  useEffect(() => {
    dispatch(getTripsOperation())
  }, [dispatch]);

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
              <Route path="confirm_booking/:tripId" element={< SuccessBooking />} />
            </Route>
            <Route path="drivers">
              <Route path="" element={<DriversMode tripsOffer={tripsOffer} />} />
              <Route path="all_trips" element={<TripOfferAll tripsOffer={tripsOffer} />} />
            </Route>
            <Route path="tripoffer">
              <Route path="" element={<TripOffer tripsOffer={tripsOffer} find={findTripObject} />} />
              <Route path="trip_info/:tripId" element={<TripInfo />} />
            </Route>
          </Routes>

        </div>
      </div>
      <Outlet />
      <Footer />
    </div>
  )
}

export default AppMode;