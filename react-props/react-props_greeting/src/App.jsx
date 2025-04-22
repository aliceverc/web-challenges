export default function App() {
  // render the Greeting component with props 'name' and 'isCoach'
  return <Greeting name="Gimena" isCoach={true} />;
}

// define a list of coach names
const coaches = ["Sven", "Gimena", "Esraa", "Roland"];

function Greeting({ name, isCoach }) {
  console.log(name, isCoach);

  // check if the passed-in name exists in the coaches list and isCoach is true
  if (coaches.includes(name) && isCoach) {
    // if both conditions are met, render a special greeting for coaches
    return (
      <div>
        <h1>Hello, Coach!</h1>
      </div>
    );
  }
  // default rendering for non-coach users
  return (
    <div>
      <h1>Hello, {name}!</h1>
    </div>
  );
}
