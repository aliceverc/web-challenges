console.clear();

/*
1: Create the data for a book in an online store. Define variables for the following details:
  - The title of the book
  - The author of the book
  - The book's rating
  - The number of copies sold
*/

// --v-- write your code here --v--

//Write an object with the details
const data = {
  title: "The neverending story",
  author: "Michael Ende",
  rating: 5,
  sales: 10, //in millions
};
// --^-- write your code here --^--

/*
2: Log all variables to the console, for example:

Title: The Lord of the Javascript
Author: Mario
Rating: 4.2
Sales: 120

Then:
- Increase the number of sales.
- Update the book's rating.
- Log all variables to the console again after making these updates.
*/

// --v-- write your code here --v--

//Print the initial book data to the console
console.log("Title: " + data.title);
console.log("Author: " + data.author);
console.log("Rating: " + data.rating);
console.log("Sales: " + data.sales + " Millions");

//Update the number of sales and the book's rating
data.sales = data.sales + 1; //increase by 1 million
data.rating = 4.8;

//Print the updated book data to the console
console.log("Updated Book Data:");
console.log("Title: " + data.title);
console.log("Author: " + data.author);
console.log("Rating: " + data.rating);
console.log("Sales: " + data.sales + " Millions");
// --^-- write your code here --^--

/*
3: The logging code above is repetitive and hard to maintain.
   Refactor your code by doing the following:

 - Write a function called `logBookData` that logs all the book details to the console.
 - Replace the existing `console.log` statements with calls to this function.
 - Then, increase the number of sales two more times and log the updated details after each increase.
*/

// --v-- write your code here --v--

//Write a function to print book data to the console
function logBookData(book) {
  console.log("Title: " + book.title);
  console.log("Author: " + book.author);
  console.log("Rating: " + book.rating);
  console.log("Sales: " + book.sales + " Millions");
}

//Update the number of sales and log the data
data.sales = data.sales + 1; //increase by 1 million
console.log("Updated Book Data Again:");
logBookData(data);

//Update the number of sales and log the data
data.sales = data.sales + 1; //increase by 1 million
console.log("Updated Book Data Again Again:");
logBookData(data);

// --^-- write your code here --^--
