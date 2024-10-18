// var dropdown1 = document.querySelector(".transfer");
// var dropdown2 = document.querySelector(".media");
// function fileDrop1() {
//   document.querySelector(".file_transfer").classList.toggle("change");
// }
// dropdown1.addEventListener("click", fileDrop1);
var dropdown1 = document.querySelector(".transfer");
var dropdown2 = document.querySelector(".media");
const myArray = [dropdown1, dropdown2];

// Function to toggle class on click
function fileDrop1() {
  document.querySelector(".file_transfer").classList.toggle("change");
  dropdown1.classList.toggle("active");
}
function fileDrop2() {
  document.querySelector(".file_media").classList.toggle("change");
  dropdown2.classList.toggle("active");
}

// Add event listener correctly using the string "click"
dropdown1.addEventListener("click", fileDrop1);
dropdown2.addEventListener("click", fileDrop2);
document.addEventListener("click", function (event) {
  if (!dropdown1.contains(event.target)) {
    document.querySelector(".file_transfer").classList.remove("change"); // Hide transfer
    dropdown1.classList.remove("active"); // Remove active class from transfer dropdown
  }

  if (!dropdown2.contains(event.target)) {
    document.querySelector(".file_media").classList.remove("change"); // Hide media
    dropdown2.classList.remove("active"); // Remove active class from media dropdown
  }
});
