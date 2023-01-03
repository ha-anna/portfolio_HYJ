import React from "react";
import { Link } from "react-router-dom";
import { tabTitle } from "../../Utils/tabTitle";

function Exhibition() {
  tabTitle("Exhibition");
  return (
    <div className="exhibition">
      <h2 className="page-title border-bottom">Exhibition</h2>

      <div className="exhibition-grid">
        <div className="exhibition-card">
          <Link to="./Kyodong_Art_Group">
            <img
              src="./assets/Exhibition/1-4.webp"
              alt="KYODONG ART GROUP poster"
              className="exhibition-image"
            />
          </Link>
          <span className="description">
            Click the image to see the full collection.
          </span>
          <h3>KYODONG ART GROUP by Suwon Cultural Foundation</h3>
          <p className="eng-text bottom">
            25 JUNE - 25 JULY 2021
            <br />
            Connection, GROUP SHOW, Kyo-dong street gallery, Suwon, South Korea
          </p>
        </div>

        <div className="exhibition-card">
          <Link to="./Dont_Skip_It">
            <img
              src="./assets/Exhibition/1-2.webp"
              alt="KYODONG ART GROUP poster"
              className="exhibition-image"
            />
          </Link>
          <span className="description">
            Click the image to see the full collection.
          </span>
          <h3>DON’T SKIP IT </h3>
          <p className="eng-text bottom">
            13 DEC 2020
            <br />
            Short film
            <span className="decoration-bracket">Subscribe my dream</span>,
            GROUP SHOW, Gangnam CGV, Seoul, South Korea
          </p>
        </div>

        <div className="border-bottom max-width"></div>

        <div className="exhibition-card">
          <Link to="./Photo_Compilation">
            <img
              src="./assets/Exhibition/1-1.webp"
              alt="PHOTO COMPILATION poster"
              className="exhibition-image"
            />
          </Link>
          <span className="description">
            Click the image to see the full collection.
          </span>
          <h3>PHOTO COMPILATION</h3>
          <p className="eng-text bottom">
            15 FEB - 16 MAR 2019
            <br />
            COMPILATION, SOLO SHOW, CAFE KARMA, WARSAW, POLAND
          </p>
        </div>

        <div className="exhibition-card">
          <Link to="./Kolorowa_Warszawa">
            <img
              src="./assets/Exhibition/1-3.webp"
              alt="KOLOROWA WARSZAWA poster"
              className="exhibition-image"
            />
          </Link>
          <span className="description">
            Click the image to see the full collection.
          </span>
          <h3>KOLOROWA WARSZAWA </h3>
          <p className="eng-text bottom">
            1 DEC - 2 DEC 2018
            <br />
            Kolorowa Warszawa, SOLO SHOW, Polish Linguistic Institute, WARSAW,
            POLAND
          </p>
        </div>
      </div>
    </div>
  );
}

export default Exhibition;
