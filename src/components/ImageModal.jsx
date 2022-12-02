import React, { useState } from "react";
import Modal from "react-modal";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function ImageModal({ images, clickedImg }) {
  const imagesCarousel = images.map((url, i) => (
    <div key={i}>
      <img src={`./assets/${url.slice(2)}`} alt="" className="carousel-img" />
    </div>
  ));

  const arrowStyles = {
    position: "absolute",
    zIndex: 2,
    top: "0",
    width: "35%",
    height: "100%",
    opacity: "0",
  };

  return (
    <>
      <Carousel
        selectedItem={clickedImg}
        autoFocus={true}
        showStatus={false}
        renderIndicator={false}
        showThumbs={false}
        dynamicHeight={true}
        emulateTouch={true}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button
              className="control-arrows"
              type="button"
              onClick={onClickHandler}
              title={label}
              style={{ ...arrowStyles, left: 0, cursor: "w-resize" }}
            >
              -
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              style={{ ...arrowStyles, right: 0, cursor: "e-resize" }}
            >
              +
            </button>
          )
        }
      >
        {imagesCarousel}
      </Carousel>
    </>
  );
}

export default ImageModal;
