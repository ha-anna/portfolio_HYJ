import React, { useContext } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ImageContext from "../ImageContext";

function ImageCarousel({ name }) {
  const { clickedImg } = useContext(ImageContext);
  const sortAlphaNum = (a, b) => a.localeCompare(b, "en", { numeric: true });

  let images;
  switch (name) {
    case "Kolorowa":
      images = Object.keys(
        import.meta.glob("../../public/assets/Project/Kolorowa/*", {
          as: "raw",
        })
      ).sort(sortAlphaNum);
      break;
    case "New_Galateia":
      images = Object.keys(
        import.meta.glob("../../public/assets/Project/New_Galateia/*", {
          as: "raw",
        })
      ).sort(sortAlphaNum);
      break;
    case "Minus":
      images = Object.keys(
        import.meta.glob("../../public/assets/Project/Minus/*", {
          as: "raw",
        })
      ).sort(sortAlphaNum);
      break;
    case "Concrete":
      images = Object.keys(
        import.meta.glob("../../public/assets/Project/Concrete/*", {
          as: "raw",
        })
      ).sort(sortAlphaNum);
      break;
    case "Err0r":
      images = Object.keys(
        import.meta.glob("../../public/assets/Project/Err0r/*", {
          as: "raw",
        })
      ).sort(sortAlphaNum);
      break;
    case "Living_And_Gone":
      images = Object.keys(
        import.meta.glob("../../public/assets/Project/Living_And_Gone/*", {
          as: "raw",
        })
      ).sort(sortAlphaNum);
      break;
    case "Neoliberalism":
      images = Object.keys(
        import.meta.glob("../../public/assets/Reportage/Neoliberalism/*", {
          as: "raw",
        })
      ).sort(sortAlphaNum);
      break;
    case "LGBTQ_In_Warsaw":
      images = Object.keys(
        import.meta.glob("../../public/assets/Reportage/LGBTQ_In_Warsaw/*", {
          as: "raw",
        })
      ).sort(sortAlphaNum);
      break;
    case "8_1_Uprising":
      images = Object.keys(
        import.meta.glob("../../public/assets/Reportage/8_1_Uprising/*", {
          as: "raw",
        })
      ).sort(sortAlphaNum);
      break;
    case "Independence_Day":
      images = Object.keys(
        import.meta.glob("../../public/assets/Reportage/Independence_Day/*", {
          as: "raw",
        })
      ).sort(sortAlphaNum);
      break;
    case "Dont_Look_Back_In_Anger":
      images = Object.keys(
        import.meta.glob(
          "../../public/assets/Reportage/Dont_Look_Back_In_Anger/*",
          {
            as: "raw",
          }
        )
      ).sort(sortAlphaNum);
      break;
    case "Issues":
      images = Object.keys(
        import.meta.glob("../../public/assets/Reportage/Issues/*", {
          as: "raw",
        })
      ).sort(sortAlphaNum);
      break;
    case "Lee_Heemoon":
      images = Object.keys(
        import.meta.glob("../../public/assets/Commissioned/Lee_Heemoon/*", {
          as: "raw",
        })
      ).sort(sortAlphaNum);
      break;
    case "W_Mag_2019_2":
      images = Object.keys(
        import.meta.glob("../../public/assets/Commissioned/W_Mag_2019_2/*", {
          as: "raw",
        })
      ).sort(sortAlphaNum);
      break;
    case "Cheon_Jaeseung":
      images = Object.keys(
        import.meta.glob("../../public/assets/Commissioned/Cheon_Jaeseung/*", {
          as: "raw",
        })
      ).sort(sortAlphaNum);
      break;
    case "W_Mag_2019_1":
      images = Object.keys(
        import.meta.glob("../../public/assets/Commissioned/W_Mag_2019_1/*", {
          as: "raw",
        })
      ).sort(sortAlphaNum);
      break;
    case "Jungeunhae":
      images = Object.keys(
        import.meta.glob("../../public/assets/Commissioned/Jungeunhae/*", {
          as: "raw",
        })
      ).sort(sortAlphaNum);
      break;
    case "Delta_Boys":
      images = Object.keys(
        import.meta.glob("../../public/assets/Commissioned/Delta_Boys/*", {
          as: "raw",
        })
      ).sort(sortAlphaNum);
      break;
    case "W_Mag_2018":
      images = Object.keys(
        import.meta.glob("../../public/assets/Commissioned/W_Mag_2018/*", {
          as: "raw",
        })
      ).sort(sortAlphaNum);
      break;
    case "Jung_Sungil":
      images = Object.keys(
        import.meta.glob("../../public/assets/Commissioned/Jung_Sungil/*", {
          as: "raw",
        })
      ).sort(sortAlphaNum);
      break;
    case "Son_Yeyoung":
      images = Object.keys(
        import.meta.glob("../../public/assets/Commissioned/Son_Yeyoung/*", {
          as: "raw",
        })
      ).sort(sortAlphaNum);
      break;
    case "W_Mag_2017":
      images = Object.keys(
        import.meta.glob("../../public/assets/Commissioned/W_Mag_2017/*", {
          as: "raw",
        })
      ).sort(sortAlphaNum);
      break;
    case "G_Style_2016":
      images = Object.keys(
        import.meta.glob("../../public/assets/Commissioned/G_Style_2016/*", {
          as: "raw",
        })
      ).sort(sortAlphaNum);
      break;
    case "Jungeunhae_EU":
      images = Object.keys(
        import.meta.glob("../../public/assets/Commissioned/Jungeunhae_EU/*", {
          as: "raw",
        })
      ).sort(sortAlphaNum);
      break;
    case "Kyodong_Art_Group":
      images = Object.keys(
        import.meta.glob("../../public/assets/Exhibition/Kyodong/*", {
          as: "raw",
        })
      ).sort(sortAlphaNum);
      break;
    case "Dont_Skip_It":
      images = Object.keys(
        import.meta.glob("../../public/assets/Exhibition/Dont_Skip_It/*", {
          as: "raw",
        })
      ).sort(sortAlphaNum);
      break;
    case "Photo_Compilation":
      images = Object.keys(
        import.meta.glob("../../public/assets/Exhibition/Photo_Compilation/*", {
          as: "raw",
        })
      ).sort(sortAlphaNum);
      break;
    case "Kolorowa_Warszawa":
      images = Object.keys(
        import.meta.glob("../../public/assets/Exhibition/Kolorowa_Warszawa/*", {
          as: "raw",
        })
      ).sort(sortAlphaNum);
      break;
  }

  const imagesCarousel = images.map((url, i) => (
    <div key={i}>
      <img
        id={`${i}`}
        src={`/${url.match(/public\/(.*)/)[1]}`}
        alt=""
        className="carousel-img"
      />
    </div>
  ));

  const arrowStyles = {
    position: "absolute",
    zIndex: 1,
    top: "0",
    width: "35%",
    height: "100%",
    opacity: "0",
  };

  return (
    <>
      <Carousel
        selectedItem={clickedImg}
        showStatus={false}
        autoFocus={true}
        renderIndicator={false}
        showThumbs={false}
        dynamicHeight={true}
        emulateTouch={true}
        useKeyboardArrows={true}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button
              className="control-arrows"
              type="button"
              onClick={onClickHandler}
              title={label}
              style={{ ...arrowStyles, left: 0, cursor: "w-resize" }}
            >
              -
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              style={{ ...arrowStyles, right: 0, cursor: "e-resize" }}
            >
              +
            </button>
          )
        }
      >
        {imagesCarousel}
      </Carousel>
    </>
  );
}

export default ImageCarousel;
