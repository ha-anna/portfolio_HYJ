import React from "react";
import { Link } from "react-router-dom";

function Film() {
  return (
    <div className="film">
      <h2 className="page-title border-bottom">Film</h2>
      <article className="film-card">
        <section>
          <h3>
            Subscribe my dream
            <br />
            꿈도 구독이 되나요
          </h3>
          <Link to="./subscribe-my-dream" className="standard-button text-link">
            Screening link
          </Link>
        </section>
        <img
          src="./assets/Exhibition/Dont_Skip_It/1-0.webp"
          alt="Subscribe My Dream poster"
          className="film-img"
        />
      </article>
      <div className="border-bottom"></div>
    </div>
  );
}

export default Film;
