// JavaScript function to open the pop-up
function openPopup() {
    const popupContainer = document.getElementById("popupContainer");
    popupContainer.classList.add("show-popup");
  }
  
  // JavaScript function to close the pop-up
  function closePopup() {
    const popupContainer = document.getElementById("popupContainer");
    popupContainer.classList.remove("show-popup");
  }

// Array of texts to be displayed in the typing animations
const textsToType = [
  "Hello! I'm",
  "Reymark ",
  "Boquiron"
];

// Delay between each character in milliseconds (adjust this value for speed control)
const typingDelay = 100;
// Delay between the text1 animation and text2 animation in milliseconds
const text2Delay = 1000; // Adjust this value as needed
const text3Delay = 100; // Adjust this value as needed

// Function to simulate the typing animation
function typeText() {
  const textElements = document.querySelectorAll("#typing-container [id^='text']");

  function typeNextCharacter(index, currentIndex = 0) {
    if (index >= textsToType.length) return; // End animation when all texts are typed

    if (currentIndex < textsToType[index].length) {
      textElements[index].textContent += textsToType[index][currentIndex];
      currentIndex++;
      setTimeout(() => typeNextCharacter(index, currentIndex), typingDelay);
    } else {
      // If text1 animation is completed, start the next text animation after the respective delay
      setTimeout(() => typeNextCharacter(index + 1), index === 0 ? text2Delay : text3Delay);
    }
  }

  typeNextCharacter(0);
}

// Call the typing animation function after the page has loaded
window.onload = typeText;

