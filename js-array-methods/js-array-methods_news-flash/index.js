import { news } from "./utils/news.js";
import { Card } from "./components/Card/Card.js";
import { checkFilteredNews, checkSortedNews } from "./utils/results.js";

const container = document.querySelector('[data-js="card-container"]');

// Part 1 - start here

// filter() filters the news array and goes through each item in the card array. The function (card) => represents a single new article and...
const filteredNews = news.filter(
  (card) => card.categories.includes("politics") // ...checks its categories array: if "politics" is present in the categories array of that particular card, the function return true and the card will be included in the filtered result
);

// Part 2 - start here
const sortedNews = filteredNews.toSorted((a, b) => {
  // toSorted() sorts the filteredNews array without mutating the original array
  const articleA = a.body.length; // get the length of the body for article A
  const articleB = b.body.length; // get the length of the body for article B
  if (articleA < articleB) {
    return -1; //  if the body length of articleA is smaller that the body length of articleB, articleA comes before articleB
  }
  if (articleA > articleB) {
    return 1; // if the body length of articleA is bigger that the body length of articleB, articleB comes before articleA
  }
  if (articleA === articleB) {
    return 0; // if the body lengths are equal, their order stays the same
  }
});

sortedNews.forEach((news) => {
  const cardElement = Card(news);
  container.append(cardElement);
});

// Check your filter and sorting order here. Have a look at the console to see if you're right or wrong.
checkFilteredNews(filteredNews);

checkSortedNews(sortedNews);
