import React, { useState } from "react";
import { Link, generatePath } from "react-router-dom";

function Living_And_Gone() {
  const images = Object.keys(
    import.meta.glob("../../../public/assets/Project/Living_And_Gone/*", {
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

export default Living_And_Gone;
