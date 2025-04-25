import Counter from "./components/Counter";
import "./styles.css";
import { useState } from "react";

export default function App() {
  // remove state from the child component (Counter) and pass it to the parent component
  const [people, setPeople] = useState(0);

  // create tro helper functions:
  // - one to handle adding people
  // - one to handle substracting people
  const addPeople = () => setPeople(people + 1);
  const substractPeople = () => setPeople(people - 1);

  return (
    <div className="container">
      <h1>Place a Table Reservation</h1>

      {/* pass the 'handle' functions to the 'Counter' component */}
      <Counter onAdd={addPeople} onSubstract={substractPeople} />
      <p>You are going to reserve a table for {people} people.</p>
    </div>
  );
}
