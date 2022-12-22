import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import ImageCarousel from "../components/ImageCarousel";

function ImageView() {
  const { name, id } = useParams();
  const navigate = useNavigate();

  return (
    <>
      <ImageCarousel name={name} id={id.slice(0, -5)} order={1} />
      <button onClick={() => navigate(-1)} className="standard-button">
        Go back one page
      </button>
    </>
  );
}

export default ImageView;
