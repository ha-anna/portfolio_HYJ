import React from "react";
import { Masonry } from "masonic";

function ImageGrid({ items, cards }) {
  return (
    <Masonry
      items={items}
      columnWidth={400}
      maxColumnCount={5}
      columnGutter={15}
      rowGutter={10}
      render={cards}
      className="img-grid"
      aria-labelledby="image-grid"
    ></Masonry>
  );
}

export default ImageGrid;
