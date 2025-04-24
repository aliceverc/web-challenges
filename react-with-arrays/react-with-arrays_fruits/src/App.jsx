import Card from "./components/Card";

// main App component renders a list of fruit cards
// each fruit object defines an id (for React key), a name with emoji, and a color (to select the appropriate CSS modifier)
export default function App() {
  // array of fruits objects: each must have a unique id
  const fruits = [
    { id: 1337, name: "🍌 Banana", color: "yellow" },
    { id: 1338, name: "🍎 Apple", color: "red" },
    { id: 1339, name: "🍉 Watermelon", color: "green" },
    { id: 1340, name: "🍊 Orange", color: "orange" },
    { id: 1341, name: "🍇 Grapes", color: "purple" },
  ];
  return (
    <ul>
      {/* 
      map over the fruits array:
      - use destructuring to pull out id, name and color
      - provide id as key to help React track list items
      - pass name and color into each Card component 
      */}
      {fruits.map(({ id, name, color }) => (
        <Card key={id} id={id} name={name} color={color} />
      ))}
    </ul>
  );
}
