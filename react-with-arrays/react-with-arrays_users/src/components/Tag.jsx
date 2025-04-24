import "./Tag.css";

// Tag component to display a single user role
// highlights the tag visually when the role is "admin"
export default function Tag({ tag }) {
  // determin base and conditional classes:
  //  - "tag" is always applied
  //  - "tag--highlight" is added only when tag === "admin"
  return (
    <li className={tag === "admin" ? "tag tag--highlight" : "tag"}>{tag}</li>
  );
}
