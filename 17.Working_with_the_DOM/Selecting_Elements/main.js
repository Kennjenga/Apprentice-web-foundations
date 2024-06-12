//selecting the elements by  (querySelector, getElementById)
const showAlertButton = document.getElementById("showAlertButton");
const paragraph1 = document.getElementById("paragraph1");
const paragraph2 = document.querySelector("#paragraph2");

//Adding an event listener to the button
showAlertButton.addEventListener("click", () => {
  const content1 = paragraph1.textContent;
  const content2 = paragraph2.textContent;
  alert(
    `Content of paragraph 1: ${content1}\nContent of paragraph 2: ${content2}`
  );
});
