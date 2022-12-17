import React, { useState } from "react";
import Modal from "react-modal";
import ImageCarousel from "../../../components/ImageCarousel";
import { Link, generatePath } from "react-router-dom";
import { CarouselProvider } from "../../../carouselContext";

function Kolorowa() {
  // const context = React.useContext(CarouselContext);
  const [modalIsOpen, setIsOpen] = React.useState(false);

  // Modal.setAppElement("#root");

  // function closeModal() {
  //   setIsOpen(false);
  // }

  // const customStyles = {
  //   content: {
  //     top: "50%",
  //     left: "50%",
  //     right: "100px",
  //     bottom: "auto",
  //     marginRight: "-50%",
  //     transform: "translate(-50%, -50%)",
  //   },
  // };
  // generatePath("/:name", { name: clickedImg });

  const images = Object.keys(import.meta.glob("./assets/*", { as: "raw" }));
  const imagesHtml = images.map((url, i) => (
    <Link to={`${url.slice(9)}`} key={i}>
      <img
        src={`./assets/Kolorowa/${url.slice(9)}`}
        alt=""
        key={i}
        id={`${i}`}
        // onClick={() => openModal(event)}
      />
    </Link>
  ));

  // function openModal(event) {
  //   event.stopPropagation();
  //   setClickedImg(event.target.id);
  //   setIsOpen(true);
  // }

  return (
    <>
      {/* <ImageCarousel
        images={images}
        clickedImg={clickedImg}
      /> */}
      <div className="img-grid">{imagesHtml}</div>
    </>
  );
}

export default Kolorowa;
