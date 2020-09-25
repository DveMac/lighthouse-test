window.addEventListener("load", function () {
  console.log("loaded");

  const images = document.querySelectorAll("img");
  for (let image of images) {
    image.addEventListener("mouseover", function () {
      alert("MEATY!");
    });
  }
});
