//selecting elements in the DOM
const styledText = document.getElementById("styledText");
const textInput = document.getElementById("textInput");
const colorInput = document.getElementById("colorInput");
const fontSizeInput = document.getElementById("fontSizeInput");
const updateButton = document.getElementById("updateButton");

//adding event listener to button
updateButton.addEventListener("click", () => {
  const newText = textInput.value;
  const newColor = colorInput.value;
  const newFontSize = fontSizeInput.value + "px";

  styledText.innerHTML = newText;
  styledText.style.color = newColor;
  styledText.style.fontSize = newFontSize;
});
