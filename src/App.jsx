import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Kolorowa from "./pages/Kolorowa";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/kolorowa" element={<Kolorowa />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
