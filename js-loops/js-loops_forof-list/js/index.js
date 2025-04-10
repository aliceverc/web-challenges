console.clear();

const main = document.querySelector('[data-js="main"]');

// Create an <ol> (ordered list) and add it to the main section
const ol = document.createElement("ol");
main.append(ol);

// This is an array of programming languages
const programmingLanguages = [
  "JavaScript",
  "Python",
  "Java",
  "C#",
  "C++",
  "PHP",
  "Ruby",
];

// --v-- write or modify code below this line --v--

// Loop through each language in the array using for...of
for (const language of programmingLanguages) {
  const li = document.createElement("li"); // Create a <li> (list item)
  li.textContent = language; // Set the list item's text to the language
  ol.append(li); // Add the <li> to the <ol> wit append
}
// --^-- write or modify code above this line --^--
