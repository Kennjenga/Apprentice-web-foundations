const emailForm = document.getElementById("emailForm");

emailForm.addEventListener("submit", (event) => {
  // Prevent default form submission
  event.preventDefault();
  alert("Form submission intercepted.");
});
