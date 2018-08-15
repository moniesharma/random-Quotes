// FSJS - Random Quote Generator

// Create the array of quote objects and name it quotes
const quotes = [
  {
    quote:
      "Believe in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers you cannot be successful or happy.",
    source: "Norman Vincent Peale",
    category: "Sad",
    citation: "Facebook",
    year: "2017"
  },
  {
    quote: "If you can dream it, you can do it.”",
    source: "Walt Disney",
    category: "Motivation",
    year: "2010",
    citation: "Some Website"
  },
  {
    quote:
      "Where there is a will, there is a way. If there is a chance in a million that you can do something, anything, to keep what you want from ending, do it. Pry the door open or, if need be, wedge your foot in that door and keep it open.",
    source: "Pauline Kael",
    category: "Sad"

  },
  {
    quote:
      "Do not wait; the time will never be ‘just right.’ Start where you stand, and work with whatever tools you may have at your command, and better tools will be found as you go along.",
    source: "George Herbert",
    category: "Humor"

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
    category: "Humor"

  },
  {
    quote: "Aim for the moon. If you miss, you may hit a star.",
    source: "W. Clement Stone",
    category: "Self-Motivation"

  },
  {
    quote: "Don’t watch the clock; do what it does. Keep going.",
    source: "Sam Levenson",
    category: "Humor",
    citation: "Twitter",
    year: 2009
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
  quote = quotes[Math.floor(Math.random() * quotes.length)];
  return quote;
};
// Create the printQuote funtion and name it printQuote
const printQuote = quote => {
  let myDiv = document.getElementById("quote-box");

  //getting data from the functions
  quote = getRandomQuote(quote);
  const span = document.createElement("span")
  span.textContent = `${quote.citation},  ${quote.year}`



  //selecting paragraph ids and then adding data to it.
  myDiv.querySelector(".quote").innerHTML = quote.quote;
  myDiv.querySelector(".category").innerHTML =  quote.category;

//IF citation and year exists then it will add to the browser
  if(quote.citation){
 myDiv.querySelector(".source").innerHTML = quote.source + ", " + span.textContent
}
else {
  span.textContent = ''
   myDiv.querySelector(".source").innerHTML = quote.source

}
}
// Self quote generation every 6 sec
let timeInterval;

const randomizer = () =>{
   timeInterval = setInterval(printQuote, 6000)
}

const stopRandomizer = ()=> {
  printQuote()
clearInterval(timeInterval)
timeInterval = setInterval(printQuote, 6000)
}


// This event listenerwill respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document
  .getElementById("loadQuote")
  .addEventListener("click", stopRandomizer)
