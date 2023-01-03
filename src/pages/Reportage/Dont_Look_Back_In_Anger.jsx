import React from "react";
import ImageContext from "../../ImageContext";
import { Masonry } from "masonic";
import { sortAlphaNum } from "../../Utils/sortAlphaNum";
import { tabTitle } from "../../Utils/tabTitle";
import { getCards, getItems } from "../../Utils/grid";

function Dont_Look_Back_In_Anger() {
  tabTitle("Don't Look Back In Anger");

  const images = Object.keys(
    import.meta.glob(
      "../../../public/assets/Reportage/Dont_Look_Back_In_Anger/*",
      { as: "raw" }
    )
  ).sort(sortAlphaNum);

  const cards = getCards();
  const items = getItems(images);

  return (
    <ImageContext.Consumer>
      {() => {
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

export default Dont_Look_Back_In_Anger;
