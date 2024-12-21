import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Components/Homepage";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Products from "./Components/Products";
import ProductsDisplay from "./Components/ProductsDisplay.jsx";

import Carousel from "./Components/Mobilecarousel.jsx";
import Reactslider from "./Components/Reactslider.jsx";

function App() {
  return (
    <Router>
      <Routes>
         <Route path="/" element={<Homepage/>} />
         <Route path="/homepage" element={<Homepage/>} />
         <Route path="/products" element={<Products/>} />
         <Route path="/productDisplay" element={<ProductsDisplay/>} />
         <Route path="/mob" element={<  Reactslider/>} />
      </Routes>
    </Router>
  );
}

export default App;
