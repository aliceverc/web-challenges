import React from "react";
import "./styles.css";

export default function App() {
  return (
    // switched <Button /> to <Button>…</Button> in App
    // by giving each <Button> its own opening and closing tags, you can pass different text (or even other elements) as children
    <main>
      <Button>Text 1</Button>
      <Button>Text 2</Button>
      <Button>Text 3</Button>
      <Button>Text 4</Button>
    </main>
  );
}

// destructured children in the Button component signature
function Button({ children }) {
  // replaced the hard-coded “Click me!” with {children}
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
