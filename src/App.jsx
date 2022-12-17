import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

// COMPONENTS
import Header from "./Header";
import ImageCarousel from "./components/ImageCarousel";

// 404 PAGE
import ErrorPage from "./pages/ErrorPage";

// OVERVIEW PAGE
import Overview from "./pages/Overview/Overview";

// PROJECT PAGES
import New_Galateia from "./pages/Project/New_Galateia";
import Kolorowa from "./pages/Project/Kolorowa";
import Minus from "./pages/Project/Minus";
import Concrete from "./pages/Project/Concrete";
import Err0r from "./pages/Project/Err0r";
import Living_And_Gone from "./pages/Project/Living_And_Gone";

// // REPORTAGE PAGES
// import Neoliberalism from "./pages/Reportage/Neoliberalism";
// import LGBTQ_In_Warsaw from "./pages/Reportage/LGBTQ_In_Warsaw";
// import Uprising from "./pages/Reportage/Uprising";
// import Independence_Day from "./pages/Reportage/Independence_Day";
// import Dont_Look_Back_In_Anger from "./pages/Reportage/Dont_Look_Back_In_Anger";
// import Issues from "./pages/Reportage/Issues";

// FILM PAGES
import Film from "./pages/Film/Film";

// COMISSIONED PAGES
import Commissioned from "./pages/Commissioned";

// EXHIBITION PAGES
import Exhibition from "./pages/Exhibition";

// ABOUT PAGE
import About from "./pages/About";

// CONTACT PAGE
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
            {/* <Route path="/neoliberalism" element={<Neoliberalism />} />
            <Route path="/lgbtq-in-warsaw" element={<LGBTQ_In_Warsaw />} />
            <Route path="/8-1-uprising" element={<Uprising />} />
            <Route path="/independence-day" element={<Independence_Day />} />
            <Route
              path="/dont-look-back-in-anger"
              element={<Dont_Look_Back_In_Anger />}
            />
            <Route path="/issues" element={<Issues />} /> */}
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
