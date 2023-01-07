import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ImageContext from "../../ImageContext";
import ImageGrid from "../../components/ImageGrid";
import { sortAlphaNum } from "../../Utils/sortAlphaNum";
import { tabTitle } from "../../Utils/tabTitle";
import { getItems } from "../../Utils/grid";

function Kolorowa() {
  tabTitle("Kolorowa");
  const { clickedImg, setClickedImg } = useContext(ImageContext);

  const images = Object.keys(
    import.meta.glob("../../../public/assets/Project/Kolorowa/*", { as: "raw" })
  ).sort(sortAlphaNum);

  const items = getItems(images);

  const cards = ({ data: { src, index } }) => (
    <Link
      to={`Kolorowa/${src.match(`[^/]*$`)}`}
      key={index}
      onClick={() => setClickedImg(index)}
    >
      <img
        src={`${src.match(/public\/(.*)/)[1]}`}
        alt=""
        className="grid-image"
        data-aos="fade-up"
      />
    </Link>
  );

  return (
    <ImageContext.Consumer>
      {() => {
        return <ImageGrid items={items} cards={cards} />;
      }}
    </ImageContext.Consumer>
  );
}

export default Kolorowa;
