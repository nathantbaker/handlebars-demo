"use strict";

let cardStyle = {},
    userInput;

cardStyle.highlightCard = function(event) {
  // grab all the "is-clicked" elements and remove the class
  // before adding it to the latest clicked card
  var userInput = document.getElementById('editInput');
  var carCards = document.getElementsByClassName("is-clicked");
  if (carCards.length > 0) {
    for (var i = 0; i < carCards.length; i++ ) {
      carCards[i].classList.remove("is-clicked");
    }
  }
  // ".closest" find the nearest ancestor. Not EI compatible
  var card = event.target.closest(".card-wrapper");
  userInput.focus();
  // toggle the "is-clicked" class to change border and backgd in CSS
  card.classList.add("is-clicked");
  // console.log("className", card.className);
};

cardStyle.editCard = function(event) {
  // var card = document.getElementsByClassName('is-clicked')[0];
      // description = card.lastChild;
      $(".is-clicked").find(".card-copy").html(userInput.value);

  // description.innerHTML = userInput.value;
};

module.exports = cardStyle;
