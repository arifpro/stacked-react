import "./StackedCardSlider.scss";

const StackedCardSlider = () => {
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
    <div className={`stacked__card${hide !== undefined ? " hide" : ""}`}>
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
