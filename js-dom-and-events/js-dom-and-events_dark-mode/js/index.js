console.clear();

const bodyElement = document.querySelector('[data-js="body"]');

//Select dark mode button and switch body to dark
const darkModeButton = document.querySelector("[data-js='dark-mode-button']");
darkModeButton.addEventListener("click", () => {
  bodyElement.classList.add("dark");
  console.log("Switched to dark");
});

//Select light mode button and switch body to light
const lightModeButton = document.querySelector("[data-js='light-mode-button']");
lightModeButton.addEventListener("click", () => {
  bodyElement.classList.remove("dark");
  console.log("Switched to light");
});

//Select toggle mode button and switch body to light/dark
const toggleModeButton = document.querySelector("[data-js='toggle-button']");
toggleModeButton.addEventListener("click", () => {
  bodyElement.classList.toggle("dark");
  console.log("Switched to dark/light");
});
