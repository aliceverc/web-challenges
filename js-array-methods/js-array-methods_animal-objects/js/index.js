console.clear();

const animals = [
  {
    name: "cat",
    weight: 4,
    continents: [
      "Europe",
      "Asia",
      "Africa",
      "Australia",
      "North-America",
      "South-America",
    ],
  },
  {
    name: "dog",
    weight: 10,
    continents: [
      "Europe",
      "Asia",
      "Africa",
      "Australia",
      "North-America",
      "South-America",
    ],
  },
  { name: "elephant", weight: 4000, continents: ["Africa", "Asia"] },
  {
    name: "rabbit",
    weight: 2,
    continents: [
      "Europe",
      "Asia",
      "Africa",
      "Australia",
      "North-America",
      "South-America",
    ],
  },
  { name: "lion", weight: 200, continents: ["Africa"] },
  { name: "tiger", weight: 150, continents: ["Asia"] },
  {
    name: "horse",
    weight: 500,
    continents: [
      "Europe",
      "Asia",
      "Africa",
      "Australia",
      "North-America",
      "South-America",
    ],
  },
  { name: "giraffe", weight: 600, continents: ["Africa"] },
  { name: "zebra", weight: 300, continents: ["Africa"] },
  {
    name: "penguin",
    weight: 12,
    continents: ["Africa", "Australia", "Antarctica", "South-America"],
  },
  {
    name: "polar bear",
    weight: 450,
    continents: ["North-America", "Asia", "Arctic"],
  },
  { name: "panda", weight: 120, continents: ["Asia"] },
  { name: "koala", weight: 13, continents: ["Australia"] },
  { name: "kangaroo", weight: 70, continents: ["Australia"] },
  {
    name: "monkey",
    weight: 20,
    continents: ["South-America", "Asia", "Africa"],
  },
  { name: "sloth", weight: 8, continents: ["South-America"] },
  { name: "hippo", weight: 1500, continents: ["Africa"] },
  { name: "rhino", weight: 2000, continents: ["Asia", "Africa"] },
];

// ---------------------------------------------------------------------
// 1. Find the first animal whose name starts with the letter "g"
// Note: .startsWith() is case-sensitive – if your animal names are all lowercase,
// then you should use "g". If they were capitalized, "G" would be appropriate.
const firstAnimalStartingWithLetterG = animals.find((animal) => {
  return animal.name.startsWith("g");
});
console.log(firstAnimalStartingWithLetterG); // Logs the first animal object where the name starts with "g"

// ---------------------------------------------------------------------
// 2. Find the index of the first animal with a name longer than 5 characters.
const indexOfAnimalWithNameLongerFive = animals.findIndex((animal) => {
  return animal.name.length > 5;
});
console.log(indexOfAnimalWithNameLongerFive); // Logs the index of that animal

// ---------------------------------------------------------------------
// 3. Sort Animals Alphabetically by Name
// We're using toSorted() instead of .sort() to avoid mutating the original array.
// The compare function compares two animal objects by their name property.
const animalsSortedAlphabetically = animals.toSorted((a, b) => {
  if (a.name < b.name) {
    return -1; // a comes before b
  }
  if (a.name > b.name) {
    return 1; // a comes after b
  }
  return 0; // a and b are equal
});
console.log(animalsSortedAlphabetically); // Logs the new array sorted alphabetically

// ---------------------------------------------------------------------
// 4. Sort Animals by Weight (Lowest First)
// Again, we use toSorted() to create a new sorted array (without mutating the original array)
// The compare function compares the numeric weights of animals.
const animalsSortedByWeightStartingWithLowest = animals.toSorted((a, b) => {
  if (a.weight < b.weight) {
    return -1; // a's weight is less than b's weight
  }
  if (a.weight > b.weight) {
    return 1; // a's weight is greater than b's weight
  }
  return 0; // Equal weights
});
console.log(animalsSortedByWeightStartingWithLowest); // Logs animals sorted by weight, lowest to highest

// ---------------------------------------------------------------------
// 5. Reverse the Sorted Array by Weight Using toReversed()
// Unlike reverse(), toReversed() returns a new array with the elements in reverse order.
const animalsSortedByWeightReversed =
  animalsSortedByWeightStartingWithLowest.toReversed();
console.log(animalsSortedByWeightReversed); // Logs the reversed sorted array

// ---------------------------------------------------------------------
// 6. Check if There Exists an Animal with Weight More Than 500
// Using .some() returns true if at least one element meets the condition.
const animalWithWeightMoreThanFivehundredExists = animals.some((animal) => {
  return animal.weight > 500; // Returns true if any animal's weight is greater than 500
});
console.log(animalWithWeightMoreThanFivehundredExists); // Logs true or false

// ---------------------------------------------------------------------
// 7. Check if Every Animal in Europe Weighs Less Than 100
// Here, the intended logic is to confirm that all animals living in "Europe" weigh less than 100.
// Note: animal.continents is an array, so to check for Europe you likely want to use .includes("Europe").
// Also, .every() returns true only if every element passes the test.
const allAnimalsInEuropeWeighLessThanOnehundred = animals.every((animal) => {
  return animal.continents.includes("Europe") && animal.weight < 100;
});
console.log(allAnimalsInEuropeWeighLessThanOnehundred); // Logs true if every animal in Europe weighs less than 100

// ---------------------------------------------------------------------
// 8. Calculate the Total Weight of All Animals in Africa
// Step 1: Filter the animals array to include only those animals whose continents include "Africa"
const animalsInAfrica = animals.filter((animal) => {
  // .includes() checks if "Africa" is present in the continents array
  return animal.continents.includes("Africa");
});

// Step 2: Map over the filtered array to extract each animal's weight.
// This creates an array of numbers (the weights).
const weightsInAfrica = animalsInAfrica.map((animal) => animal.weight);

// Step 3: Use reduce() to sum up all the weights.
// The second argument (0) is the initial accumulator value.
const weightOfAllAnimalsInAfrica = weightsInAfrica.reduce(
  (total, currentWeight) => total + currentWeight,
  0
);
console.log(weightOfAllAnimalsInAfrica); // Logs the sum of weights of African animals

// ---------------------------------------------------------------------
// 9. Calculate the Average Weight of All Animals in Africa
// First, re-use the animalsInAfrica array from above.
// Compute the total weight using map and reduce.
const totalWeightInAfrica = animalsInAfrica
  .map((animal) => animal.weight)
  .reduce((total, weight) => total + weight, 0);
// Divide the total weight by the number of animals in Africa to get the average.
const averageWeightOfAllAnimalsInAfrica =
  totalWeightInAfrica / animalsInAfrica.length;
console.log(averageWeightOfAllAnimalsInAfrica); // Logs the average weight

// Export all computed variables for testing or further use
export {
  firstAnimalStartingWithLetterG,
  indexOfAnimalWithNameLongerFive,
  animalsSortedAlphabetically,
  animalsSortedByWeightStartingWithLowest,
  animalsSortedByWeightReversed,
  animalWithWeightMoreThanFivehundredExists,
  allAnimalsInEuropeWeighLessThanOnehundred,
  weightOfAllAnimalsInAfrica,
  averageWeightOfAllAnimalsInAfrica,
};
