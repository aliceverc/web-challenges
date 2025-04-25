import { useState } from "react";
import "./styles.css";
import Form from "./components/Form";
import List from "./components/List";

// main App component managing the list of tags
export default function App() {
  // 'tags' stores the current array of tag strings
  // 'setTags' is the function to update the tags state
  const [tags, setTags] = useState(["JavaScript", "React", "CSS", "HTML"]);

  // add a new tag to the list
  function handleAddTag(newTag) {
    // update state by creating a new array with the existing tags plus the new one
    setTags([...tags, newTag]);
  }

  // remove a taf from the list
  function handleDeleteTag(tagToDelete) {
    // filter out the tagToDelete, keep all tags not equal to it
    setTags(tags.filter((tag) => tag !== tagToDelete));
  }

  return (
    <main className="app">
      {/* Form to add new tags, passes tag up via onAddTag callback */}
      <Form onAddTag={handleAddTag} />

      {/* List displays current tags and allowa deletion via onDeleteTag callback */}
      <List tags={tags} onDeleteTag={handleDeleteTag} />
    </main>
  );
}
