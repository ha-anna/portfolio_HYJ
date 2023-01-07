import React, { useEffect, useState } from "react";
import { Masonry } from "masonic";

function ImageGrid({ items, cards }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const myTimeout = setTimeout(() => {
      const grid = document.getElementById("img-grid");
      grid.style.opacity = "1";
    }, 300);
  }, []);

  return (
    <Masonry
      items={items}
      columnWidth={400}
      maxColumnCount={5}
      columnGutter={15}
      rowGutter={10}
      render={cards}
      id="img-grid"
      className="img-grid"
      aria-labelledby="image-grid"
    ></Masonry>
  );
}

export default ImageGrid;
