import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import ImageCarousel from "../components/ImageCarousel";

function ImageView() {
  const { name } = useParams();
  const navigate = useNavigate();

  return (
    <>
      <ImageCarousel name={name} />
      <p className="description margin-top">
        You can swipe or hover over the photo to click through the gallery.
      </p>
      <button
        onClick={() => navigate(-1)}
        className="standard-button margin-top"
      >
        Go back one page
      </button>
    </>
  );
}

export default ImageView;
