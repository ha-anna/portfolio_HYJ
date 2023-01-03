import React from "react";
import ImageContext from "../../ImageContext";
import { Masonry } from "masonic";
import { sortAlphaNum } from "../../Utils/sortAlphaNum";
import { tabTitle } from "../../Utils/tabTitle";
import { getCards, getItems } from "../../Utils/grid";

function W_Mag_2019_1() {
  tabTitle("W Magazine 2019");

  const images = Object.keys(
    import.meta.glob("../../../public/assets/Commissioned/W_Mag_2019_1/*", {
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

export default W_Mag_2019_1;
