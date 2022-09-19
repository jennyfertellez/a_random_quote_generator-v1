/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

const quotes = [{
    quote: "It stops here. With me and you. It ends with us.", 
    source: "Colleen Hoover", 
    citation: "It Ends with Us", 
    year: "2016"
  },
  {
    quote: "I think thw idea of me is better than the reality of me.", 
    source: "Colleen Hoover", 
    citation: "Verity", 
    year: "2018"
  },
  {
    quote: "If anyone understood loneliness, the moon would.", 
    source: "Delia Owens", 
    citation: "Where the Crawdads Sing", 
    year: "2018"
  },
  {
    quote: "There is a defiance in being a dreamer.", 
    source: "V.E. Schwab", 
    citation: "The Invisible Life of Addie LaRue", 
    year: "2020"
  },
  {
    quote: "Rock bottom becomes a turning point because it is only at that point that most people think: I never want to feel this way again.", 
    source: "Brianna Wiest", 
    citation: "The Mountain is You", 
    year: "2020"
  }];
console.log(quotes);

/***
 * `getRandomQuote` function
 * Generates a random quote by taking the length of the quote array
***/
function getRandomQuote (array) {
    let quoteIndex = quotes[Math.floor(Math.random() * quotes.length)];
    return quoteIndex;  
};


/***
 * `printQuote` function
 * Quote is display to the page from the random quote generator
***/
function printQuote() {
  let quote = getRandomQuote();
  let quoteDisplay = `<p class = "quote">${quote.quote}</p><p class = "source">${quote.source}`
  if (quote.citation) {
    quoteDisplay += `<span class = "citation">${quote.citation}</span>`;
  }
  if (quote.year) {
    quoteDisplay += `<span class = "year">${quote.year}</span>`;
  }
  quoteDisplay += `</p>`

    return(document.getElementById('quote-box').innerHTML = quoteDisplay);

}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);

