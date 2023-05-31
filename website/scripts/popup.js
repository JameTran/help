
var popup = document.getElementById("myPop");

var btn = document.getElementById("myBttn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  popup.style.display = "block";
}

span.onclick = function() {
  popup.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == popup) {
    popup.style.display = "none";
  }
}