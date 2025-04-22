export default function App() {
  // render the Sum component with props 'valueA' and 'valueB'
  return <Sum valueA={8} valueB={3} />;
}

// Sum component
function Sum({ valueA, valueB }) {
  return (
    // render a paragraph showing the equation and its result
    // JSX expressions inside curly braces allow embedding JS variables and calculations
    <p>
      {valueA} + {valueB} = {valueA + valueB}
    </p>
  );
}
