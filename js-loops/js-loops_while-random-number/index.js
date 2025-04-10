console.clear();

let number = 0;
let count = 0;

// --v-- write or modify code below this line --v--

// run the loop as long as number <= 0.9
while (number <= 0.9) {
  count++; // increment count
  number = Math.random(); // generate new random number (between 0 and 1)
  // --^-- write or modify code above this line --^--
  console.log(
    `The number that ended the loop was ${number} and it took ${count} rounds to do this!`
  );
}

//Math.random() → gives you a new number between 0 and 1

//while (number <= 0.9) → keeps looping if number is 0.1, 0.5, 0.899, etc.

//count++ → tracks how many times we looped

//As soon as number > 0.9, the loop stops and the message is printed
