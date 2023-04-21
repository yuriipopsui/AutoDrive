import styles from './App.module.scss';
import { useEffect } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Passengers from './components/Passengers/Passengers';
import { tripOfferSelector } from './store/selectors/tripOfferSelector';
import Drivers from './components/Drivers/Drivers';
import TripOffer from './components/TripOffer/TripOffer';
import { findTripSelector } from './store/selectors/findTripSelector';
import TripOfferAll from './components/TripOffer/TripOfferAll/TripOfferAll';
import TripInfo from './components/TripInfo/TripInfo';
import { getTripsOperation } from './store/reducers/driversReducer';
import SuccessBooking from './components/Passengers/SuccessBooking/SuccessBooking';
import Login from './components/Login/Login';
import RegisterForm from './components/Register/Register';

const App = () => {
  const dispatch = useDispatch();
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
            <Route path="/" index element={<Home />} />
            <Route path="passengers">
              <Route path="" element={< Passengers tripsOffer={tripsOffer} />} />
              <Route path="confirm_booking/:tripId" element={< SuccessBooking />} />
            </Route>
            <Route path="drivers">
              <Route path="" element={<Drivers tripsOffer={tripsOffer} />} />
              {/* "all_trips" Route is Temporary. Here will be handler of click in CreateForm */}
              <Route path="all_trips" element={<TripOfferAll tripsOffer={tripsOffer} />} />
            </Route>
            <Route path="tripoffer">
              <Route path="" element={<TripOffer tripsOffer={tripsOffer} find={findTripObject} />} />
              <Route path="trip_info/:tripId" element={<TripInfo />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<RegisterForm />} />
          </Routes>

        </div>
      </div>
      <Outlet />
      <Footer />
    </div>
  )
}

export default App;