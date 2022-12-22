import React from "react";
import { Link } from "react-router-dom";

function Commissioned() {
  return (
    <div className="commissioned">
      <h2 className="page-title border-bottom">Commissioned</h2>

      <div className="commissioned-grid">
        <div className="commissioned-card">
          <Link to="./lee-heemoon">
            <img
              src="./assets/Commissioned/lee_heemoon.webp"
              alt=""
              className="commissioned-image"
            />
          </Link>
          <h3>Lee Hee-moon, musician</h3>
          <span className="description">
            Click the image to see the full collection.
          </span>
        </div>

        <div className="commissioned-card">
          <Link to="./w-magazine-2019-2">
            <img
              src="./assets/Commissioned/w_mag_2019_2.webp"
              alt=""
              className="commissioned-image"
            />
          </Link>
          <h3>W Magazine (2019)</h3>
          <span className="description">
            Click the image to see the full collection.
          </span>
        </div>

        <div className="commissioned-card">
          <Link to="./cheon-jaeseung">
            <img
              src="./assets/Commissioned/cheon_jaeseung.webp"
              alt=""
              className="commissioned-image"
            />
          </Link>
          <h3>Cheon Jae-seung, pianist</h3>
          <span className="description">
            Click the image to see the full collection.
          </span>
        </div>

        <div className="border-bottom max-width"></div>

        <div className="commissioned-card">
          <Link to="./w-magazine-2019-1">
            <img
              src="./assets/Commissioned/w_mag_2019_1.webp"
              alt=""
              className="commissioned-image"
            />
          </Link>
          <h3>W Magazine (2019)</h3>
          <span className="description">
            Click the image to see the full collection.
          </span>
        </div>

        <div className="commissioned-card">
          <Link to="./jungeunhae">
            <img
              src="./assets/Commissioned/jungeunhae.webp"
              alt=""
              className="commissioned-image"
            />
          </Link>
          <h3>Jung Eun-hae Dance Korea</h3>
          <span className="description">
            Click the image to see the full collection.
          </span>
        </div>

        <div className="commissioned-card">
          <Link to="./delta-boys">
            <img
              src="./assets/Commissioned/delta_boys.webp"
              alt=""
              className="commissioned-image"
            />
          </Link>
          <h3>Delta Boys Crew, actor</h3>
          <span className="description">
            Click the image to see the full collection.
          </span>
        </div>

        <div className="border-bottom max-width"></div>

        <div className="commissioned-card">
          <Link to="./w-magazine-2018">
            <img
              src="./assets/Commissioned/w_mag_2018.webp"
              alt=""
              className="commissioned-image"
            />
          </Link>
          <h3>W Magazine (2018)</h3>
          <span className="description">
            Click the image to see the full collection.
          </span>
        </div>

        <div className="commissioned-card">
          <Link to="./jung-sungil">
            <img
              src="./assets/Commissioned/jung_sungil.webp"
              alt=""
              className="commissioned-image"
            />
          </Link>
          <h3>Jung Sung-il, film critics</h3>
          <span className="description">
            Click the image to see the full collection.
          </span>
        </div>

        <div className="commissioned-card">
          <Link to="./son-yeyoung">
            <img
              src="./assets/Commissioned/son_yeyoung.webp"
              alt=""
              className="commissioned-image"
            />
          </Link>
          <h3>Son Ye-young, Soprano</h3>
          <span className="description">
            Click the image to see the full collection.
          </span>
        </div>

        <div className="border-bottom max-width"></div>

        <div className="commissioned-card">
          <Link to="./w-magazine-2017">
            <img
              src="./assets/Commissioned/w_mag_2017.webp"
              alt=""
              className="commissioned-image"
            />
          </Link>
          <h3>W Magazine (2017)</h3>
          <span className="description">
            Click the image to see the full collection.
          </span>
        </div>

        <div className="commissioned-card">
          <Link to="./g-style-2016">
            <img
              src="./assets/Commissioned/g_style_2016.webp"
              alt=""
              className="commissioned-image"
            />
          </Link>
          <h3>G Style (2016)</h3>
          <span className="description">
            Click the image to see the full collection.
          </span>
        </div>

        <div className="commissioned-card">
          <Link to="./jungeunhae-eu">
            <img
              src="./assets/Commissioned/jungeunhae_eu.webp"
              alt=""
              className="commissioned-image"
            />
          </Link>
          <h3>Jung Eun-hae Europe tour</h3>
          <span className="description">
            Click the image to see the full collection.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Commissioned;
