import React, { useState } from "react";
import { Link, generatePath } from "react-router-dom";

function Dont_Look_Back_In_Anger() {
  const images = Object.keys(
    import.meta.glob(
      "../../../public/assets/Reportage/Dont_Look_Back_In_Anger/*",
      { as: "raw" }
    )
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

export default Dont_Look_Back_In_Anger;
