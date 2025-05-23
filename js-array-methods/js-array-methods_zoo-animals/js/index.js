import { zooAnimals } from "../utils/db.js";
console.log("JS loaded test");
// This website uses a function to check wether a specific animal is part of the zoo or not but it's not working correct.
// Please implement the function 'hasAnimal' that gets an array of animals and an animal name
// The function should return 'true' if the animal name is included in the array or 'false' if not.

/*function hasAnimal(animals, animalName) {
  return animals.includes(animalName);
}

function hasAnimal(animals, animalName) {
  return animals.includes(animalName);
}*/


console.log(hasAnimal(zooAnimals, "Sheep"));

// Bonus:
// Can you modify the function so that it works case-insensitive?
// This means it should return true, even if you search for 'sheep' or 'SHEEP' or 'sHeEp'.
// Hint: Remember the 'map' function

// This function checks if a given animal name is included in an array of animals,
// regardless of case (i.e. case-insensitive).
function hasAnimal(animals, animalName) {
  
  // Convert the search term to lowercase
  const searchTerm = animalName.toLowerCase();

  // Create a new array by mapping over the original animals array,
  // converting each animal name to lowercase
  const lowerCaseAnimals = animals.map((animal) => animal.toLowerCase());

  // Check if the lowercased search term is included in the lowercased animals array.
  // This returns true if found, false if not.
  return lowerCaseAnimals.includes(searchTerm);
}

// -------------------------------------------------------------------------------------
// ----- The following code is used for the browser preview. Please don't touch it -----

const animalList = document.querySelector("[data-js='animalList']");
const animalForm = document.querySelector("[data-js='animalForm']");
const output = document.querySelector("[data-js='output']");

animalForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const searchQuery = event.target.searchQuery.value;
  output.textContent = "";
  if (searchQuery.trim() === "") {
    return;
  }
  const result = hasAnimal(zooAnimals, searchQuery);
  output.textContent = result
    ? `Yes, we have ${searchQuery}`
    : `No, we don't have ${searchQuery}`;
});
zooAnimals.forEach((animal) => {
  const tag = document.createElement("span");
  tag.classList.add("tag");
  tag.textContent = animal;
  animalList.append(tag);
});
