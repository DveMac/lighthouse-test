window.addEventListener("load", function () {
  console.log("loaded");

  const images = document.querySelectorAll("img");
  for (let image of images) {
    image.addEventListener("mouseover", function () {
      alert("MEATY!");
    });
  }

  const state = window.__STATE__;
  delete window.__STATE__;

  const rating = document.querySelector(".rater");
  let ratingString = "";
  for (let i = 1; i <= 5; i++) {
    ratingString += state.rating >= i ? "⭐️" : "✩";
  }
  rating.innerHTML = ratingString;

  const content = document.querySelector(".content");
  for (let para of state.content) {
    const p = document.createElement("p");
    p.innerText = para;
    content.appendChild(p);
  }

  const image = document.querySelector('.image');
  image.src = state.imageUrl;
});
