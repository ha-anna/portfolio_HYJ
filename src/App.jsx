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

// REPORTAGE PAGES
import Neoliberalism from "./pages/Reportage/Neoliberalism";
import LGBTQ_In_Warsaw from "./pages/Reportage/LGBTQ_In_Warsaw";
import Uprising from "./pages/Reportage/Uprising";
import Independence_Day from "./pages/Reportage/Independence_Day";
import Dont_Look_Back_In_Anger from "./pages/Reportage/Dont_Look_Back_In_Anger";
import Issues from "./pages/Reportage/Issues";

// FILM PAGES
import Film from "./pages/Film/Film";
import Subscribe_My_Dream from "./pages/Film/Subscribe_My_Dream";

// COMISSIONED PAGES
import Commissioned from "./pages/Commissioned/Commissioned";
import Lee_Heemoon from "./pages/Commissioned/Lee_Heemoon";
import W_Mag_2019_2 from "./pages/Commissioned/W_Mag_2019_2";
import Cheon_Jaeseung from "./pages/Commissioned/Cheon_Jaeseung";
import W_Mag_2019_1 from "./pages/Commissioned/W_Mag_2019_1";
import Jungeunhae from "./pages/Commissioned/Jungeunhae";
import Delta_Boys from "./pages/Commissioned/Delta_Boys";
import W_Mag_2018 from "./pages/Commissioned/W_Mag_2018";
import Jung_Sungil from "./pages/Commissioned/Jung_Sungil";
import Son_Yeyoung from "./pages/Commissioned/Son_Yeyoung";
import W_Mag_2017 from "./pages/Commissioned/W_Mag_2017";
import G_Style_2016 from "./pages/Commissioned/G_Style_2016";
import Jungeunhae_EU from "./pages/Commissioned/Jungeunhae_EU";

// EXHIBITION PAGES
import Exhibition from "./pages/Exhibition/Exhibition";
import Kyodong from "./pages/Exhibition/Kyodong";
import Dont_Skip_It from "./pages/Exhibition/Dont_Skip_It";
import Photo_Compilation from "./pages/Exhibition/Photo_Compilation";
import Kolorowa_Warszawa from "./pages/Exhibition/Kolorowa_Warszawa";

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
            <Route path="/neoliberalism" element={<Neoliberalism />} />
            <Route path="/lgbtq-in-warsaw" element={<LGBTQ_In_Warsaw />} />
            <Route path="/8-1-uprising" element={<Uprising />} />
            <Route path="/independence-day" element={<Independence_Day />} />
            <Route
              path="/dont-look-back-in-anger"
              element={<Dont_Look_Back_In_Anger />}
            />
            <Route path="/issues" element={<Issues />} />
            <Route path="/film" element={<Film />} />
            <Route
              path="/film/subscribe-my-dream"
              element={<Subscribe_My_Dream />}
            />
            <Route path="/commissioned/lee-heemoon" element={<Lee_Heemoon />} />
            <Route
              path="/commissioned/w-magazine-2019-2"
              element={<W_Mag_2019_2 />}
            />
            <Route path="/commissioned/" element={<Commissioned />} />
            <Route
              path="/commissioned/cheon-jaeseung"
              element={<Cheon_Jaeseung />}
            />
            <Route
              path="/commissioned/w-magazine-2019-1"
              element={<W_Mag_2019_1 />}
            />
            <Route path="/commissioned/jungeunhae" element={<Jungeunhae />} />
            <Route path="/commissioned/delta-boys" element={<Delta_Boys />} />
            <Route
              path="/commissioned/w-magazine-2018"
              element={<W_Mag_2018 />}
            />
            <Route path="/commissioned/jung-sungil" element={<Jung_Sungil />} />
            <Route path="/commissioned/son-yeyoung" element={<Son_Yeyoung />} />
            <Route
              path="/commissioned/w-magazine-2017"
              element={<W_Mag_2017 />}
            />
            <Route
              path="/commissioned/g-style-2016"
              element={<G_Style_2016 />}
            />
            <Route
              path="/commissioned/jungeunhae-eu"
              element={<Jungeunhae_EU />}
            />

            <Route path="/exhibition" element={<Exhibition />} />
            <Route path="/exhibition/kyodong-art-group" element={<Kyodong />} />
            <Route path="/exhibition/dont-skip-it" element={<Dont_Skip_It />} />
            <Route
              path="/exhibition/photo-compilation"
              element={<Photo_Compilation />}
            />
            <Route
              path="/exhibition/kolorowa-warszawa"
              element={<Kolorowa_Warszawa />}
            />
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
