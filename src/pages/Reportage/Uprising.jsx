import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ImageContext from "../../ImageContext";
import { Masonry } from "masonic";
import { sortAlphaNum } from "../../Utils/sortAlphaNum";
import { tabTitle } from "../../Utils/tabTitle";

function Uprising() {
  const { clickedImg, setClickedImg } = useContext(ImageContext);
  const images = Object.keys(
    import.meta.glob("../../../public/assets/Reportage/8_1_Uprising/*", {
      as: "raw",
    })
  );
  const imagesHtml = images.map((url, i) => (
    <Link to={`${i + 1}`} key={i} onClick={() => setClickedImg(i)}>
      <img src={`./${url.match(/public\/(.*)/)[1]}`} alt="" key={i} />
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

export default Uprising;
