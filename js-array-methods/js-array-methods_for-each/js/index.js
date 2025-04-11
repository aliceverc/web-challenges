const colors = [
  "#343434",
  "#7FB5B5",
  "#633A34",
  "#354D73",
  "#F3A505",
  "#2A6478",
  "#CC0605",
  "#497E76",
  "#D36E70",
  "#FF2301",
  "#4C514A",
  "#2E3A23",
  "#5D9B9B",
  "#474A51",
  "#EFA94A",
  "#4D5645",
  "#606E8C",
  "#A5A5A5",
];

// ANONYMOUS FUNCTION

// Use forEach with an arrow function to create and append color boxes
colors.forEach((color) => {
  // Create a new <div> element
  const colorBox = document.createElement("div");

  // Add the class "color-box" to style it (defined already in CSS)
  colorBox.classList.add("color-box");

  // Set the background color using the current color from the array
  colorBox.style.backgroundColor = color;

  // Add the color box to the page
  document.body.append(colorBox);
});

// FUNCTION REFERENCE

// Define a reusable function to create a single color box
function renderColorBox(color) {
  const colorBox = document.createElement("div");
  colorBox.classList.add("color-box");
  colorBox.style.backgroundColor = color;
  document.body.append(colorBox);
}

//Use forEach again, this time with a function reference
colors.forEach(renderColorBox); // This calls renderColorBox(color) once for every color in the array
