import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

// COMPONENTS
import Header from "./Header";

// 404 PAGE
import ErrorPage from "./pages/ErrorPage";
import ImageView from "./pages/ImageView";

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

import ImageContext from "./ImageContext";

function App() {
  const [clickedImg, setClickedImg] = React.useState("");
  function saveChosenImage() {}

  return (
    <>
      <BrowserRouter>
        <Header />
        <main>
          <ImageContext.Provider value={{ clickedImg, setClickedImg }}>
            <Routes>
              <Route path="/" element={<Kolorowa />} />
              <Route path="/Overview" element={<Overview />} />
              <Route path="/New_Galateia" element={<New_Galateia />} />
              <Route path="/Kolorowa" element={<Kolorowa />} />
              <Route path="/Minus" element={<Minus />} />
              <Route path="/Concrete" element={<Concrete />} />
              <Route path="/Err0r" element={<Err0r />} />
              <Route path="/Living_And_Gone" element={<Living_And_Gone />} />
              <Route path="/Neoliberalism" element={<Neoliberalism />} />
              <Route path="/LGBTQ_In_Warsaw" element={<LGBTQ_In_Warsaw />} />
              <Route path="/8_1_Uprising" element={<Uprising />} />
              <Route path="/Independence_Day" element={<Independence_Day />} />
              <Route
                path="/Dont_Look_Back_In_Anger"
                element={<Dont_Look_Back_In_Anger />}
              />
              <Route path="/Issues" element={<Issues />} />
              <Route path="/Film" element={<Film />} />
              <Route
                path="/Film/Subscribe_My_Dream"
                element={<Subscribe_My_Dream />}
              />
              <Route
                path="/Commissioned/Lee_Heemoon"
                element={<Lee_Heemoon />}
              />
              <Route
                path="/Commissioned/W_Mag_2019_2"
                element={<W_Mag_2019_2 />}
              />
              <Route path="/Commissioned/" element={<Commissioned />} />
              <Route
                path="/Commissioned/Cheon_Jaeseung"
                element={<Cheon_Jaeseung />}
              />
              <Route
                path="/Commissioned/W_Mag_2019_1"
                element={<W_Mag_2019_1 />}
              />
              <Route path="/Commissioned/Jungeunhae" element={<Jungeunhae />} />
              <Route path="/Commissioned/Delta_Boys" element={<Delta_Boys />} />
              <Route path="/Commissioned/W_Mag_2018" element={<W_Mag_2018 />} />
              <Route
                path="/Commissioned/Jung_Sungil"
                element={<Jung_Sungil />}
              />
              <Route
                path="/Commissioned/Son_Yeyoung"
                element={<Son_Yeyoung />}
              />
              <Route path="/Commissioned/W_Mag_2017" element={<W_Mag_2017 />} />
              <Route
                path="/Commissioned/G_Style_2016"
                element={<G_Style_2016 />}
              />
              <Route
                path="/Commissioned/Jungeunhae_EU"
                element={<Jungeunhae_EU />}
              />

              <Route path="/Exhibition" element={<Exhibition />} />
              <Route
                path="/Exhibition/Kyodong_Art_Group"
                element={<Kyodong />}
              />
              <Route
                path="/Exhibition/Dont_Skip_It"
                element={<Dont_Skip_It />}
              />
              <Route
                path="/Exhibition/Photo_Compilation"
                element={<Photo_Compilation />}
              />
              <Route
                path="/Exhibition/Kolorowa_Warszawa"
                element={<Kolorowa_Warszawa />}
              />
              <Route path="/About" element={<About />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/*" element={<ErrorPage />} />
              <Route path="/:name/:id" element={<ImageView />} />
              <Route path="/:folder/:name/:id" element={<ImageView />} />
            </Routes>
          </ImageContext.Provider>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
