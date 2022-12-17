import React, { useState } from "react";
import { Link, generatePath } from "react-router-dom";

function Issues() {
  const images = Object.keys(
    import.meta.glob("../../../public/assets/Reportage/Issues/*", { as: "raw" })
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

export default Issues;
