"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");
var React = require("react");

require("./StackedCardSlider.css");

const StackedCardSlider = _ref => {
  let {
    data,
    slideTime
  } = _ref;
  (0, _react.useEffect)(() => {
    let sliderImagesBox = document.querySelectorAll(".cardsBox");
    sliderImagesBox.forEach(el => {
      let imageNodes = el.querySelectorAll(".stackedCard:not(.hide)");
      let arrIndexes = []; // Index array

      (() => {
        // The loop that added values to the arrIndexes array for the first time
        let start = 0;

        while (imageNodes.length > start) {
          arrIndexes.push(start++);
        }
      })();

      let setIndex = arr => {
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
  (0, _react.useEffect)(() => {
    setInterval(function () {
      document.querySelector(".stackedCard").click();
    }, slideTime || 3000);
  }, []);
  return /*#__PURE__*/React.createElement("main", {
    className: "cardsBox owlCarousel"
  }, data === null || data === void 0 ? void 0 : data.map(item => /*#__PURE__*/React.createElement(SingleCard, {
    img: item.img,
    title: item.title,
    recommended: item.recommended || false
  })));
};

const SingleCard = _ref2 => {
  let {
    img,
    title,
    recommended,
    hide
  } = _ref2;
  return /*#__PURE__*/React.createElement("div", {
    className: "stackedCard"
  }, /*#__PURE__*/React.createElement("img", {
    src: img,
    alt: "",
    className: "stackedCardImage"
  }), /*#__PURE__*/React.createElement("div", {
    className: "contentPlaceholder"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "stackedCardTitle"
  }, title), recommended && /*#__PURE__*/React.createElement("p", {
    className: "stackedCardRecommended"
  }, "RECOMMENDED")));
};

var _default = StackedCardSlider;
exports.default = _default;