document.addEventListener("DOMContentLoaded", () => {
  //put something to paste into the console
  console.log("ABCD17");

  //handle pasting in the code
  document.addEventListener("paste", handlePaste);

  //as you type jump to the next input
  let inputarray = [];
  let inputs = document.querySelectorAll(".code__input");
  inputs.forEach((input, index, arr) => {
    input.addEventListener("input", function (ev) {
      // arr[input]
      input.value = input.value.toUpperCase();
      arr[index + 1]?.focus();
      inputarray[index] = input.value;
    });
  });
  console.log(inputarray);
});

function handlePaste(ev) {
  if (ev.target.localName !== "input") return;
  ev.preventDefault();
  let paste = (ev.clipboardData || window.clipboardData).getData("text");
  paste = paste.toUpperCase();
  console.log(paste);
  let inputs = document.querySelectorAll(".code__input");
  if (paste.length !== inputs.length) return; //handle as you want
  inputs.forEach((input, index) => {
    input.focus();
    input.value = paste[index];
  });
}
