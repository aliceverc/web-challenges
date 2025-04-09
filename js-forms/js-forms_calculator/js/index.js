console.clear();

const form = document.querySelector('[data-js="form"]');
// Selects the <form> element so we can listen to its "submit" event
const resultOutput = document.querySelector('[data-js="result"]');
// Selects the <span> element where the calculation result will be displayed

// These are helper functions to perform basic math operations:
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // We’ll store the final result in this variable and display it later
  let result;

  // --v-- write your code here --v--

  // Look for thevalue of the <input> with name="numberA"
  event.target.elements.numberA.value;

  // Since values from inputs are always strings, you need to convert them to numbers
  const a = Number(event.target.elements.numberA.value);
  const b = Number(event.target.elements.numberB.value);
  // Get the selected operator value from the form (a string like "addition" or "division")
  const operator = event.target.elements.operator.value;

  // Check which operator was selected and perform the corresponding calculation:
  if (operator === "addition") {
    result = add(a, b);
  }

  if (operator === "subtraction") {
    result = subtract(a, b);
  }

  if (operator === "multiplication") {
    result = multiply(a, b);
  }

  if (operator === "division") {
    result = divide(a, b);
  }
  // --^-- write your code here --^--

  // Display the result by setting the text of the <span> in the result section
  resultOutput.textContent = result;
});
