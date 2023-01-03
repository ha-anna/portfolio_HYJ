import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ImageContext from "../../ImageContext";
import { Masonry } from "masonic";
import { sortAlphaNum } from "../../Utils/sortAlphaNum";
import { tabTitle } from "../../Utils/tabTitle";

function Lee_Heemoon() {
  tabTitle("Lee Heemoon");
  const { clickedImg, setClickedImg } = useContext(ImageContext);
  const images = Object.keys(
    import.meta.glob("../../../public/assets/Commissioned/Lee_Heemoon/*", {
      as: "raw",
    })
  ).sort(sortAlphaNum);

  const items = images.map((item, i) => {
    return {
      src: item,
      index: i,
    };
  });

  const card = ({ data: { src, index } }) => (
    <Link
      to={`${src.match(`[^/]*$`)}`}
      key={index}
      onClick={() => setClickedImg(index)}
    >
      <img
        src={`/${src.match(/public\/(.*)/)[1]}`}
        alt=""
        className="grid-image"
      />
    </Link>
  );

  return (
    <ImageContext.Consumer>
      {({ clickedImg, setClickedImg }) => {
        return (
          <Masonry
            items={items}
            columnWidth={400}
            maxColumnCount={5}
            columnGutter={15}
            rowGutter={10}
            render={card}
            className="img-grid"
          ></Masonry>
        );
      }}
    </ImageContext.Consumer>
  );
}

export default Lee_Heemoon;
