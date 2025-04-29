import { getD6Roll } from "./utils";
import { D6Button } from "./components/D6Button";
import History from "./components/History";
import "./styles.css";
import useLocalStorageState from "use-local-storage-state";

export default function App() {
  const [rolls, setRolls] = useLocalStorageState("rolls", {
    defaultValue: [],
  });

  const handleRoll = () => {
    const rolledNumber = getD6Roll();
    setRolls((latest) => [
      { value: rolledNumber, time: Date.now() },
      ...latest,
    ]);
  };

  const currentRollValue = rolls[0]?.value;

  return (
    <div className="app">
      <main className="app__main">
        <D6Button value={currentRollValue} onRoll={handleRoll} />
      </main>
      <aside className="app__aside">
        <History rolls={rolls} />
      </aside>
    </div>
  );
}


/* --- 4. Implemented the click logic in App.jsx ---
App.jsx now defines 'handleRoll'. On each click it:
  - calls 'getD6Roll()' to generate a random 1-6,
  - wraps that number plus Date.now() in a { value, time } object,
  - updates the 'rolls' state by prepending the new object to the latest list.
I used the "functional-updater" form (setRolls(latest => [newObj, …latest])) so two rapid clicks can't overwrite each other. */

/* --- 5. Derived the current value for display ---
Because the newest roll is always first, const currentRollValue = rolls[0]?.value gives us the digit to render on the die */

/* --- 6. Passed data down to children ---
- <D6Button value={currentRollValue} onRoll={handleRoll} />
- <History rolls={rolls} />
The button shows the number; the history sidebar lists every past roll. */

/* --- 7. Made the history survive a refresh ---
I swapped 'useState' for useLocalStorageState. Now every state change also writes to 'localStorage', so reloading the page restores the list. */