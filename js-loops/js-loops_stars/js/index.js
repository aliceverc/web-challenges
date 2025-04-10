console.clear();

// Grab the container where the stars will be displayed
const starContainer = document.querySelector('[data-js="star-container"]');

// This function draws the stars on the page based on how many should be filled
function renderStars(filledStar) {
  // Reset (clear out) the star container before re-rendering stars
  starContainer.innerHTML = "";

  // --v-- write or modify code below this line --v--

  // Loop from 1 to 5 to create 5 stars: start at 1 star, go up while you're less or equal to 5 stars, count up by 1 each time
  for (let star = 1; star <= 5; star++) {
    // Create a new image element for each star
    const img = document.createElement("img");

    // If this star's number is less than or equal to the number of filled stars...
    if (star <= filledStar) {
      img.src = "assets/star-filled.svg"; // ...set it to the filled image...
    } else {
      img.src = "assets/star-empty.svg"; // ...otherwise keep it empty
    }

    // Add the star image to the star container
    starContainer.append(img);

    // Add an event listener to each star: when a star is clicked...
    img.addEventListener("click", () => {
      renderStars(star); // ...re-render the stars with this star's number as the new "filledStar"
    });
  }
  // --^-- write or modify code above this line --^--
}

// Call the function to show 3 filled stars at the start
renderStars(3);
