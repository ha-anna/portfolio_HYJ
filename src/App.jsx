import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Home from "./pages/Home";
import Kolorowa from "./pages/Project/Kolorowa";
import ErrorPage from "./pages/ErrorPage";

import Placeholder from "./Placeholder";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Kolorowa />} />
            <Route path="/overview" element={<Placeholder />} />
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
            <Route path="/film" element={<Placeholder />} />
            <Route path="/commissioned" element={<Placeholder />} />
            <Route path="/exhibition" element={<Placeholder />} />
            <Route path="/about" element={<Placeholder />} />
            <Route path="/contact" element={<Placeholder />} />
            <Route path="/*" element={<ErrorPage />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
