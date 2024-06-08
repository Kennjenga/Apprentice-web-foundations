document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("inputFile").addEventListener("change", filesPicked);

  document.getElementById("btnToggle").addEventListener("click", toggleInput);
  document.getElementById("btnPick").addEventListener("click", askForFiles);
  document.getElementById("btnInfo").addEventListener("click", showFileInfo);
});

function filesPicked(ev) {
  //any time one or more files are picked in the file picker dialog
  let input = ev.target;
  let files = input.files;
  console.log({ files });
  if (files.length > 0) {
    showFileInfo(ev);
  }
}

function toggleInput(ev) {
  //hide or show the <input type="file">
  ev.preventDefault();
  let control = document.getElementById("inputFile").parentElement;
  //we want to apply this class to the parent
  control.classList.toggle("hidden");
}

function askForFiles(ev) {
  //open the file picker dialog
  ev.preventDefault();
  let control = document.getElementById("inputFile");
  control.click();
}

function showFileInfo(ev) {
  if (ev.type == "click") ev.preventDefault();
  //loop through all the files in the filelist
  //and display the name, size, type, and lastModified date
  let files = document.getElementById("inputFile").files;
  let len = files.length;
  for (let i = 0; i < len; i++) {
    console.group();
    console.log(files[i].name);
    console.log(files[i].size);
    console.log(files[i].type);
    console.log(files[i].lastModified);
    console.groupEnd();
  }
}
