import "./styles.css";
import { useState } from "react"; // bring useState hook into the component

export default function App() {
  // isActive is a state variable and setIsActive is the setter function
  // the default value of isActive is false
  const [isActive, setIsActive] = useState(false);

  // this function is called whenever the button is clicked
  function handleClick() {
    // toggle the `isActive` state value
    setIsActive(!isActive);

    // Check that the value changes correctly.
    console.log(isActive);
  }

  return (
    <main>
      {/*
        The <div> has two classes:
        - "box" for the base styling
        - "box--active" only when isActive is true, which changes its color
      */}
      <div className={`box ${isActive ? "box--active" : ""}`} />
      {/*
        The button triggers handleClick on click.
        Its label changes based on `isActive`:
        - If active, show "Deactivate"
        - If not active, show "Activate"
      */}
      <button onClick={handleClick}>
        {isActive ? "Deactivate" : "Activate"}
      </button>
    </main>
  );
}
