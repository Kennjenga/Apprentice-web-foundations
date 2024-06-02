//dom manipulation
const formgrp = document.querySelector(".form-group");

//formgrp.remove();
//formgrp.lastElementChild.remove();
//formgrp.firstElementChild.remove();
//formgrp.lastElementChild.textContent = "Hello";
//formgrp.lastElementChild.innerHtml = "Hello";
//formgrp.children[1].innerText = "Hello";

const btn = document.querySelector(".btn");
btn.style.background = "red";

btn.addEventListener("click", (e) => {
  e.preventDefault();
  //console.log("click!");
  document.querySelector("body").style.backgroundColor = "#826d34";
  //document.querySelector("body").classList.add("bg-dark");
  console.log(e);
});
