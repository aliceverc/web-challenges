import "./Card.css";

// card component to dispaly a fruit item with dynamic background color
export default function Card({ name, color }) {
  // combine the base 'card' class with a modifier based on the color prop
  // example: color = 'green' > className = "card card--green"
  return <p className={`card card--${color}`}>{name}</p>;
}
