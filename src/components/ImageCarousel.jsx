import React, { useContext } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ImageContext from "../ImageContext";

function ImageCarousel({ name }) {
  const { clickedImg } = useContext(ImageContext);

  let images;
  switch (name) {
    case "Kolorowa":
      images = Object.keys(
        import.meta.glob("../../public/assets/Project/Kolorowa/*", {
          as: "raw",
        })
      );
      break;
    case "New_Galateia":
      images = Object.keys(
        import.meta.glob("../../public/assets/Project/New_Galateia/*", {
          as: "raw",
        })
      );
      break;
    case "Minus":
      images = Object.keys(
        import.meta.glob("../../public/assets/Project/Minus/*", {
          as: "raw",
        })
      );
      break;
    case "Concrete":
      images = Object.keys(
        import.meta.glob("../../public/assets/Project/Concrete/*", {
          as: "raw",
        })
      );
      break;
    case "Err0r":
      images = Object.keys(
        import.meta.glob("../../public/assets/Project/Err0r/*", {
          as: "raw",
        })
      );
      break;
    case "Living_And_Gone":
      images = Object.keys(
        import.meta.glob("../../public/assets/Project/Living_And_Gone/*", {
          as: "raw",
        })
      );
      break;
  }

  const imagesCarousel = images.map((url, i) => (
    <div key={i}>
      <img
        id={`${i}`}
        src={`./../${url.match(/public\/(.*)/)[1]}`}
        alt=""
        className="carousel-img"
      />
    </div>
  ));

  console.log(imagesCarousel);

  const arrowStyles = {
    position: "absolute",
    zIndex: 1,
    top: "0",
    width: "35%",
    height: "100%",
    opacity: "0",
  };

  return (
    <>
      <Carousel
        selectedItem={clickedImg}
        showStatus={false}
        autoFocus={true}
        renderIndicator={false}
        showThumbs={false}
        dynamicHeight={true}
        emulateTouch={true}
        useKeyboardArrows={true}
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

export default ImageCarousel;
