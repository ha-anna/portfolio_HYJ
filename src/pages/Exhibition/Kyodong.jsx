import React from "react";
import ImageContext from "../../ImageContext";
import { sortAlphaNum } from "../../Utils/sortAlphaNum";
import { tabTitle } from "../../Utils/tabTitle";
import { getCards, getItems } from "../../Utils/grid";
import ImageGrid from "../../components/ImageGrid";

function Kyodong() {
  tabTitle("Kyodong Art Group");

  const images = Object.keys(
    import.meta.glob("../../../public/assets/Exhibition/Kyodong/*", {
      as: "raw",
    })
  ).sort(sortAlphaNum);

  const cards = getCards();
  const items = getItems(images);

  return (
    <ImageContext.Consumer>
      {() => {
        return (
          <>
            <iframe
              src="https://www.youtube-nocookie.com/embed/hsTrCZUybhs"
              title="Kyodong Art Group Exhibition: Interview with Ha Youjun"
              frameBorder="0"
              allowFullScreen
              data-aos="fade-up"
              className="video-big"
            ></iframe>
            <ImageGrid items={items} cards={cards} />
          </>
        );
      }}
    </ImageContext.Consumer>
  );
}

export default Kyodong;
