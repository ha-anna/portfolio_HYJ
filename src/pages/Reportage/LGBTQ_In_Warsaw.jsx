import React from "react";
import ImageContext from "../../ImageContext";
import ImageGrid from "../../components/ImageGrid";
import { sortAlphaNum } from "../../Utils/sortAlphaNum";
import { tabTitle } from "../../Utils/tabTitle";
import { getCards, getItems } from "../../Utils/grid";

function LGBTQ_In_Warsaw() {
  tabTitle("LGBTQ In Warsaw");

  const images = Object.keys(
    import.meta.glob("../../../public/assets/Reportage/LGBTQ_In_Warsaw/*", {
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

export default LGBTQ_In_Warsaw;
