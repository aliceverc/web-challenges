console.clear();

// Get the <main> element from the HTML
const main = document.querySelector('[data-js="main"]');

// Part 1: Creating a Select Input

// This object holds language codes as keys and language names as values
const languages = {
  DE: "German",
  EN: "English",
  ES: "Spanish",
  FR: "French",
  IT: "Italian",
  NL: "Dutch",
  PT: "Portuguese",
  RU: "Russian",
  ZH: "Chinese",
};

// Create a <select> element for language selection
const select = document.createElement("select");
select.name = "languages"; // Set its name attribute
main.append(select); // Add the <select> to the <main> section

// --v-- write or modify code below this line --v--

// Loop through each key in the languages object
for (const key in languages) {
  const option = document.createElement("option"); // create a new <option> element
  option.value = languages[key]; // This sets the "value" of the option to something like "German" or "French" (depending on the current loop).
  option.textContent = languages[key]; // This sets what the user sees in the dropdown.
  select.append(option); // add the option to the select element
  console.log(languages[key]);
}
// --^-- write or modify code above this line --^--

// Part 2: Creating a Navigation Bar

// This object contains navigation links and their labels
const nav = {
  home: { href: "/home", text: "Home" },
  about: { href: "/about", text: "About" },
  contact: { href: "/contact", text: "Contact" },
};

// Create a <nav> element and a <ul> to hold the links
const navElement = document.createElement("nav");
const ul = document.createElement("ul");

// Add the nav structure to the page
main.append(navElement); // Add <nav> to <main>
navElement.append(ul); // Add <ul> inside <nav>

// --v-- write or modify code below this line --v--

// Loop through each item in the nav object
for (const key in nav) {
  const li = document.createElement("li"); // Create a list item
  const a = document.createElement("a"); // Create an anchor/link

  a.href = nav[key].href; // Set the URL (e.g., "/home")
  a.textContent = nav[key].text; // Set the visible text (e.g., "Home")

  li.append(a); // Put the link inside the list item
  ul.append(li); // Add the list item to the <ul>
}
// --^-- write or modify code above this line --^--
