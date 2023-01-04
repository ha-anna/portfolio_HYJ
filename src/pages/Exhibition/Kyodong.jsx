import React from "react";
import ImageContext from "../../ImageContext";
import { Masonry } from "masonic";
import { sortAlphaNum } from "../../Utils/sortAlphaNum";
import { tabTitle } from "../../Utils/tabTitle";
import { getCards, getItems } from "../../Utils/grid";

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
            <Masonry
              items={items}
              columnWidth={400}
              maxColumnCount={5}
              columnGutter={15}
              rowGutter={10}
              render={cards}
              className="img-grid"
            ></Masonry>
          </>
        );
      }}
    </ImageContext.Consumer>
  );
}

export default Kyodong;
