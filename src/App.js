import styles from './App.module.scss';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Drivers from './components/Drivers/Drivers';
import Passengers from './components/Passengers/Passengers';
import CreateTrip from './components/Passengers/CreateTrip/CreateTrip';
import TripSearch from './components/TripSearch/TripSearch';
import MyTrips from './components/Passengers/MyTrips/MyTrips';
import Footer from './components/Footer/Footer';
import Sidebar from './components/Sidebar/Sidebar';
import CreateTripDriver from './components/Drivers/CreateTripDriver/CreateTripDriver';
import MyTripsDriver from './components/Drivers/MyTripsDriver/MyTripsDriver';
import { tripSearchSelector } from './store/selectors/tripSearchSelector';
import { tripOfferSelector } from './store/selectors/tripOfferSelector';
import TripOffer from './components/TripOffer/TripOffer';

function App(props) {

  console.log(useSelector(tripSearchSelector));
  console.log(useSelector(tripOfferSelector));
  const tripsRequest = useSelector(tripSearchSelector);
  const tripsOffer = useSelector(tripOfferSelector);


  return (
    <div className={styles.App}>

      < Header />
      <div className={styles.main}>
        <div className={styles.main__sidebar}>
          <Sidebar />
        </div>
        <div className={styles.main__content}>
          <Routes>
            <Route path="/" index element={<Home store={props.store} />} />
            <Route path="drivers" element={< Drivers store={props.store} />} />

            <Route path="passengers" element={< Passengers store={props.store} />} />
            <Route path="tripsearch" element={< TripSearch tripsRequest={tripsRequest} tripsOffer={tripsOffer} />} />
            <Route path="tripoffer" element={< TripOffer tripsOffer={tripsOffer} />} />

            <Route path="login" element={< Login store={props.store} />} />
            <Route path="passengers/create_trip" element={< CreateTrip store={props.store} />} />
            <Route path="passengers/my_trips" element={< MyTrips store={props.store} />} />
            <Route path="drivers/create_trip" element={< CreateTripDriver store={props.store} />} />
            <Route path="drivers/my_trips" element={< MyTripsDriver store={props.store} />} />

          </Routes>
        </div>

      </div>

      < Footer />

    </div>
  );
}

export default App;
