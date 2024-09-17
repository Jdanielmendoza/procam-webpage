import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header.jsx";
import "./index.css";
import Home from "./Views/Home/Home.jsx";
import Contact from "./Views/Contact/Contact.jsx";
import Footer from "./Components/Footer/Footer.jsx";
// Supports weights 300-700
import '@fontsource-variable/teko';

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Header/>
    <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="/contacto" element={<Contact />} /> 
    </Routes>
    <Footer/> 
  </BrowserRouter>
);
