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

import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ScrollToTop = () => {
  const location = useLocation();
/*   const navigate = useNavigate(); */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Header/>
    <ScrollToTop />  {/* se reinicia el scroll al inicio de la seccion que esta viendo actualmente */}
    <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="/contacto" element={<Contact />} /> 
    </Routes>
    <Footer/> 
  </BrowserRouter>
);
