import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Catalog from "./components/Catalog";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Cart from "./components/Cart";
import SingleItem from "./components/SingleItem";
import Footer from "./components/Footer";
import Sale from "./components/Sale";
import Register from "./components/Register";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
    return (
      <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/catalog" element={<Catalog/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/:itemId" element={<SingleItem/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
      <Sale/>
      <Footer/>
    </Router>
    )
}

export default App;
