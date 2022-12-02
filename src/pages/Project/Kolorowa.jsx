import React, { useState } from "react";
import ImageModal from "../../components/ImageModal";

function Kolorowa() {
  const [clickedImg, setClickedImg] = useState([]);

  const images = Object.keys(import.meta.glob("./kolorowa/*", { as: "raw" }));
  const imagesHtml = images.map((url, i) => (
    <img
      src={`./assets/${url.slice(2)}`}
      alt=""
      key={i}
      id={`${i}`}
      onClick={() => selectImg(event)}
    />
  ));

  function selectImg(event) {
    console.log(event.target.id);
    setClickedImg(event.target.id);
  }

  return (
    <>
      <ImageModal images={images} clickedImg={clickedImg} />
      <div className="img-grid">{imagesHtml}</div>
    </>
  );
}

export default Kolorowa;
