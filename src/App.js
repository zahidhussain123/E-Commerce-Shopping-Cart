import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Products from "./components/Products";
import SingleProduct from "./pages/SingleProduct";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products/:_id" element={<SingleProduct />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
