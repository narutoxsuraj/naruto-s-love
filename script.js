const noBtn = document.getElementById("no");
const container = document.querySelector(".container");
const yesBtn = document.getElementById("yes");

noBtn.addEventListener("mouseover", () => {
  const containerRect = container.getBoundingClientRect();
  
  const maxX = containerRect.width - noBtn.offsetWidth;
  const maxY = containerRect.height - noBtn.offsetHeight;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});

yesBtn.addEventListener("click", () => {
  container.innerHTML = "<h1>❤️ i love you to meri suruti now you are mine 💕</h1>";
});