// Import helper functions: the function Card() generates a card element from given data,
// the function renderElement() properly inserts an element into the DOM.
import { Card } from "../components/Card/Card.js";
import { renderElement } from "./utils.js";

console.clear();

// ---------------------------------------------------------------------
// EXAMPLE DATA
// ---------------------------------------------------------------------
// An object (NOT an array) containing example data for a Star Wars character (Luke Skywalker)
// This data is used to demonstrate how a card is created using our Card() function.
const EXAMPLE_DATA = {
  name: "Luke Skywalker",
  height: "172",
  mass: "77",
  hairColor: "blond",
  skin_color: "fair",
  eye_color: "blue",
  birth_year: "19BBY",
  gender: "male",
  homeworld: "https://swapi.py4e.com/api/planets/1/",
  films: [
    "https://swapi.py4e.com/api/films/1/",
    "https://swapi.py4e.com/api/films/2/",
    "https://swapi.py4e.com/api/films/3/",
    "https://swapi.py4e.com/api/films/6/",
  ],
  species: [],
  vehicles: [
    "https://swapi.py4e.com/api/vehicles/14/",
    "https://swapi.py4e.com/api/vehicles/30/",
  ],
  starships: [
    "https://swapi.py4e.com/api/starships/12/",
    "https://swapi.py4e.com/api/starships/22/",
  ],
  created: "2014-12-09T13:50:51.644000Z",
  edited: "2014-12-20T21:17:56.891000Z",
  url: "https://swapi.py4e.com/api/people/1/",
};

// ---------------------------------------------------------------------
// CREATE THE FIRST CARD
// ---------------------------------------------------------------------
// Use the Card() function with EXAMPLE_DATA to create a card element.
const firstCard = Card(EXAMPLE_DATA);

// Use the renderElement() function to insert the card into the appropriate container.
// The container is defined in your utils.js file.
renderElement(firstCard);

// ---------------------------------------------------------------------
// FETCH DATA AND RENDER CARDS
// ---------------------------------------------------------------------
// Call the async function that fetches data from the Star Wars API and creates cards.
fetchDataAndRender();

// --v-- your code below this line --v--

// ---------------------------------------------------------------------
// ASYNC FUNCTION: FETCH DATA AND RENDER CARDS
// ---------------------------------------------------------------------
// This function fetches data from the Star Wars API, parses the JSON,
// logs the data for debugging, and creates a new card for each object in the results array.
async function fetchDataAndRender() {
 
  // This returns a promise that resolves with the response.
  const response = await fetch("https://swapi.py4e.com/api/people");
  
  // Convert the response data into a JSON object.
  // The resulting data object usually contains a property named "results" that holds an array of people.
  const data = await response.json();

  // Log the complete data object to the console for inspection and debugging.
  console.log(data);

  // Iterate over each person object in the results array using forEach.
  data.results.forEach((cardData) => {

    // For each person, create a new card element using the Card() function.
    const cardElement = Card(cardData);

    // Append the card element to the container with id "root" on the page,
    // so that each card is visible on your website.
    document.getElementById("root").append(cardElement);
  });
}
