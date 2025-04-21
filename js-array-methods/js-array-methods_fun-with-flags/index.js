import { countries } from "./utils/countries.js";
import { Country } from "./components/Country/Country.js";

const container = document.querySelector('[data-js="card-container"]');
const queryInput = document.querySelector('[data-js="query-input"]');

queryInput.addEventListener("input", (event) => {
  container.innerHTML = "";

  const searchString = event.target.value;

  const searchStringLowerCase = searchString.toLowerCase(); // make sure that your search is case-insensitive

  /* Task1 */

  //const foundCountry = countries.find((country) => {
  // the find() method checks each country's name to see if it starts with the search string, and it returns the first country that matches
  //return country.name.toLowerCase().startsWith(searchStringLowerCase);
  //});
  // console.log(foundCountry);

  /* Task2 */

  const foundCountries = countries.filter((country) => {
    // the find() method checks each country's name to see if it starts with the search string, and it returns the first country that matches
    return country.name.toLowerCase().startsWith(searchStringLowerCase);
  });
  console.log(foundCountries);

  // if (foundCountry) {
  //   const countryElement = Country(foundCountry);
  //   container.append(countryElement);
  // }

  // If there are countries found, loop through them and append each one to the container
  if (foundCountries.length > 0) {
    foundCountries.forEach((country) => {
      // Call the Country() function to generate the country element
      const countryElement = Country(country);

      // Append the generated element to the container
      container.append(countryElement);
    });
  } else {
    // Display a message if no countries are found
    container.innerHTML = "No countries found";
  }
});
