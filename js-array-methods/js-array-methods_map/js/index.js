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
    tags: ["js", "next", "advanced"],
  },
];

// Use the map method to create a new array by converting each card's answer to lowercase.
// This returns an array of all lowercase answers.
const lowerCaseAnswers = cards.map((card) => card.answer.toLowerCase()); // ['as often as you like.', ...]

console.log("lowerCaseAnswers: ", lowerCaseAnswers);

// Use the map method to create a new array that combines the question and answer into one string,
// separated by a hyphen.
// This returns an array of strings with both question and answer.
const questionsAndAnswersTogether = cards.map(
  (card) => `${card.question} - ${card.answer}`
); // ["How often can I use <header>? - As often as you like.", ...]

console.log("questionsAndAnswersTogether: ", questionsAndAnswersTogether);

// Use the map method to create a new array of objects, each containing only the question and answer.
// This extracts just the necessary properties from each card.
const questionAndAnswer = cards.map((card) => {
  return { question: card.question, answer: card.answer };
}); // [{ question: 'How often can I use <header>?', answer: 'As often as you like.'}, {...}]

console.log("questionAndAnswer: ", questionAndAnswer);
