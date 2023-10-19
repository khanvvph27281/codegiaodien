const showButton = document.getElementById("showButton");
const background = document.getElementById("background");
const form = document.getElementById("form");
const closeButton = document.getElementById("closeButton");

showButton.addEventListener("click", function() {
  background.classList.remove("hidden");
  form.classList.remove("hidden");
});

background.addEventListener("click", function() {
  background.classList.add("hidden");
  form.classList.add("hidden");
});

closeButton.addEventListener("click", function() {
  background.classList.add("hidden");
  form.classList.add("hidden");
});

form.addEventListener("click", function(event) {
  event.stopPropagation();
});



//đặt mua
