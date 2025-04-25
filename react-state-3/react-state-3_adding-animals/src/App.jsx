import { useState } from "react";
import "./styles.css";
import Form from "./components/Form";
import List from "./components/List";
import { uid } from "uid";

const initialAnimals = [
  {
    id: "mTBErig",
    name: "Octopus",
    emoji: "🐙",
  },
  {
    id: "iMsbXQ1",
    name: "Crocodile",
    emoji: "🐊",
  },
  {
    id: "Qjf_K7V",
    name: "Beaver",
    emoji: "🦫",
  },
];

export default function App() {
  // initialize state with the 'initialAnimals' array
  const [animals, setAnimals] = useState(initialAnimals);

  function handleAddAnimal(newAnimal) {
    // use the spread syntax to add an element to the array 'setAnimals'
    setAnimals([
      ...animals, // keep all existing entries
      { id: uid(), ...newAnimal }, // append the unique id + the newly submitted animal
    ]);
  }

  return (
    <main className="app">
      <Form onAddAnimal={handleAddAnimal} />
      <List animals={animals} />
    </main>
  );
}
