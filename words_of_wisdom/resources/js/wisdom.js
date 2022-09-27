// Receives message as a string and returns a list of words
const  stringToList = (message) => {
    word_list = message.split(' ');
}

const load = () => {
   console.log(quotes["1"].author);
}

numQuotes = Object.keys(quotes).length;

const randomQuote  = () => {
    let randomNum = Math.floor(Math.random ()* numQuotes);
    quote = quotes[`${randomNum}`]["quote"];
    author = quotes[`${randomNum}`]["author"];
    genre = quotes[`${randomNum}`]["genre"];
    return [quote, author, genre]
}

const insertRandomQuote = () => {
    let Paragraph = document.getElementById("random-wisdom-p");
    Paragraph.childNodes[0].remove();
    let text = document.createTextNode(randomQuote()[0]);
    Paragraph.appendChild(text);
}