// Get the modal
var kwkModal = document.getElementById("kwkModal");
var gwcModal = document.getElementById("gwcModal");
var mitModal = document.getElementById("mitModal");
var yiModal = document.getElementById("yiModal");
var gdiModal = document.getElementById("gdiModal");
var wModal = document.getElementById("wModal");
var gencyberModal = document.getElementById("gencyberModal");
var courseraModal = document.getElementById("courseraModal");

// Get the image andyes it  insert it inside the modal 
var kwkImg = document.getElementById("kwk");
var gwcImg = document.getElementById("gwc");
var mitImg = document.getElementById("mit");
var wImg = document.getElementById("w");
var gdiImg = document.getElementById("gdi");
var yiImg = document.getElementById("yi");
var gencyberImg = document.getElementById("gencyber");
var courseraImg = document.getElementById("coursera");


// Get the <span> element that closes the modal
const span = Array.from(document.getElementsByClassName("close")).forEach(clicked);/* When the user clicks on the image, open the modal */

kwkImg.onclick = function() {
  kwkModal.style.display = "block";
}

gwcImg.onclick = function() {
  gwcModal.style.display = "block";
}

mitImg.onclick = function() {
  mitModal.style.display = "block";
}

wImg.onclick = function() {
  wModal.style.display = "block";
}

yiImg.onclick = function() {
  yiModal.style.display = "block";
}

gdiImg.onclick = function() {
  gdiModal.style.display = "block";
}

gencyberImg.onclick = function() {
  gencyberModal.style.display = "block";
}

courseraImg.onclick = function() {
  courseraModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
function clicked(activeSpan) {
  activeSpan.addEventListener("click", closeModal);
}

function closeModal() {
  kwkModal.style.display = "none";
  gwcModal.style.display = "none";
  mitModal.style.display = "none";
  gdiModal.style.display = "none";
  wModal.style.display = "none";
  yiModal.style.display = "none";
  gdiModal.style.display = "none";
  gencyberModal.style.display = "none";
  courseraModal.style.display = "none";
}
/* When the user clicks anywhere outside of the modal, close it */
window.onclick = function(event) {
  if ((event.target == kwkModal) || (event.target == gwcModal) || (event.target == wModal) || (event.target == yiModal) || (event.target == gdiModal) || (event.target == mitModal) || (event.target == gencyberModal) || (event.target == courseraModal)) {
    console.log("clicked on");
    kwkModal.style.display = "none";
    gwcModal.style.display = "none";
    mitModal.style.display = "none";
    gdiModal.style.display = "none";
    wModal.style.display = "none"; 
    yiModal.style.display = "none";
    gencyberModal.style.display = "none";
    courseraModal.style.display = "none";
  }
} 


