import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import ImageCarousel from "../components/ImageCarousel";

function ImageView() {
  const { name } = useParams();
  const navigate = useNavigate();

  return (
    <>
      <ImageCarousel name={name} />
      <button onClick={() => navigate(-1)} className="standard-button">
        Go back one page
      </button>
    </>
  );
}

export default ImageView;
