import FontSelector from "./components/FontSelector";
import Note from "./components/Note";
import "./styles.css";
import useLocalStorageState from "use-local-storage-state";

export default function App() {
  // 'note' (string) > what the user types. Key = "noteText" in localStorage
  // shown default the very first time (or when storage is cleared)
  const [note, setNote] = useLocalStorageState("noteText", {
    defaultValue: "buy groceries",
  });

  // 'font' (string) > CSS font-family choice. Key = "fontFamily" in localStorage
  // starts with the system default stack
  const [font, setFont] = useLocalStorageState("fontFamily", {
    defaultValue: "system-ui",
  });

  function handleNoteChange(newNote) {
    setNote(newNote);
  }

  function handleFontChange(newFont) {
    setFont(newFont);
  }

  // CSS custom property '--font' is set in style.css to style the app
  return (
    <div className="app" style={{ "--font": font }}>
      {/* FontSelector: lets the user pick up a font */}
      <FontSelector font={font} onFontChange={handleFontChange} />

      {/* Note: editable text area for the note content */}
      <Note note={note} onNoteChange={handleNoteChange} />
    </div>
  );
}
