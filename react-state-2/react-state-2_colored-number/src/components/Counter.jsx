import ColoredNumber from "./ColoredNumber";
import { useState } from "react";

export default function Counter() {
  // declare a state variable 'count' initialized to 0
  // 'count' defines the current state, 'setCount' will update its value (new state)
  const [count, setCount] = useState(0);

  // functions handed to the buttons. When clicked, each one calls SetCount with the new value, causing React to re-run the component with the updates count
  const handleClickPlus = () => setCount(count + 1); // increase the count by 1 when the '+' button is clicked
  const handleClickMin = () => setCount(count - 1); // decrease the count by 1 when the '-' button is clicked

  return (
    <div className="counter">
      <h1>Colored Number</h1>

      {/* 
        pass the current 'count' to ColorNumber. ColorNumber will display the value and adjust its color based on this prop    
      */}
      <ColoredNumber value={count} />

      <div className="counter__buttons-container">
        <button
          type="button"
          className="counter__button"
          aria-label="decrement count"
          /* Decrement button invokes handleClickMin on click */
          onClick={handleClickMin}
        >
          -
        </button>
        <button
          type="button"
          className="counter__button"
          aria-label="increment count"
          /* Increment button invokes handleClickPlus on click */
          onClick={handleClickPlus}
        >
          +
        </button>
      </div>
    </div>
  );
}
