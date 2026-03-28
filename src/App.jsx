import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Shop from "./Pages/Shop.jsx";
import Cart from "./Pages/Cart.jsx";
import Details from "./Pages/Details.jsx";
import Wishlist from "./Pages/Wishlist.jsx";
import Checkout from "./Pages/Checkout.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/details" element={<Details />} />
        <Route path="/wish" element={<Wishlist />} />
        <Route path="/checkout" element={<Checkout/>}/>
      </Routes>
    </Router>
  );
};

export default App;
