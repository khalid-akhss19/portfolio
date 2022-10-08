import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../pages/home"
import Navbar from "../components/navbar"

const Routers = () => {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </>
  );
};

export default Routers;