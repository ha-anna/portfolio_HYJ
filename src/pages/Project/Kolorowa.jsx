import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ImageContext from "../../ImageContext";
import { Masonry } from "masonic";

function Kolorowa() {
  const { clickedImg, setClickedImg } = useContext(ImageContext);

  const sortAlphaNum = (a, b) => a.localeCompare(b, "en", { numeric: true });

  const items = Object.keys(
    import.meta.glob("../../../public/assets/Project/Kolorowa/*", { as: "raw" })
  ).sort(sortAlphaNum);

  const items2 = items.map((item, i) => {
    return {
      src: item,
      index: i,
    };
  });

  const card = ({ data: { src, index } }) => (
    <Link
      to={`Kolorowa/${src.match(`[^/]*$`)}`}
      key={index}
      onClick={() => setClickedImg(index)}
    >
      <img
        src={`${src.match(/public\/(.*)/)[1]}`}
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
            items={items2}
            columnWidth={400}
            maxColumnCount={5}
            columnGutter={20}
            rowGutter={20}
            render={card}
          ></Masonry>
        );
      }}
    </ImageContext.Consumer>
    // <p>hi</p>
  );
}

export default Kolorowa;
{
  /* <div className="img-grid">{imagesHtml}</div>; */
}
