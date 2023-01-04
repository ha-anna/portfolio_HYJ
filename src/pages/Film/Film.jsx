import React from "react";
import { Link } from "react-router-dom";
import { tabTitle } from "../../Utils/tabTitle";

function Film() {
  tabTitle("Film");
  return (
    <div className="film">
      <h2 className="page-title border-bottom">Film</h2>
      <article className="film-card" data-aos="fade-up">
        <section className="title-section">
          <h3>
            Subscribe my dream
            <br />
            꿈도 구독이 되나요
          </h3>
          <Link to="./Subscribe_My_Dream" className="standard-button text-link">
            SCREENING LINK
          </Link>
        </section>
        <img
          src="./assets/Exhibition/Dont_Skip_It/1.png"
          alt="Subscribe My Dream poster"
          className="film-img"
        />
      </article>

      <div className="border-bottom"></div>

      {/* <article className="film-card video">
        <section>
          <h3>Artist on the sight</h3>
          <p className="description">"Listen, Imagine and Feel the place"</p>
        </section>
      </article>
      <div className="border-bottom"></div> */}

      <article className="film-card video" data-aos="fade-up">
        <section className="film-title-section">
          <h3>
            Next Town SOUND
            <br />
            옆-동네 싸아운드
          </h3>

          <iframe
            src="https://www.youtube-nocookie.com/embed/JskoMciGMN0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="video-big"
          ></iframe>
        </section>
        <section className="videos-section">
          <iframe
            src="https://www.youtube-nocookie.com/embed/JDSHqVFptCo"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="video-small"
          ></iframe>

          <iframe
            src="https://www.youtube-nocookie.com/embed/87rg3tosq7M"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="video-small"
          ></iframe>

          <iframe
            src="https://www.youtube-nocookie.com/embed/sKHQ0ShT7OY"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="video-small"
          ></iframe>
        </section>
      </article>
      <div className="border-bottom"></div>
    </div>
  );
}

export default Film;
