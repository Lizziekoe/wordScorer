var wordScorer = function(text) {

var results = [];
var list_of_words = text.split(" ");
var hash = {};


  for(var i = 0; i< list_of_words.length; i++) {
    if (hash[list_of_words[i]] === undefined) {
      hash[list_of_words[i]] = 1;
    } else {
      hash[list_of_words[i]] += 1;
    }
  };

  results = Object.keys(hash).sort(function(a,b){return hash[b]-hash[a]})
  return results;
};

$(document).ready(function() {
  $("form#wordScorer").submit(function(event) {
  var userInput = $("input#words").val();
  var results = wordScorer(userInput);

  results.forEach(function(word) {
    $(".order").append("<li>" + word + "</li>");
  });

  $("#results").show();
  event.preventDefault();
  });
});
