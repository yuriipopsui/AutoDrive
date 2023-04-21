import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, isAuth }) => {
  return (
    isAuth ? children : <Navigate to={'/login'} />
  );
}

export default PrivateRoute;