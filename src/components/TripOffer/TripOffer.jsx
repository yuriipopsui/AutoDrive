import React, { useState, useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getFilteredTrips } from '../../store/reducers/driversReducer';
import Button from '../common/Button/Button';
import styles from './TripOffer.module.scss';
import TripOfferCard from './TripOfferCard/TripOfferCard';


const TripOffer = ({ find }) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [offerTrips, setOfferTrips] = useState([]);

  useLayoutEffect(() => {
    dispatch(getFilteredTrips(find, setOfferTrips))
  }, [dispatch, find])

  const timeSortingEarlier = () => {
    const result = offerTrips.slice().sort((x, y) =>
      +x.time.split('').slice(0, 2).join('') - +y.time.split('').slice(0, 2).join('')
    );
    setOfferTrips(result);
  }

  const timeSortingLater = () => {
    const result = offerTrips.slice().sort((x, y) =>
      +y.time.split('').slice(0, 2).join('') - +x.time.split('').slice(0, 2).join('')
    );
    setOfferTrips(result);
  }

  const onCardClickHandler = (id) => {

    return navigate(`trip_info/${id}`);
  }

  return <div className={styles.tripOffer}>

    <div className={styles.tripOffer__manage}>
      <h3 className={styles.tripOffer__manage_title}>Сортувати за</h3>
      <div className={styles.tripOffer__manage_filter}>
        <Button className={offerTrips.length === 0 ? styles.tripOffer__manage_button : ''} buttonTitle="Раніші" buttonColor="#fff" onClick={timeSortingEarlier} />
        <Button buttonTitle="Піздніші" buttonColor="#fff" onClick={timeSortingLater} />
      </div>
    </div>

    <div className={styles.tripOffer__content}>
      {
        offerTrips.length === 0
          ?
          <h2>Вибачте, але за Вашим маршрутом поїздок не знайдено!</h2>
          :
          offerTrips.map((elem) => {
            return (
              <TripOfferCard trip={elem} key={elem._id} onClick={(e) => onCardClickHandler(elem.id, elem)} />
            );
          })}
    </div>
  </div>;
}
export default TripOffer;
