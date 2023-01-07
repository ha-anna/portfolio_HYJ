import React from "react";
import ImageContext from "../../ImageContext";
import ImageGrid from "../../components/ImageGrid";
import { sortAlphaNum } from "../../Utils/sortAlphaNum";
import { tabTitle } from "../../Utils/tabTitle";
import { getCards, getItems } from "../../Utils/grid";

function Independence_Day() {
  tabTitle("Independence Day");

  const images = Object.keys(
    import.meta.glob("../../../public/assets/Reportage/Independence_Day/*", {
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

export default Independence_Day;
