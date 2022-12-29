import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ImageContext from "../../ImageContext";

function W_Mag_2018() {
  const { clickedImg, setClickedImg } = useContext(ImageContext);
  const images = Object.keys(
    import.meta.glob("../../../public/assets/Commissioned/W_Mag_2018/*", {
      as: "raw",
    })
  );
  const imagesHtml = images.map((url, i) => (
    <Link to={`${i + 1}`} key={i} onClick={() => setClickedImg(i)}>
      <img src={`/${url.match(/public\/(.*)/)[1]}`} alt="" key={i} />
    </Link>
  ));

  return (
    <ImageContext.Consumer>
      {({ clickedImg, setClickedImg }) => {
        return <div className="img-grid">{imagesHtml}</div>;
      }}
    </ImageContext.Consumer>
  );
}

export default W_Mag_2018;
