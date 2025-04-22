export default function App() {
  // render the Smiley component and pass down the boolean prop 'isHappy'
  return <Smiley isHappy={false} />;
}

// Smiley component
function Smiley({ isHappy }) {
  console.log("isHappy prop:", isHappy);

  // render a div containing a happy or sad emoji depending on the isHappy flag
  return <div> {isHappy ? "😊" : "😔"} </div>;
}
