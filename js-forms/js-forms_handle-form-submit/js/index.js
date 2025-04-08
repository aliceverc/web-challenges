console.clear();

// select the form element from the DOM
const form = document.querySelector('[data-js="form"]');

// add a submit event listener to the form
form.addEventListener("submit", (event) => {
  event.preventDefault(); // prevent the form from submitting and refreshing the page

  // create a FormData object from the form submission and converts it to a plain object
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  //reset the form after submission to clear the input fields
  event.target.reset();

  //access the first name input field and set the focus on it after resetting
  event.target.elements.firstName.focus();

  console.log("data", data);
});
