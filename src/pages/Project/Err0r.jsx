import React, { useState } from "react";
import { Link, generatePath } from "react-router-dom";

function Err0r() {
  const images = Object.keys(
    import.meta.glob("../../../public/assets/Project/Err0r/*", { as: "raw" })
  );
  const imagesHtml = images.map((url, i) => (
    <Link to={`${url.match(`[^/]+(?=/$|$)`)}`} key={i}>
      <img src={`${url.match(/public\/(.*)/)[1]}`} alt="" key={i} id={`${i}`} />
    </Link>
  ));

  return (
    <>
      <div className="img-grid">{imagesHtml}</div>
    </>
  );
}

export default Err0r;