import React, { useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function ImageCarouselWithArrows({ images }) {
  const imagesCarousel = images.map((url, i) => (
    <div key={i}>
      <img
        src={`./assets/${url.slice(2)}`}
        alt=""
        className="project-carousel-img"
      />
    </div>
  ));

  const customRenderThumb = (children) =>
    children.map((item) => {
      const { src } = item.props.children.props;
      console.log(src);
      return <img src={src} alt="" className="carousel-thumb" />;
    });

  return (
    <>
      <Carousel
        showStatus={false}
        renderIndicator={false}
        showThumbs={true}
        renderThumbs={customRenderThumb}
        emulateTouch={true}
        useKeyboardArrows={true}
        infiniteLoop={true}
      >
        {imagesCarousel}
      </Carousel>
    </>
  );
}

export default ImageCarouselWithArrows;
