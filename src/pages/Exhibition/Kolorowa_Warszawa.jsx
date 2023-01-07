import React from "react";
import ImageContext from "../../ImageContext";
import ImageGrid from "../../components/ImageGrid";
import { sortAlphaNum } from "../../Utils/sortAlphaNum";
import { tabTitle } from "../../Utils/tabTitle";
import { getCards, getItems } from "../../Utils/grid";

function Kolorowa_Warszawa() {
  tabTitle("Kolorowa Warszawa");

  const images = Object.keys(
    import.meta.glob("../../../public/assets/Exhibition/Kolorowa_Warszawa/*", {
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

export default Kolorowa_Warszawa;
