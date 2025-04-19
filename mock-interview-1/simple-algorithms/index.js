// Find the maximum
function maxOfTwoNumbers(num1, num2) {
  if (num1 < num2) {
    return num2;
  } else if (num1 > num2) {
    return num1;
  }
}
console.log(maxOfTwoNumbers(3, 7));

/*
- aim: find the maximum beetween two numbers
  - create a condition inside the function > if num1 is smaller than num2:
    - return num2;
  - else if num2 is smaller that num1:
    - return num1;
  - if num1 === num2:
    - return either;
- call the function
*/

// Find the longest word

const words = ["Jaws", "Up", "Alien", "Gravity", "Inception", "Psycho"];

function findLongestWord(words) {
  let longestWord = "";
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  return longestWord;
}
console.log(findLongestWord(words));
findLongestWord(words);

/*
 -declare a variable longestWord for word strings = "" 
  -loop through the array
  -check if current element.length is bigger than longestWord.length
   ->if true: store current word in longestWord
 -return longestWord

*/

// Calculate the sum

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
  let total = 0; // initialize the variable total to 0 to start accumulating the sum of the numbers
  for (let i = 0; i < numbers.length; i++) {
    // loop through each number in the array
    if (typeof numbers[i] === "number") {
      // check if the current element is a number
      total = total + numbers[i]; // if the array's elements are all number, add the current number to total
    } else {
      throw new Error("This is not a number"); // otherwise throw an error to stop execution
    }
  }
  return total;
}
console.log(sumNumbers(numbers));

/*
- aim: calculate the sum
  - create a variable total set to 0
    - loop over each item in the array
    - for every item in the numbers array:
      - if it's a number, add the item to total
      - if it's not a number, output an Error
  - return the total
*/

// Calculate the average length of the words

const words2 = [
  "eclipse",
  "harmony",
  "cascade",
  "labyrinth",
  "quartz",
  "serendipity",
  "zenith",
  "ephemeral",
  "vortex",
  "mystique",
];

function averageWordLength(words2) {
  if (words2.length === 0) return null; // if the array is empty, return null
  let numberOfWords = words2.length; // store the total number of words in the array numberOfWords
  let totalLength = 0; // initialize the variable totalLength to 0 to accumulate the sum of all word lengths

  for (let i = 0; i < words2.length; i++) {
    // loop through each word in the array
    totalLength = totalLength + words2[i].length; // add the length of the current word to totalLength
  }
  // console.log("words2.length:", numberOfWords);
  // console.log("sum of word lengths:", totalLength);

  return totalLength / numberOfWords;
}

console.log(averageWordLength(words2));

/*
- aim: calculate the average length of the words
    - first iterate through the array to calculate the number of words
    - calculate the total length of all words
  - avarage: divide the total length by the number of words
*/

// Unique arrays - return an array without duplicates

const words3 = [
  "crab",
  "poison",
  "contagious",
  "simple",
  "bring",
  "sharp",
  "playground",
  "poison",
  "communion",
  "simple",
  "bring",
];

function uniquifyArray(words) {
  return [...new Set(words)];
}
console.log(uniquifyArray(words3));

/*
- aim: return an array without duplicates
  - a `Set` automatically removes duplicate values, as it only stores unique elements
  - the spread operator (`...`) is used to convert the `Set` back into an array
- return the new array
link: https://builtin.com/software-engineering-perspectives/remove-duplicates-from-array-javascript
*/

// Find elements
const wordsFind = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience",
];

// haystack is the array you're searching through
// needle is the word you're looking for inside the haystack (array)
function doesWordExist(haystack, needle) {
  // check if the needle (word) exists in the haystack (array)
  return haystack.includes(needle);
}
// example usage:
// wordsFind is our "haystack" (array of words) and we're searching for the word "truth"
console.log(doesWordExist(wordsFind, "truth")); // true if "truth" exists in wordsFind
console.log(doesWordExist(wordsFind, "car")); // false if "car" doesn't exist in wordsFind

/*
- aim: check if a specific word (needle) exists in an array (haystack)
  - Use the includes() method to search for the needle in the haystack
- return true if the needle is found, otherwise false
*/

// Count repetition

const wordsCount = [
  "machine",
  "matter",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "matter",
  "truth",
  "disobedience",
  "matter",
];

function howManyTimes(haystack, needle) {
  let counter = 0; // initialize a counter to track the number of times the needle appears
  for (let i = 0; i < haystack.length; i++) {
    // loop through each element in the haystack array
    if (haystack[i] === needle) {
      // if the current element in the array matches the needle...
      counter++; // ...increment the counter
    }
  }
  return counter; // return the final count after checking all elements in the array
}
console.log(howManyTimes(wordsCount, "matter")); // test the function with "matter" as the needle

/* 
- aim: count how many times a specific word (needle) appears in the array (haystack)
  - first, initialize a counter to track the occurrences of the needle
  - then, loop through each element in the haystack (the array) one by one
  - inside the loop, compare each element with the needle
*/

// Bonus: A generic sum function
// for strings use the length of the string, for booleans use 1 and 0
const mixedArray = [
  "apple",
  "banana",
  "cherry",
  "date",
  42,
  7,
  1995,
  23,
  true,
  false,
];

function sum(array) {
  // TODO:
}

// Bonus: Write a function that calculates the greatest product of four
// numbers that is either horizontally or vertically in the array

const matrix = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
  [
    49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62,
    0,
  ],
  [
    81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36,
    65,
  ],
  [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
  [
    22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13,
    80,
  ],
  [
    24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12,
    50,
  ],
  [
    32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64,
    70,
  ],
  [
    67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94,
    21,
  ],
  [
    24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63,
    72,
  ],
  [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
  [
    16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85,
    57,
  ],
  [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [
    19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55,
    40,
  ],
  [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [
    88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53,
    69,
  ],
  [
    4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76,
    36,
  ],
  [
    20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36,
    16,
  ],
  [
    20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5,
    54,
  ],
  [
    1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67,
    48,
  ],
];

function greatestProduct(matrix) {
  // TODO:
}

module.exports = {
  maxOfTwoNumbers,
  findLongestWord,
  sumNumbers,
  averageWordLength,
  uniquifyArray,
  doesWordExist,
  howManyTimes,
  sum,
  greatestProduct,
};
