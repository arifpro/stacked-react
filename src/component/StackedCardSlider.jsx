import { useEffect } from "react";
import "./StackedCardSlider.scss";
// import styles from "./StackedCardSlider.module.scss";

const StackedCardSlider = () => {
  useEffect(() => {
    let sliderImagesBox = document.querySelectorAll(".cardsBox");
    sliderImagesBox.forEach((el) => {
      let imageNodes = el.querySelectorAll(".stacked__card:not(.hide)");
      let arrIndexes = []; // Index array
      (() => {
        // The loop that added values to the arrIndexes array for the first time
        let start = 0;
        while (imageNodes.length > start) {
          arrIndexes.push(start++);
        }
      })();

      let setIndex = (arr) => {
        for (let i = 0; i < imageNodes.length; i++) {
          imageNodes[i].dataset.slide = arr[i]; // Set indexes
        }
      };
      el.addEventListener("click", () => {
        arrIndexes.unshift(arrIndexes.pop());
        setIndex(arrIndexes);
      });
      setIndex(arrIndexes); // The first indexes addition
    });
  }, []);

  return (
    <main className="cardsBox owlCarousel">
      {/* <SingleCard letter="" hide /> */}
      <SingleCard letter="A" />
      <SingleCard letter="R" />
      <SingleCard letter="I" />
      <SingleCard letter="F" />
    </main>
  );
};

const SingleCard = ({ letter, hide }) => {
  return (
    // <div className={`card ${hide !== undefined ? "hide" : ""}`}>
    <div className="stacked__card">
      <div className="contentPlaceholder">
        <div className="row">
          <div className="img" data-letter={letter}></div>
          <div className="imgText"></div>
        </div>
        <div className="text text__l"></div>
        <div className="text text__m"></div>
        <div className="text text__s"></div>
        <div className="btn"></div>
      </div>
    </div>
  );
};

export default StackedCardSlider;
