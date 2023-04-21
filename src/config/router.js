import { lazy } from 'react';

const routes = [
  {
    path: '/',
    Component: lazy(() => import('../components/Home/Home')),
    isPrivate: false,
    isPublicOnly: false
  },
  {
    path: 'drivers',
    Component: lazy(() => import('../components/Drivers/Drivers')),
    isPrivate: true,
    isPublicOnly: false,
  },
  {
    path: 'passengers',
    Component: lazy(() => import('../components/Passengers/Passengers')),
    isPrivate: true,
    isPublicOnly: false
  },
  {
    path: 'passengers/confirm_booking/:tripId',
    Component: lazy(() => import('../components/Passengers/SuccessBooking/SuccessBooking')),
    isPrivate: true,
    isPublicOnly: false
  },
  {
    path: 'tripoffer',
    Component: lazy(() => import('../components/TripOffer/TripOffer')),
    isPrivate: true,
    isPublicOnly: true
  },
  {
    path: 'tripoffer/trip_info/:tripId',
    Component: lazy(() => import('../components/TripInfo/TripInfo')),
    isPrivate: true,
    isPublicOnly: true
  },
  {
    path: 'login',
    Component: lazy(() => import('../components/Login/Login')),
    isPrivate: false,
    isPublicOnly: true
  },
  {
    path: 'logout',
    Component: lazy(() => import('../components/Home/Home')),
    isPrivate: true,
    isPublicOnly: true
  },
  {
    path: 'register',
    Component: lazy(() => import('../components/Register/Register')),
    isPrivate: false,
    isPublicOnly: true
  },
]

export default routes;