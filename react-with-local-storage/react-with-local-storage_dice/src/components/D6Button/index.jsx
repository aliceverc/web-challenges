import D6 from "../D6";
import "./D6Button.css";

export function D6Button({ value, onRoll }) {
  return (
    <button className="d6-button" type="button" onClick={onRoll}>
      <D6 value={value} />
    </button>
  );
}


/* --- 1. Started with state inside the button ---
The 'D6Button' originally kept its own 'rolls' array. That meant the button knew the whole history and the rest of the app couldn't see it. */

/* --- 2. Lifted state up to the topl-level App.jsx ---
I moved the single source of truth for 'rolls' into 'App'. Now every child component (button, history, list) gets what it needs through props instead of owning its own copy. */

/* --- 3. Redesigned the button's interface ---
I gave the button just two props:
  - 'value' > the one number to display in the die face;
  - 'on Roll' > a callback to signal "the user clicked".
No arrays, timestamps, or state logic sit inside the button any more. */
