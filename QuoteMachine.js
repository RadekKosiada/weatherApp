
  // var data = {
  //   "quote":"Some cause happiness wherever they go; others, whenever they go.",
  //   "author":"Oscar Wilde (1854-1900)"};

  var url = "https://random-quote-generator.herokuapp.com/api/quotes/random";

    function triggerQuote(u) {
      fetch(u)
    .then(extractJSON)
    // .then(JSON.parse)
    .then(setQuote);
    };

    triggerQuote(url);

    function extractJSON(response) {
      return response.json();
    }
    // function extractText(response){
    //   return response.text();
    // }

function setQuote(d){
  // debugger
  var q = document.querySelector("#quote");
  q.innerHTML = d.quote;
  
  var a = document.querySelector("#author");
  a.innerHTML = d.author;
};

var button = document.querySelector("#nextQuote");
button.addEventListener("click", function(event){
triggerQuote(url);
}); 

