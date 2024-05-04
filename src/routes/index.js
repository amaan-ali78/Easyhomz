import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { appRoutes } from './app.routes';

import NotFound from '../pages/404';

const AppRoutePages = () => {

  return (
    <Suspense fallback={null} >
      <Routes >
        {
          <>
            {
              appRoutes.USER_ROUTES.map((route, index) => (
                  < Route
                    key={`${route}-index`}
                    {...route}
                  />
              ))
            }
          </>
        }
        {
          <Route path="*" element={<NotFound />} />
        }
      </Routes>
    </Suspense>
  );
}

export default AppRoutePages;