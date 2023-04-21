import { Navigate } from 'react-router-dom';

const PublicRoute = ({ children, isAuth, isPublicOnly }) => {
  return (
    isAuth && isPublicOnly ? <Navigate to={'/'} /> : children
  );
}

export default PublicRoute;