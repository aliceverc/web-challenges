console.clear();

const cards = [
  {
    id: "1",
    isBookmarked: false,
    question: "How often can I use <header>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "2",
    isBookmarked: false,
    question: "How often can I use <aside>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "3",
    isBookmarked: true,
    question: "On which types can I use destructuring assignment?",
    answer: "On Objects and Arrays",
    tags: ["js", "next"],
  },
];

// Use filter() to create an array that contains only the card with id equal to "2".
const onlyCardWithIdTwo = cards.filter((card) => card.id === "2");

console.log("Only card with id two: ", onlyCardWithIdTwo);

// Use filter() to create an array containing only cards that have exactly 3 tags.
const allCardsWith3Tags = cards.filter((card) => card.tags.length === 3);

console.log("Only cards with three tags: ", allCardsWith3Tags);

// Use filter() to create an array of cards where isBookmarked is false.
const allCardsThatAreNotBookmarked = cards.filter(
  (card) => card.isBookmarked === false
);

console.log(
  "Only cards that are not bookmarked: ",
  allCardsThatAreNotBookmarked
);

// Use filter() with a callback that checks two conditions:
// 1. The card's tag include "html" and the card is bookmarked
// 2. The card's tag include "js" and the card is bookmarked
const allCardsWithTagsHTMLOrJSThatAreBookmarked = cards.filter((card) => {
  return (
    (card.tags.includes("html") && card.isBookmarked === true) ||
    (card.tags.includes("js") && card.isBookmarked === true)
  );
});

console.log(
  "Only cards that with tags 'html' or 'js' and that are bookmarked : ",
  allCardsWithTagsHTMLOrJSThatAreBookmarked
);
