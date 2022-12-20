import React, { useState } from "react";
import { Link, generatePath } from "react-router-dom";

function New_Galateia() {
  const images = Object.keys(
    import.meta.glob("../../../public/assets/Project/New_Galateia/*", {
      as: "raw",
    })
  );

  const imagesHtml = images.map((url, i) => (
    <Link to={`${i + 1}`} key={i}>
      <img src={`${url.match(/public\/(.*)/)[1]}`} alt="" key={i} id={`${i}`} />
    </Link>
  ));

  return (
    <>
      <div className="img-grid">{imagesHtml}</div>
    </>
  );
}

export default New_Galateia;
