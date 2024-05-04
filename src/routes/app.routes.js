import React from 'react';

import { ROUTES } from '../utils/constants';

const Dashboard = React.lazy(() => import('../pages/Dashboard'));
const Bedroom = React.lazy(() => import('../pages/Bedroom'));
const Bathroom = React.lazy(() => import('../pages/Bathroom'));
const Kitchen = React.lazy(() => import('../pages/Kitchen'));
const LivingArea = React.lazy(() => import('../pages/LivingArea'));
const DesignIdeas = React.lazy(() => import('../pages/DesignIdeas'));
const FurnitureByEasyHomez = React.lazy(() => import('../pages/FurnitureByEasyHomez'));

const NotFound = React.lazy(() => import('../pages/404'));


export const appRoutes = {
  AUTH_ROUTES: [],
  USER_ROUTES: [
    {
      path: ROUTES.DASHBOARD,
      exact: true,
      element: <Dashboard />,
    },
    {
      path: ROUTES.BEDROOM,
      exact: true,
      element: <Bedroom />,
    },
    {
      path: ROUTES.BATHROOM,
      exact: true,
      element: <Bathroom />,
    },
    {
      path: ROUTES.DESIGN_IDEAS,
      exact: true,
      element: <DesignIdeas />,
    },
    {
      path: ROUTES.KITCHEN,
      exact: true,
      element: <Kitchen />,
    },
    {
      path: ROUTES.LIVING_AREA,
      exact: true,
      element: <LivingArea />,
    },
    {
      path: ROUTES.FURNITURE_BY_EASYHOMEZ,
      exact: true,
      element: <FurnitureByEasyHomez />,
    },
  ],

  MISCELLANEOUS_ROUTES: [
    {
      path: ROUTES.NOT_FOUND,
      exact: true,
      element: <NotFound />,
    },
  ], 
};