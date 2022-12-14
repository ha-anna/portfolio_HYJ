import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Header from "./Header";

import ImageCarousel from "./components/ImageCarousel";

import ErrorPage from "./pages/ErrorPage";
import Placeholder from "./Placeholder";

import Overview from "./pages/Overview/Overview";

// PROJECT PAGES
import Kolorowa from "./pages/Project/Kolorowa";

// REPORTAGE PAGES

import Reportage from "./pages/Reportage";
import Film from "./pages/Film";
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
            <Route path="/new-galateia" element={<Placeholder />} />
            <Route path="/kolorowa" element={<Kolorowa />} />
            <Route path="/minus" element={<Placeholder />} />
            <Route path="/concrete" element={<Placeholder />} />
            <Route path="/err0r" element={<Placeholder />} />
            <Route path="/living-and-gone" element={<Placeholder />} />
            <Route path="/neoliberalism" element={<Placeholder />} />
            <Route path="/lgbt-in-warsaw" element={<Placeholder />} />
            <Route path="/8-1-uprising" element={<Placeholder />} />
            <Route path="/independence-day" element={<Placeholder />} />
            <Route path="/dont-look-back-in-anger" element={<Placeholder />} />
            <Route path="/issues" element={<Placeholder />} />
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
