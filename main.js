let form = document.getElementById("form");
let username = document.getElementById("username");
let password = document.getElementById("password");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  alert(username + password);
  if (username.value === "Elcin" && password.value === "Elcin123") {
    alert("Xos gelmisiz");
  } else if (username != "Elcin" || password != "Elcin123") {
    alert("Sehv giris olunub");
  }
});
