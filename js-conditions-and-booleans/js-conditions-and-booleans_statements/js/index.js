console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "password1234";

if (receivedPassword === SUPER_SECRET_PASSWORD) {
  console.log("Welcome! You are logged in as Brunhilde1984.");
} else {
  console.log("Access denied!");
}

// Part 2: Even / Odd
const number = 14;

if (number % 2 === 0) {
  console.log("even number");
} else {
  console.log("odd number");
}

// Part 3: Hotdogs
const numberOfHotdogs = 333;

if (numberOfHotdogs < 5) {
  console.log("2,00 € per hotdog");
} else if (numberOfHotdogs >= 5 && numberOfHotdogs < 100) {
  console.log("1,50 € per hotdog");
} else if (numberOfHotdogs >= 100 && numberOfHotdogs < 1000000) {
  console.log("1,00 € per hotdog");
} else {
  console.log("0,10 € per hotdog");
}

// Part 4: Daytime
const currentHour = 19;

const statement = currentHour < 17 ? "Still need to learn..." : "Partytime!!!";

console.log(statement);

// Part 5: Greeting
const userName = "Gimena";

const greeting =
  "Hello " + (userName === "Gimena" ? "Coach" : "Hello " + userName) + "!";

console.log(greeting);
