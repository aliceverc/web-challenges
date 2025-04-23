import "./styles.css";
import { useState } from "react";

// declare a variable 'count' with updater 'setCount'
export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      {/* display the current count */}
      <h1>{count}</h1>

      {/* 
      minus button:
        - directly call setCount(count - 1)
      */}
      <div className="button-container">
        <button
          type="button"
          onClick={() => {
            setCount(count - 1);
          }}
        >
          -
        </button>

        {/* 
      plus button:
        - directly call setCount(count + 1)
      */}
        <button
          type="button"
          onClick={(handleClick) => {
            setCount(count + 1);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
