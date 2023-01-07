import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ImageContext from "../ImageContext";

export function getItems(images) {
  const data = images.map((item, i) => {
    return {
      src: item,
      index: i,
    };
  });
  return data;
}

export function getCards() {
  const { clickedImg, setClickedImg } = useContext(ImageContext);

  const card = ({ data: { src, index } }) => (
    <Link
      to={`${src.match(`[^/]*$`)}`}
      key={index}
      onClick={() => setClickedImg(index)}
      aria-label="See the bigger version of the photo"
    >
      <img
        src={`/${src.match(/public\/(.*)/)[1]}`}
        alt=""
        className="grid-image"
        loading="lazy"
        data-aos="fade-up"
      />
    </Link>
  );
  return card;
}
