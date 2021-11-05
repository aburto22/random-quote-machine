"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var DATA = [{
  text: "The problem is, we live in a society where all that interests us is power and money. So we don't have any interest in our children, and what we leave for our children is not important.",
  author: "Sebastiao Salgado",
  id: "quote-1"
}, {
  text: "Human well-being is not a random phenomenon. It depends on many factors - ranging from genetics and neurobiology to sociology and economics. But, clearly, there are scientific truths to be known about how we can flourish in this world. Wherever we can have an impact on the well-being of others, questions of morality apply.",
  author: "Sam Harris",
  id: "quote-2"
}, {
  text: "Together we can change the world, just one random act of kindness at a time.",
  author: "Ron Hall",
  id: "quote-3"
}, {
  text: "Everything happening around me is very random. I am enjoying the phase, as the journey is far more enjoyable than the destination.",
  author: "Sushant Singh Rajput",
  id: "quote-4"
}, {
  text: "Over every mountain there is a path, although it may not be seen from the valley.",
  author: "Theodore Roethke",
  id: "quote-5"
}, {
  text: "Time is the most valuable thing a man can spend.",
  author: "Theophrastus",
  id: "quote-6"
}, {
  text: "We live in a society where we never prepare people to be a community.",
  author: "Sebastiao Salgado",
  id: "quote-7"
}, {
  text: "Tough times never last, but tough people do.",
  author: "Robert H. Schuller",
  id: "quote-8"
}, {
  text: "There are no secrets that time does not reveal.",
  author: "Jean Racine",
  id: "quote-9"
}, {
  text: "Libraries are reservoirs of strength, grace and wit, reminders of order, calm and continuity, lakes of mental energy, neither warm nor cold, light nor dark.",
  author: "Germaine Greer",
  id: "quote-10"
}];

function Buttons(_ref) {
  var quote = _ref.quote,
      randomQuote = _ref.randomQuote;
  return /*#__PURE__*/React.createElement("div", {
    id: "buttons"
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://twitter.com/intent/tweet?text=" + quote.text + " Author: " + quote.author,
    id: "tweet-quote",
    target: "_blank"
  }, /*#__PURE__*/React.createElement("i", {
    "class": "bi bi-twitter"
  })), /*#__PURE__*/React.createElement("button", {
    type: "button",
    id: "new-quote",
    onClick: randomQuote
  }, "New quote"));
}

function Quote(_ref2) {
  var quote = _ref2.quote;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("i", {
    "class": "bi bi-chat-left-quote-fill",
    id: "quote-icon"
  }), /*#__PURE__*/React.createElement("p", {
    id: "text"
  }, quote.text), /*#__PURE__*/React.createElement("p", {
    id: "author"
  }, quote.author));
}

function Footer() {
  return /*#__PURE__*/React.createElement("p", {
    "class": "footer"
  }, "Created by Alejandro Aburto for a freeCodeCamp challange");
}

function App() {
  var _React$useState = React.useState(""),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      quote = _React$useState2[0],
      setQuote = _React$useState2[1];

  var quoteBox = React.useRef("");
  React.useEffect(function () {
    quoteBox.current = document.querySelector("#quote-box");
    quoteBox.current.style.opacity = 1;
  }, [quote]);

  function randomQuote() {
    var quoteList = DATA.filter(function (qt) {
      return qt.id == quote.id ? false : true;
    });
    var index = Math.floor(Math.random() * quoteList.length);

    if (quote !== "") {
      quoteBox.current.style.opacity = 0;
      setTimeout(function () {
        setQuote(quoteList[index]);
      }, 500);
    } else setQuote(quoteList[index]);
  }

  if (quote === "") {
    randomQuote();
  }

  return /*#__PURE__*/React.createElement("div", {
    id: "container"
  }, /*#__PURE__*/React.createElement("div", {
    id: "quote-box"
  }, /*#__PURE__*/React.createElement(Quote, {
    quote: quote
  }), /*#__PURE__*/React.createElement(Buttons, {
    randomQuote: randomQuote,
    quote: quote
  }), /*#__PURE__*/React.createElement(Footer, null)));
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.querySelector("main"));
