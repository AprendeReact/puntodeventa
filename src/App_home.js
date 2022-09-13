import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles/_theme1.scss';
import './styles/_global.scss';
import './styles/_navbar_custom.scss';
import './styles/_cart.scss';
import { NavbarMenu } from './components/NavbarMenu'
import HomePage from './components/HomePage'
import POSPage from './components/POSPage'
import Inventory from './components/Inventory'
import Orders from './components/Orders'
import { Footer } from './components/Footer'
import { Provider } from 'react-redux'
import generateStore from './redux/store_index'
function App() {

  const store = generateStore();
  return (

    <Provider store={store}>
      <BrowserRouter>
        <NavbarMenu />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/pos' element={<POSPage />} />
          <Route path='/inventario' element={<Inventory />} />
          <Route path='/Orders' element={<Orders />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>Página no encontrada</p>
              </main>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>

  );
}

export default App;
