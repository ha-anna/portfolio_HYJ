import React, { useState } from "react";
import { Link } from "react-router-dom";

function Jungeunhae_EU() {
  const images = Object.keys(
    import.meta.glob("../../../public/assets/Commissioned/Jungeunhae_EU/*", {
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

export default Jungeunhae_EU;
