
// Get the login form element
var modal = document.getElementById('login-modal');

// Get the button that opens the modal
var loginButton = document.getElementById("login-button");

// Get the <span> element that closes the modal
var closeSpan = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
loginButton.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closeSpan.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Validate login form
function validateLoginForm() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username === "" || password === "") {
    alert("Username and password are required");
    return false;
  }

  if (username !== "admin" || password !== "password") {
    alert("Invalid username or password");
    return false;
  }

  alert("Login successful");
  return true;
}

// Add event listener to login form submit button
var loginForm = document.getElementById("login-form");
loginForm.addEventListener("submit", function(event) {
  event.preventDefault();
  validateLoginForm();
  modal.style.display = "none";
});





