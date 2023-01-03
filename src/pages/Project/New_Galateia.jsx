import React from "react";
import ImageContext from "../../ImageContext";
import { Masonry } from "masonic";
import { sortAlphaNum } from "../../Utils/sortAlphaNum";
import { tabTitle } from "../../Utils/tabTitle";
import { getCards, getItems } from "../../Utils/grid";

function New_Galateia() {
  tabTitle("New Galateia");

  const images = Object.keys(
    import.meta.glob("../../../public/assets/Project/New_Galateia/*", {
      as: "raw",
    })
  ).sort(sortAlphaNum);

  const cards = getCards();
  const items = getItems(images);

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
            render={cards}
            className="img-grid"
          ></Masonry>
        );
      }}
    </ImageContext.Consumer>
  );
}

export default New_Galateia;
