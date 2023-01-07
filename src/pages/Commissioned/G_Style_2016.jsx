import React from "react";
import ImageContext from "../../ImageContext";
import ImageGrid from "../../components/ImageGrid";
import { sortAlphaNum } from "../../Utils/sortAlphaNum";
import { tabTitle } from "../../Utils/tabTitle";
import { getCards, getItems } from "../../Utils/grid";

function G_Style_2017() {
  tabTitle("G Style 2017");

  const images = Object.keys(
    import.meta.glob("../../../public/assets/Commissioned/G_Style_2016/*", {
      as: "raw",
    })
  ).sort(sortAlphaNum);

  const cards = getCards();
  const items = getItems(images);

  return (
    <ImageContext.Consumer>
      {() => {
        return <ImageGrid items={items} cards={cards} />;
      }}
    </ImageContext.Consumer>
  );
}

export default G_Style_2017;
