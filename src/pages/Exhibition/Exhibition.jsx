import React from "react";
import { Link } from "react-router-dom";

function Exhibition() {
  return (
    <div className="exhibition">
      <h2 className="page-title border-bottom">Exhibition</h2>

      <div className="exhibition-grid">
        <div className="card">
          <Link to="./kyodong-art-group">
            <img
              src="./assets/Exhibition/1-4.webp"
              alt="KYODONG ART GROUP poster"
              className="exhibition-image"
            />
          </Link>
          <h3>KYODONG ART GROUP by Suwon Cultural Foundation</h3>
          <p>
            25 JUNE - 25 JULY 2021
            <br />
            Connection, GROUP SHOW, Kyo-dong street gallery, Suwon, South Korea
          </p>
        </div>
      </div>
    </div>
  );
}

export default Exhibition;
