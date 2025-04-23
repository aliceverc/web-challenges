import React from "react";
import "./styles.css";
import Box from "./components/Box";

export default function App() {
  // update App to render <Boxes /> inside the flex‐container <main>
  return (
    <main className="flex-container">
      <Boxes />
    </main>
  );
}
// because fragments render no additional wrapper element, the three <Box> components remain the flex container’s direct children, preserving the horizontal layout.

// move the three <Box> elements into Boxes
function Boxes() {
  return (
    <>
      <Box color="#007bff" />
      <Box color="#fc3" />
      <Box color="#ff3333" />
    </>
  );
}
