import React, { useState } from "react";
import { Link, generatePath } from "react-router-dom";

function LGBTQ_In_Warsaw() {
  const images = Object.keys(import.meta.glob("./assets/*", { as: "raw" }));
  const imagesHtml = images.map((url, i) => (
    <Link to={`${url.slice(9)}`} key={i}>
      <img
        src={`./assets/Reportage/LGBTQ_In_Warsaw/${url.slice(9)}`}
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

export default LGBTQ_In_Warsaw;
