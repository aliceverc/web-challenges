console.clear();

/*
Update the content and style of the page based on the current day and time.

- Write a function `getGreeting` that returns a different greeting depending on the current time:
  - 6 - 12: returns "Good Morning"
  - 13 - 18: returns "Good Afternoon"
  - 19 - 22: returns "Good Evening"
  - 23 - 5: returns "Good Night"

(HINT: You can get the current hour with `new Date().getHours()`)

- Write a function `getDayColor` that returns a different color depending on the current weekday:
  - Monday: "darkgray"
  - Tuesday - Friday: "lightblue"
  - Saturday - Sunday: "hotpink"

(HINT: You can get the current weekday with `new Date().getDay()`)

*/

/* 
- This line creates a variable called currentHour.
- It stores the current hour of the day (from 0 to 23).
- It uses new Date().getHours() to get the hour from your system clock.
*/
const currentHour = new Date().getHours();

/* 
- This line creates a variable called currentDay.
- It stores the current days of the week (from 0 - Sunday - to 6 - Saturday -).
- It uses new Date().getDay() to get the day from your system calender.
*/
const currentDay = new Date().getDay();

/*
- This line finds the HTML element that has the attribute data-js="display".
- It then stores that element in the variable called display.*/
let display = document.querySelector('[data-js="display"]');

/*
- This is a function named getGreeting that takes one parameter: getHours.
- The function checks the value of getHours to decide which greeting to return
*/
function getGreeting(getHours) {
  if (getHours >= 6 && getHours <= 12) {
    return "Good Morning";
  }
  if (getHours >= 13 && getHours <= 18) {
    return "Good Afternoon";
  }
  if (getHours >= 19 && getHours <= 22) {
    return "Good Evening";
  }
  if (getHours >= 23 || getHours <= 5) {
    return "Good Night";
  }
}

/*
- This is a function named getDayColor that takes one parameter: getDay.
- The function checks the value of getDay to decide which background color to return
*/
function getDayColor(getDay) {
  if (getDay === 1) {
    return "darkgray";
  }
  if (getDay >= 2 && getDay <= 5) {
    return "lightblue";
  }
  if (getDay === 6 || getDay === 0) {
    return "hotpink";
  }
}

/*
- This line calls the getGreeting function, passing the current hour as an argument.
- The function returns a greeting based on the hour.
- The greeting is then inserted as the text content of the display element (your h1 tag).
*/
display.textContent = getGreeting(currentHour);

/*
- This line calls the getDayColor function, passing the current day as an argument.
- The function returns a background color based on the weekday.
- The color is then inserted as the background of the body element.
*/
document.body.style.backgroundColor = getDayColor(currentDay);
