import React from "react";

const CarouselContext = React.createContext("");

function CarouselProvider({ children }) {
  const [clickedImg, setClickedImg] = React.useState("");

  return (
    <CarouselContext.Provider value={clickedImg}>
      {children}
    </CarouselContext.Provider>
  );
}

export { CarouselProvider };
