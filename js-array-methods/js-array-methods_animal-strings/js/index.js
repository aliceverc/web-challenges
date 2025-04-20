console.clear();

const animalStrings = [
  "cat",
  "dog",
  "elephant",
  "rabbit",
  "lion",
  "tiger",
  "horse",
  "giraffe",
  "zebra",
  "penguin",
  "polar bear",
  "panda",
  "koala",
  "kangoroo",
  "monkey",
  "sloth",
  "hippo",
  "rhino",
];

const hippoExists = animalStrings.includes("hippo"); // includes() checks whether the array contains the specified value. If it does, true is returned, otherwise false.
console.log(hippoExists);

// Hint: You can pass the starting index as second parameter.
const catStartingFromIndexFiveExists = animalStrings.includes("cat", 5);
console.log(catStartingFromIndexFiveExists);

// Hint: Besides the array method, check out the string method `startsWith()`.
const firstAnimalStartingWithLetterP = animalStrings.find((animal) =>
  animal.startsWith("p")
);
console.log(firstAnimalStartingWithLetterP);

const indexOfGiraffe = animalStrings.indexOf("giraffe");
console.log(indexOfGiraffe);

// Note:
// - Sorting strings is slightly more complicated than sorting numbers.
// - You will need if-statements and return values of -1, 1, and 0.
// - Check out MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSorted

// Hint: There is no need to upper-/lowercase the strings before sorting them.
// Hint: sort() mutates the original array, which is bad.
// That's why we use toSorted()
const animalsSortedAlphabetically = animalStrings.toSorted((a, b) => {
  const animalA = a;
  const animalB = b;
  if (animalA < animalB) {
    return -1;
  }
  if (animalA > animalB) {
    return 1;
  }
  return 0;
});
console.log(animalsSortedAlphabetically);

// Hint: Guess what? There is a string method called `endsWith()`.
const anyAnimalEndsWithLetterZ = animalStrings.every((animal) =>
  animal.endsWith("z")
);
console.log(anyAnimalEndsWithLetterZ);

const everyAnimalHasMoreThanTwoLetters = animalStrings.every(
  (animal) => animal.length > 2
);
console.log(everyAnimalHasMoreThanTwoLetters);

// Hint: There are several ways to go here. Let's focus on two options:
// Option 1: Concatenate all characters with `reduce()` and check for the `length` property of the result.

// the reduce() method iterates through each string (b) in the animalStrings array
// for each string, it adds the length of the string (b.length) to the accumulator (a)
// the second parameter (0) is the initial value of a, which starts the sum at zero
/*
const sumOfAllAnimalCharacters = animalStrings.reduce((a, b) => a + b.length, 0);
console.log(sumOfAllAnimalCharacters);
*/

// Option 2: Use `map()` to create an array with the length values of all strings,
// 				then sum them up with `reduce()` (keyword: method chaining)

const sumOfAllAnimalCharacters = animalStrings
  .map((animal) => animal.length) // map() creates a new array containing the lengths of each string
  .reduce((a, b) => a + b, 0); // reduce() then sums up the lenghts in the new array
console.log(sumOfAllAnimalCharacters);

export {
  hippoExists,
  catStartingFromIndexFiveExists,
  firstAnimalStartingWithLetterP,
  indexOfGiraffe,
  animalsSortedAlphabetically,
  anyAnimalEndsWithLetterZ,
  everyAnimalHasMoreThanTwoLetters,
  sumOfAllAnimalCharacters,
};
