console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", () => {
  // Exercise: Append a new entry to the toast messages container > insert it into the DOM. This pit the new message at the bottom of the list in the container
  // Create a new HTML element (in this case, it will be a new <li></li> element)
  const toastMessage = document.createElement("li");
  // Set the message of the new element
  toastMessage.textContent = "I'm another toast message";
  // Add a list to the new element, so that it has the same style as the other toast message
  toastMessage.classList.add("toast-container__message");
  toastContainer.append(toastMessage);
});

clearButton.addEventListener("click", () => {
  // Exercise: Clear the stack of toast messages
  toastContainer.innerHTML = "";
});
