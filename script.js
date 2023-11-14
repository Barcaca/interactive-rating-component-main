// Selecting DOM elements
const optionButtons = document.querySelectorAll(".btn--option");
const thankCard = document.querySelector(".card--thank");
const rateCard = document.querySelector(".card--rate");
let selectedRating = 0;

// Adding click event listeners to each option button
optionButtons.forEach((button, index) => {
  button.addEventListener("click", function () {
    // Resetting all option buttons to remove the 'selected' class
    resetOptionButtons();
    // Adding 'selected' class to the clicked button
    button.classList.add("btn--selected");
    // Updating the selectedRating based on the clicked button index
    selectedRating = index + 1;
  });
});

// Adding click event listener to the submit button
submit.onclick = function () {
  // Checking if a rating has been selected
  if (selectedRating === 0) {
    alert("Please select a rating");
  } else {
    // Displaying the selected rating and hiding the rateCard
    displaySelectedRating();
  }
};

// Function to reset all option buttons to their default state
function resetOptionButtons() {
  optionButtons.forEach((button) => {
    button.classList.remove("btn--selected");
  });
}

// Function to display the selected rating and hide the rateCard
function displaySelectedRating() {
  option.innerText = selectedRating;
  thankCard.classList.toggle("h-hide");
  rateCard.classList.toggle("h-hide");
}
