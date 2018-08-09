// FSJS - Random Quote Generator

// Create the array of quote objects and name it quotes
const quotes = [
  {
    quote:
      "Believe in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers you cannot be successful or happy.",
    source: "Norman Vincent Peale",
    category: "Motivation"
  },
  {
    quote: "If you can dream it, you can do it.”",
    source: "Walt Disney",
    category: "Motivation"
  },
  {
    quote:
      "Where there is a will, there is a way. If there is a chance in a million that you can do something, anything, to keep what you want from ending, do it. Pry the door open or, if need be, wedge your foot in that door and keep it open.",
    source: "Pauline Kael",
    category: "Motivation"
  },
  {
    quote:
      "Do not wait; the time will never be ‘just right.’ Start where you stand, and work with whatever tools you may have at your command, and better tools will be found as you go along.",
    source: "George Herbert",
    category: "Motivation"
  },
  {
    quote:
      "Press forward. Do not stop, do not linger in your journey, but strive for the mark set before you.",
    source: "George Whitefield",
    category: "Motivation"
  },
  {
    quote:
      "The future belongs to those who believe in the beauty of their dreams.",
    source: "Eleanor Roosevelt",
    category: "Motivation"
  },
  {
    quote: "Aim for the moon. If you miss, you may hit a star.",
    source: "W. Clement Stone",
    category: "Motivation"
  },
  {
    quote: "Don’t watch the clock; do what it does. Keep going.",
    source: "Sam Levenson",
    category: "Humor"
  }
];

//random background color when page reload
const randomBackground = () => {
  const body = document.body;
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * letters.length)];
  }
  return (body.style.backgroundColor = color);
};

// Create the getRandomQuuote function and name it getRandomQuote
const getRandomQuote = quote => {
  randomBackground();
  // random quote generation
  return (quote = quotes[Math.floor(Math.random() * quotes.length)]);
};
// Create the printQuote funtion and name it printQuote
const printQuote = quote => {
  //getting data from the functions
  quote = getRandomQuote(quote);
  source = getRandomQuote(quote);

  //selecting paragraph ids and then adding data to it.
  const quoteP = document.getElementById("quoteP");
  const quoteS = document.getElementById("quoteS");
  const quoteC = document.getElementById("quoteC");
  quoteP.innerHTML = quote.quote;
  quoteS.innerHTML = quote.source;
  quoteC.innerHTML = quote.category;
  // randomBackground();
};
//calling the function
printQuote();

// This event listenerwill respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document
  .getElementById("loadQuote")
  .addEventListener("click", printQuote, true);
