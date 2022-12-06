import React, { useState } from "react";
import Modal from "react-modal";
import ImageCarousel from "../../components/ImageCarousel";

function Kolorowa() {
  const [clickedImg, setClickedImg] = useState([]);
  const [modalIsOpen, setIsOpen] = React.useState(false);

  Modal.setAppElement("#root");

  function closeModal() {
    setIsOpen(false);
  }

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "100px",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const images = Object.keys(import.meta.glob("./kolorowa/*", { as: "raw" }));
  const imagesHtml = images.map((url, i) => (
    <img
      src={`./assets/${url.slice(2)}`}
      alt=""
      key={i}
      id={`${i}`}
      onClick={() => openModal(event)}
    />
  ));

  function openModal(event) {
    event.stopPropagation();
    setClickedImg(event.target.id);
    setIsOpen(true);
  }

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Kolorowa Photos"
        closeTimeoutMS={500}
      >
        <ImageCarousel images={images} clickedImg={clickedImg} />
      </Modal>
      <div className="img-grid">{imagesHtml}</div>
    </>
  );
}

export default Kolorowa;
