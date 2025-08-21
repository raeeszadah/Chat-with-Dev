const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const swapButton = document.getElementById("swapButton");

swapButton.addEventListener("click", () => {
  const tempSrc = img1.src;
  img1.src = img2.src;
  img2.src = tempSrc;
});
