console.clear();

const url = "https://swapi.py4e.com/api/people";

async function fetchData() {
  // Fetch the data from the API
  const response = await fetch("https://swapi.py4e.com/api/people");

  // Parse the JSON response
  const data = await response.json();

  // Log the full data object to see its structure (e.g., the "results" array)
  console.log(data);

  // Find the object for R2-D2 in the results array
  // This returns the first object where the name property exactly equals "R2-D2"
  const r2d2 = data.results.find((person) => {
    return person.name === "R2-D2";
  });

  // Log the object for R2-D2
  console.log(r2d2);

  //Log the eye color of R2-D2 by accessing the property on the object
  console.log(r2d2.eye_color);
}

fetchData();
