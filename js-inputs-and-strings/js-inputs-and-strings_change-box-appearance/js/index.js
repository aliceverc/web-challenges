console.clear();

// Selects the box element and the three input sliders from the DOM
const box = document.querySelector('[data-js="box"]');
const inputColor = document.querySelector('[data-js="input-color"]');
const inputRadius = document.querySelector('[data-js="input-radius"]');
const inputRotation = document.querySelector('[data-js="input-rotation"]');

// Changes the background color of the box based on the color slider value
inputColor.addEventListener("input", () => {
  box.style.backgroundColor = `hsl(${inputColor.value}, 70%, 60%)`;
});

// Changes the border radius of the box based on the radius slider value
inputRadius.addEventListener("input", () => {
  // If the radius value is 50, make the box circular
  if (Number(inputRadius.value) === 50) {
    box.style.borderRadius = "50%";
  } else {
    // Otherwise, set the border radius as a percentage of the slider value
    box.style.borderRadius = `${inputRadius.value}%`;
  }
});

// Rotates the box based on the rotation slider value
inputRotation.addEventListener("input", () => {
  // If the rotation value is 50, set a fixed rotation of 50 degrees
  if (Number(inputRadius.value) === 50) {
    box.style.rotate = "50deg";
  } else {
    // Otherwise, set the rotation to match the slider value in degrees
    box.style.rotate = `${inputRotation.value}deg`;
  }
});
