import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Header from "./Header";

import ImageCarousel from "./components/ImageCarousel";

import ErrorPage from "./pages/ErrorPage";

import Overview from "./pages/Overview/Overview";

// PROJECT PAGES
import New_Galateia from "./pages/Project/New_Galateia/New_Galateia";
import Kolorowa from "./pages/Project/Kolorowa/Kolorowa";
import Minus from "./pages/Project/Minus/Minus";
import Concrete from "./pages/Project/Concrete/Concrete";
import Err0r from "./pages/Project/Err0r/Err0r";
import Living_And_Gone from "./pages/Project/Living_And_Gone/Living_And_Gone";

// REPORTAGE PAGES

import Reportage from "./pages/Reportage";
import Film from "./pages/Film/Film";
import Commissioned from "./pages/Commissioned";

import Exhibition from "./pages/Exhibition";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Kolorowa />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/new-galateia" element={<New_Galateia />} />
            <Route path="/kolorowa" element={<Kolorowa />} />
            <Route path="/minus" element={<Minus />} />
            <Route path="/concrete" element={<Concrete />} />
            <Route path="/err0r" element={<Err0r />} />
            <Route path="/living-and-gone" element={<Living_And_Gone />} />
            <Route path="/neoliberalism" element={<ErrorPage />} />
            <Route path="/lgbt-in-warsaw" element={<ErrorPage />} />
            <Route path="/8-1-uprising" element={<ErrorPage />} />
            <Route path="/independence-day" element={<ErrorPage />} />
            <Route path="/dont-look-back-in-anger" element={<ErrorPage />} />
            <Route path="/issues" element={<ErrorPage />} />
            <Route path="/film" element={<Film />} />
            <Route path="/commissioned" element={<Commissioned />} />
            <Route path="/exhibition" element={<Exhibition />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/*" element={<ErrorPage />} />
            {/* <Route path="/kolorowa/:name" element={<ImageCarousel />} /> */}
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
