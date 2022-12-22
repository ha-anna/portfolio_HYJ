import React, { useState } from "react";
import { Link } from "react-router-dom";

function W_Mag_2019_1() {
  const images = Object.keys(
    import.meta.glob("../../../public/assets/Commissioned/W_Mag_2019_1/*", {
      as: "raw",
    })
  );
  const imagesHtml = images.map((url, i) => (
    <Link to={`${i + 1}`} key={i}>
      <img
        src={`/${url.match(/public\/(.*)/)[1]}`}
        alt=""
        key={i}
        id={`${i}`}
      />
    </Link>
  ));

  return (
    <>
      <div className="img-grid">{imagesHtml}</div>
    </>
  );
}

export default W_Mag_2019_1;
