import React from "react";
import ImageContext from "../../ImageContext";
import { sortAlphaNum } from "../../Utils/sortAlphaNum";
import { tabTitle } from "../../Utils/tabTitle";
import { getCards, getItems } from "../../Utils/grid";
import ImageGrid from "../../components/ImageGrid";

function Concrete() {
  tabTitle("Concrete");

  const images = Object.keys(
    import.meta.glob("../../../public/assets/Project/Concrete/*", { as: "raw" })
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

export default Concrete;
