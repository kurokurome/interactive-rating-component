let selected;

function numRating(id) {
  selected = id;
}

function submit() {
  if (selected) {
    document.getElementById("rating-number").innerText = selected;
    document.getElementById("rating-state").classList.add("hide");
    document.getElementById("thank-state").classList.remove("hide");
  } else {
  }
}
