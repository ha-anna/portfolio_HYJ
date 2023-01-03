import React from "react";
import { Link } from "react-router-dom";
import { tabTitle } from "../../Utils/tabTitle";

function Commissioned() {
  tabTitle("Commissioned");
  return (
    <div className="commissioned">
      <h2 className="page-title border-bottom">Commissioned</h2>

      <div className="commissioned-grid">
        <div className="commissioned-card">
          <Link to="./Lee_Heemoon">
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
          <Link to="./W_Mag_2019_2">
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
          <Link to="./Cheon_Jaeseung">
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
          <Link to="./W_Mag_2019_1">
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
          <Link to="./Jungeunhae">
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
          <Link to="./Delta_Boys">
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
          <Link to="./W_Mag_2018">
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
          <Link to="./Jung_Sungil">
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
          <Link to="./Son_Yeyoung">
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
          <Link to="./W_Mag_2017">
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
          <Link to="./G_Style_2016">
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
          <Link to="./Jungeunhae_EU">
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
