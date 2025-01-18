import logo from './logo.svg';
import './App.css';
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import Contact from './Component/Contact';
import Locations from './Component/Location';
import Event from './Component/Event';
import EventDetail from './Component/EventDetail';
import Membership from './Component/Membership';
import Management from './Component/Management';
import Affiliation from './Component/Affiliation';
import CircularNotice from './Component/CircularNotice';
import Facility from './Component/Facility';
import Login from './Component/Login';
import ResetPassword from './Component/ResetPassword';
import Thanx from './Component/Thanx';
import About from './Component/About';
import Accommodation from './Component/Accommodation';
import RoomBook from './Component/RoomBook';

import { Routes, Route, useLocation } from "react-router-dom";

function App() {

  const location = useLocation();

  const shouldHideNavbarAndFooter = location.pathname === '/Login' || location.pathname === '/ResetPassword' || location.pathname === '/Thanx' || location.pathname === '/Test';

  return (
    <div className="App">
      {!shouldHideNavbarAndFooter && <Navbar />}
      <Routes>
        <Route index element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Locations' element={<Locations />} />
        <Route path='/Event' element={<Event />} />
        <Route path='/EventDetail' element={<EventDetail />} />
        <Route path='/Membership' element={<Membership />} />
        <Route path='/Management' element={<Management />} />
        <Route path='/Affiliation' element={<Affiliation />} />
        <Route path='/CircularNotice' element={<CircularNotice />} />
        <Route path='/Facility' element={<Facility />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/ResetPassword' element={<ResetPassword />} />
        <Route path='/Thanx' element={<Thanx />} />
        <Route path='/Accommodation' element={<Accommodation />} />
        <Route path='/RoomBook' element={<RoomBook />} />
      </Routes>
      {!shouldHideNavbarAndFooter && <Footer />}
    </div>
  );
}

export default App;
