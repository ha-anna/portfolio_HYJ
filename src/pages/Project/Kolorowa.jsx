import React, { useState } from "react";
import Modal from "react-modal";
import ImageCarousel from "../../components/ImageCarousel";
import { Link, generatePath } from "react-router-dom";
import { CarouselProvider } from "../../carouselContext";

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

  const images = Object.keys(
    import.meta.glob("../../../public/assets/Project/Kolorowa/*", { as: "raw" })
  );
  const imagesHtml = images.map((url, i) => (
    <Link to={`${url.match(`[^/]+(?=/$|$)`)}`} key={i}>
      <img src={`${url.match(/public\/(.*)/)[1]}`} alt="" key={i} id={`${i}`} />
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
