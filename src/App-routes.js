import { Suspense } from 'react';
import styles from './App.module.scss';
import { useEffect } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { tripOfferSelector } from './store/selectors/tripOfferSelector';
import { getTripsOperation } from './store/reducers/driversReducer';
import PublicRoute from './utils/PublicRoute';
import PrivateRoute from './utils/PrivateRoute';
import Loader from './components/Loader/Loader';
import { isAuthSelector } from './store/selectors/isAuthSelector';
import routes from './config/router';

const AppRoutes = () => {
  const dispatch = useDispatch();
  // const tripsOffer = useSelector(tripOfferSelector);

  const isAuth = useSelector(isAuthSelector)

  useEffect(() => {
    dispatch(getTripsOperation())
  }, [dispatch]);


  return (
    <div className={styles.App}>
      <Header />

      <div className={styles.main} >
        <div className={styles.main__content}>

          <Suspense fallback={<Loader />} >
            <Routes>
              {routes.map(({ Component, props, isPrivate, isPublicOnly, ...route }) =>
              (
                <Route {...route} key={route} element={
                  isPrivate
                    ? (
                      <PrivateRoute isAuth={isAuth}>
                        <Component {...props} />
                      </PrivateRoute>
                    )
                    : (
                      <PublicRoute isPublicOnly={isPublicOnly} isAuth={isAuth}>
                        <Component {...props} />
                      </PublicRoute>
                    )
                }
                />
              ))}
            </Routes>
          </Suspense>

          {/* <Route path="drivers">
              <Route path="" element={<Drivers tripsOffer={tripsOffer} />} /> */}
          {/* "all_trips" Route is Temporary. Here will be handler of click in CreateForm */}
          {/* <Route path="all_trips" element={<TripOfferAll tripsOffer={tripsOffer} />} />
            </Route>
            
            <Route path="/register" element={<RegisterForm />} />
          </Routes> */}

        </div>
      </div>
      <Outlet />
      <Footer />
    </div>
  )
}

export default AppRoutes;