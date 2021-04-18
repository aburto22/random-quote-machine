const DATA = [
  {
    text:
      "The problem is, we live in a society where all that interests us is power and money. So we don't have any interest in our children, and what we leave for our children is not important.",
    author: "Sebastiao Salgado",
    id: "quote-1",
  },
  {
    text:
      "Human well-being is not a random phenomenon. It depends on many factors - ranging from genetics and neurobiology to sociology and economics. But, clearly, there are scientific truths to be known about how we can flourish in this world. Wherever we can have an impact on the well-being of others, questions of morality apply.",
    author: "Sam Harris",
    id: "quote-2",
  },
  {
    text:
      "Together we can change the world, just one random act of kindness at a time.",
    author: "Ron Hall",
    id: "quote-3",
  },
  {
    text:
      "Everything happening around me is very random. I am enjoying the phase, as the journey is far more enjoyable than the destination.",
    author: "Sushant Singh Rajput",
    id: "quote-4",
  },
  {
    text:
      "Over every mountain there is a path, although it may not be seen from the valley.",
    author: "Theodore Roethke",
    id: "quote-5",
  },
  {
    text: "Time is the most valuable thing a man can spend.",
    author: "Theophrastus",
    id: "quote-6",
  },
  {
    text:
      "We live in a society where we never prepare people to be a community.",
    author: "Sebastiao Salgado",
    id: "quote-7",
  },
  {
    text: "Tough times never last, but tough people do.",
    author: "Robert H. Schuller",
    id: "quote-8",
  },
  {
    text: "There are no secrets that time does not reveal.",
    author: "Jean Racine",
    id: "quote-9",
  },
  {
    text:
      "Libraries are reservoirs of strength, grace and wit, reminders of order, calm and continuity, lakes of mental energy, neither warm nor cold, light nor dark.",
    author: "Germaine Greer",
    id: "quote-10",
  },
];

function Buttons({ quote, randomQuote }) {
  return (
    <div id="buttons">
      <a
        href={
          "https://twitter.com/intent/tweet?text=" +
          quote.text +
          " Author: " +
          quote.author
        }
        id="tweet-quote"
        target="_blank"
      >
        <i class="bi bi-twitter" />
      </a>
      <button type="button" id="new-quote" onClick={randomQuote}>
        New quote
      </button>
    </div>
  );
}

function Quote({ quote }) {
  return (
    <>
      <i class="bi bi-chat-left-quote-fill" id="quote-icon"></i>
      <p id="text">{quote.text}</p>
      <p id="author">{quote.author}</p>
    </>
  );
}

function Footer() {
  return (
    <p class="footer">
      Created by Alejandro Aburto for a freeCodeCamp challange
    </p>
  );
}

function App() {
  let [quote, setQuote] = React.useState("");
  let quoteBox = React.useRef("");

  React.useEffect(() => {
    quoteBox.current = document.querySelector("#quote-box");
    quoteBox.current.style.opacity = 1;
  }, [quote]);

  function randomQuote() {
    let quoteList = DATA.filter((qt) => (qt.id == quote.id ? false : true));
    let index = Math.floor(Math.random() * quoteList.length);
    if (quote !== "") {
      quoteBox.current.style.opacity = 0;
      setTimeout(() => {
        setQuote(quoteList[index]);
      }, 500);
    } else setQuote(quoteList[index]);
  }

  if (quote === "") {
    randomQuote();
  }

  return (
    <div id="container">
      <div id="quote-box">
        <Quote quote={quote} />
        <Buttons randomQuote={randomQuote} quote={quote} />
        <Footer />
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("main"));
