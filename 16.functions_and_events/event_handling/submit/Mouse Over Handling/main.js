const responsiveText = document.getElementById("responsiveText");

responsiveText.addEventListener("mouseover", () => {
  responsiveText.style.fontSize = "20px";
  responsiveText.style.color = "#0074D9";
});

responsiveText.addEventListener("mouseout", () => {
  responsiveText.style.fontSize = "16px";
  responsiveText.style.color = "#333";
});
