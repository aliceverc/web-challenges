console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

// Call the function hideTosError()
// Place the call immediately after selecting the elements: this ensures the error message is hidden as soon as the page loads.
hideTosError();

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--

  // If the checkbox is NOT checked - use !A (NOT) > flips the value into a false and vice versa -  the function will be stopped by using "return" and preventing the alert() from being executed.
  if (!tosCheckbox.checked) {
    showTosError();
    return;
  }
  if (tosCheckbox.checked) {
    hideTosError();
  }
  // --^-- write your code here --^--

  // eslint-disable-next-line no-alert
  alert("Form submitted");
});

// Update the error message visibility as soon as the checkbox state changes. Hides the error immediately when the checkbox is checked.
tosCheckbox.addEventListener("change", () => {
  if (tosCheckbox.checked) {
    hideTosError();
  } else {
    showTosError();
  }
});
