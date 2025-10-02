/*
 * Frontpage JavaScript
 */
// JavaScript to hide the overlay after the page loads

window.onload = function () {
  const finalHeights = [];
  const generateFinalHeights = (barsLength, minHeight, maxHeight) => {
    for (let i = 0; i < barsLength; i++) {
      finalHeights.push(
        Math.floor(Math.random() * (maxHeight - minHeight + 1)) + minHeight,
      );
    }
  };
  const bars = document.querySelectorAll(".sound-bar");

  generateFinalHeights(bars.length, 7, 50);
  let currentIndex = 0;
  const triggerNextBarTransition = () => {
    if (currentIndex >= bars.length) return;
    const currentBar = bars[currentIndex];
    const height = finalHeights[currentIndex % finalHeights.length];
    currentBar.style.height = height + "px";

    const transitionEndHandler = () => {
      currentBar.removeEventListener("transitionend", transitionEndHandler);
      currentIndex++;

      triggerNextBarTransition();
    };

    currentBar.addEventListener("transitionend", transitionEndHandler);
  };
  // Start the animation sequence
  triggerNextBarTransition();

  const loadingOverlay = document.getElementById("loading-overlay");
  const disapearOverlay = () => {
    if (loadingOverlay) {
      loadingOverlay.style.opacity = 0;
      setTimeout(() => {
        loadingOverlay.style.display = "none";
      }, 500);
    }
  };

  const letters = document.querySelectorAll(".l-letter");
  let currentLIndex = 0;
  const triggerNextLetterTransition = () => {
    if (currentLIndex >= letters.length) return;
    const currentLetter = letters[currentLIndex];

    currentLetter.style.fontSize = "1.5em";
    currentLetter.style.opacity = 1;

    const transitionEndHandler = () => {
      currentLetter.removeEventListener("transitionend", transitionEndHandler);
      currentLIndex++;

      triggerNextLetterTransition();
    };

    currentLetter.addEventListener("transitionend", transitionEndHandler);
  };
  setTimeout(triggerNextLetterTransition, 1000);

  setTimeout(disapearOverlay, 3000);
};
