import { Suspense } from "react";
import { Route, Routes } from 'react-router-dom';
import routes from '../config/router';
import Loader from '../components/Loader/Loader';

const ProtectedRoutes = () => {
  <Routes>
    <Suspense fallback={<Loader />}>
      {
        routes.map(({ component: Component, path, exact }) => (
          <Route path={`/${path}`} key={path} exact={exact}>
            <Component />
          </Route>
        ))
      }
    </Suspense>
  </Routes>
}

export default ProtectedRoutes;