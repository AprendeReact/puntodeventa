import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  HashRouter,
} from 'react-router-dom';

import './styles/_theme1.scss';
import './styles/_global.scss';
import './styles/_navbar_custom.scss';
import './styles/_cart.scss';
import HomePage from './components/HomePage'
import POSPage from './components/POSPage'
function App() {
  return (
    <BrowserRouter>
      <HashRouter basename="/">
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/pos' element={<POSPage />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>Página no encontrada</p>
              </main>
            }
          />
        </Routes>
      </HashRouter>
    </BrowserRouter>
  );
}

export default App;
