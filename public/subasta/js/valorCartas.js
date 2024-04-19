document.addEventListener("DOMContentLoaded", function () {
  var leftSideCards = document.querySelectorAll(".left-side .card");
  leftSideCards.forEach(function (card) {
    card.addEventListener("click", function () {
      leftSideCards.forEach(function (card) {
        card.classList.remove("card-select");
      });
      card.classList.add("card-select");
      console.log("hola");
    });
  });
});
