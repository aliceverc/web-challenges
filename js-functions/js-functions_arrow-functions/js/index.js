console.clear();

/*
Rewrite the following functions as arrow functions.
Use implicit returns when possible.

HINT: You can find more information about arrow functions and implicit returns in the handout.


function getCurrentHour() {
  const now = new Date();
  const currentHour = now.getHours();
  if (currentHour === 0) {
    return "12am";
  } else if (currentHour === 12) {
    return "12pm";
  } else if (currentHour <= 11) {
    return currentHour + "am";
  } else {
    return currentHour - 12 + "pm";
  }
}
*/

const getCurrentHour = () => {
  const now = new Date();
  const currentHour = now.getHours();
  if (currentHour === 0) {
    return "12am";
  } else if (currentHour === 12) {
    return "12pm";
  } else if (currentHour <= 11) {
    return currentHour + "am";
  } else {
    return currentHour - 12 + "pm";
  }
};

console.log("Current hour: ", getCurrentHour());

/* Here is a more straightforward way to write it:
const getCurrentHour = (currentHour) => getCurrentHour === 0 ? "12am" : getCurrentHour === 12 ? "12pm" : getCurrentHour <= 11 ? "am" : (currentHour - 12) + "pm";
/*

/*
function getVectorLength(x, y, z) {
  return (x ** 2 + y ** 2 + z ** 2) ** 0.5;""
}
*/

const getVectorLength = (x, y, z) => (x ** 2 + y ** 2 + z ** 2) ** 0.5;

console.log("Vector length: ", getVectorLength(2, 8, 3));

/*
function cleanInput(string) {
  return string.toLowerCase().trim();
}
*/

const cleanInput = (string) => string.toLowerCase().trim();

console.log("clean input: ", cleanInput("   Hi There!   "));

/*
Rewrite the following arrow functions as classic functions.
*/

/*
const isOddAndSmall = (number) => {
  if (number > 10) {
    return false;
  }

  if (number % 2 === 0) {
    return false;
  }

  return true;
};
*/

function isOddAndSmall(number) {
  if (number > 10) {
    return false;
  }

  if (number % 2 === 0) {
    return false;
  }

  return true;
}

console.log("Is odd and small: ", isOddAndSmall(16));

/*
const add3 = (a, b, c) => a + b + c;
*/

function add3(a, b, c) {
  return a + b + c;
}

console.log("Add the three number: ", add3(123, 580, 900));

/*
const repeat10 = (string) => string.repeat(10);
*/

function repeat10(string) {
  return string.repeat(10);
}

console.log("Repeat 10: ", repeat10("tretigricontrotretigri "));
