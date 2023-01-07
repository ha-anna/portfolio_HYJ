import React from "react";
import ImageContext from "../../ImageContext";
import ImageGrid from "../../components/ImageGrid";
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
        return <ImageGrid items={items} cards={cards} />;
      }}
    </ImageContext.Consumer>
  );
}

export default Dont_Look_Back_In_Anger;
