import React, { useState } from "react";
import { Link, generatePath } from "react-router-dom";

function Independence_Day() {
  const images = Object.keys(import.meta.glob("./assets/*", { as: "raw" }));
  const imagesHtml = images.map((url, i) => (
    <Link to={`${url.slice(9)}`} key={i}>
      <img
        src={`./assets/Reportage/Independence_Day/${url.slice(9)}`}
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

export default Independence_Day;
