import logo from './logo.svg';
import './App.css';
import Login from './Component/Login';
import Dashboard from './Component/Dashboard';
import HomeData from './Component/HomeData';
import Event from './Component/Event';
import Location from './Component/Location';
import Affiliation from './Component/Affiliation';
import News from './Component/News';
import CircularNotice from './Component/CircularNotice';
import Contact from './Component/Contact';
import Management from './Component/Management';
import CompList from './Component/CompList';
import BarDetail from './Component/BarDetail';
import ProductList from './Component/ProductList';
import OrderList from './Component/OrderList';
import Reservation from './Component/Reservation';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import RouteWrapper from './Wrapper/RouteWrapper';

function App() {
  return (
     <>
        <BrowserRouter>
          <RouteWrapper childComponent={ <Routes>
              <Route index element={<Login />} />
              <Route path='/Dashboard' element={<Dashboard />} />
              <Route path='/HomeData' element={<HomeData />} />
              <Route path='/Event' element={<Event />} />
              <Route path='/Location' element={<Location />} />
              <Route path='/Affiliation' element={<Affiliation />} />
              <Route path='/News' element={<News />} />
              <Route path='/CircularNotice' element={<CircularNotice />} />
              <Route path='/Contact' element={<Contact />} />
              <Route path='/Management' element={<Management />} />
              <Route path='/CompList' element={<CompList />} />
              <Route path='/BarDetail' element={<BarDetail />} />
              <Route path='/ProductList' element={<ProductList />} />
              <Route path='/OrderList' element={<OrderList />} />
              <Route path='/Reservation' element={<Reservation />} />
            </Routes>}/>
        </BrowserRouter>
      </>
  );
}

export default App;
