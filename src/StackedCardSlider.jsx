import { useEffect } from "react";
import "./StackedCardSlider.css";

const StackedCardSlider = ({ data, slideTime }) => {
  useEffect(() => {
    let sliderImagesBox = document.querySelectorAll(".cardsBox");
    sliderImagesBox.forEach((el) => {
      let imageNodes = el.querySelectorAll(".stackedCard:not(.hide)");
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

  useEffect(() => {
    setInterval(function() {
      document.querySelector(".stackedCard").click();
    }, slideTime || 3000);
  }, []);

  return (
    <main className="cardsBox owlCarousel">
      {/* <SingleCard hide /> */}
      {data?.map((item) => 
        <SingleCard
          img={item.img}
          title={item.title}
          recommended={item.recommended || false}
        />
      )}
    </main>
  );
};

const SingleCard = ({ img, title, recommended, hide }) => {
  return (
    <div className="stackedCard">
      {/* <div className={`stacked__card ${hide !== undefined ? " hide" : ""}`}> */}
      <img src={img} alt="" className="stackedCardImage" />
      <div className="contentPlaceholder">
        <h3 className="stackedCardTitle">{title}</h3>
        {recommended && <p className="stackedCardRecommended">RECOMMENDED</p>}
      </div>
    </div>
  );
};

export default StackedCardSlider;
