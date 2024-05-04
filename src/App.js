import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import AppRoutePages from './routes';

import './index.css';


function App() {

  return (
    <BrowserRouter basename="/" >
          <AppRoutePages />
    </BrowserRouter>
  );
}

export default App;
