console.clear();

const firstInput = document.querySelector('[data-js="first-input"]');
const secondInput = document.querySelector('[data-js="second-input"]');

const uppercaseButton = document.querySelector('[data-js="button-uppercase"]');
const lowercaseButton = document.querySelector('[data-js="button-lowercase"]');
const switchButton = document.querySelector('[data-js="button-switch"]');

uppercaseButton.addEventListener("click", () => {
  firstInput.value = firstInput.value.toUpperCase();
});

lowercaseButton.addEventListener("click", () => {
  secondInput.value = secondInput.value.toLowerCase();
});

switchButton.addEventListener("click", () => {
  const temp = firstInput.value;
  firstInput.value = secondInput.value;
  secondInput.value = temp;
});
//- The temporary variable (temp) acts as a safe storage for one of the values while swapping.
//- You don’t lose the original value of firstInput because it’s safely kept in temp.
//- This method allows both values to swap correctly without getting overwritten.
