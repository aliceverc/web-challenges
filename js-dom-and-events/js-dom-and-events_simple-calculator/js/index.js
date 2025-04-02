console.clear();

const operand1 = 12;
const operand2 = 4;

// ----- Mathematical Operations -----

// Step 1: Use `document.querySelector` to select each button by its `data-js` attribute.

// --v-- write your code here --v--
const addButton = document.querySelector("[data-js = 'add']");
const subtractButton = document.querySelector("[data-js = 'subtract']");
const multiplyButton = document.querySelector("[data-js = 'multiply']");
const divideButton = document.querySelector("[data-js = 'divide']");
const exponentButton = document.querySelector("[data-js = 'exponent']");
// --^-- write your code here --^--

/* 
Step 2: Add event listeners for each mathematical operation:

For each operation (add, subtract, multiply, divide, exponent, and modulo):
1. Add an event listener to the corresponding button.
2. Within the event listener, perform the operation using `operand1` and `operand2`.
3. Store the result in a variable.
4. Log the result to the console.
*/

// --v-- write your code here --v--
//Addition operand1 + operand2
addButton.addEventListener("click", () => {
  const result = operand1 + operand2;
  console.log("Addition " + operand1 + "+" + operand2 + "=" + result);
});
//Subtraction operand1 - operand2
subtractButton.addEventListener("click", () => {
  const result = operand1 - operand2;
  console.log("Subtraction " + operand1 + "-" + operand2 + "=" + result);
});
//Multiplication operand1 * operand2
multiplyButton.addEventListener("click", () => {
  const result = operand1 * operand2;
  console.log("Multiplication " + operand1 + "*" + operand2 + "=" + result);
});
//Division operand1 / operand2
divideButton.addEventListener("click", () => {
  const result = operand1 / operand2;
  console.log("Division " + operand1 + "/" + operand2 + "=" + result);
});
//Exponentiation operand1 ** operand2
exponentButton.addEventListener("click", () => {
  const result = operand1 ** operand2;
  console.log("Exponentiation " + operand1 + "**" + operand2 + "=" + result);
});
// --^-- write your code here --^--

// ----- Update the First Operand -----

/*
In the following section, update the value of `operand1` using the buttons in the "Update the First Operand" section.
Each button should adjust the value of `operand1` and log the new value to the console.

Hint: To allow `operand1` to be updated, you might need to change its declaration.

Step 1: Select each button for updating `operand1` by its `data-js` attribute.
Step 2: Add event listeners to update `operand1` based on the button clicked. Log the updated value to the console.
*/

// --v-- write your code here --v--
//Increase by one
const increaseByOne = document.querySelector("[data-js = 'increase-by-one']");
increaseByOne.addEventListener("click", () => {
  const result = operand1 + 1;
  console.log("Increase by one " + operand1 + "+" + 1 + "=" + result);
});
//Increase by five
const increaseByFive = document.querySelector("[data-js = 'increase-by-five']");
increaseByFive.addEventListener("click", () => {
  const result = operand1 + 5;
  console.log("Increase by five " + operand1 + "+" + 5 + "=" + result);
});
//Decrease by one
const decreaseByOne = document.querySelector("[data-js = 'decrease-by-one']");
decreaseByOne.addEventListener("click", () => {
  const result = operand1 - 1;
  console.log("Decrease by one " + operand1 + "-" + 1 + "=" + result);
});
//Decrease by five
const decreaseByFive = document.querySelector("[data-js = 'decrease-by-five']");
decreaseByFive.addEventListener("click", () => {
  const result = operand1 - 5;
  console.log("Decrease by five " + operand1 + "-" + 5 + "=" + result);
});
//Multiply by two
const multiplyByTwo = document.querySelector("[data-js = 'multiply-by-two']");
multiplyByTwo.addEventListener("click", () => {
  const result = operand1 * 2;
  console.log("Multiply by two " + operand1 + "*" + 2 + "=" + result);
});
//Divide by two
const divideByTwo = document.querySelector("[data-js = 'divide-by-two']");
divideByTwo.addEventListener("click", () => {
  const result = operand1 / 2;
  console.log("Divide by two " + operand1 + "/" + 2 + "=" + result);
});
// --^-- write your code here --^--
