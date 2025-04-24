import "./Card.css";
import Tag from "./Tag";
import Button from "./Button";

// Card component to display information for a single user
// receives a user object containing name, roles array, and about text
function Card({ user }) {
  return (
    <article className="card">
      {/* users's name as a heading */}
      <h2>{user.name}</h2>

      {/* 
      list of role tags:
        - map over user.roles array
        - use each role string as the key (unique within this list)
        - render a Tag component for each role
      */}
      <ul className="card__taglist">
        {user.roles.map((role) => (
          <Tag key={role} tag={role} />
        ))}
      </ul>

      {/* users's description or "about" text */}
      <p>{user.about}</p>

      {/* action buttons for editing or invoicing the user */}
      <Button>edit</Button>
      <Button buttonType="danger">invoice</Button>
    </article>
  );
}

export default Card;
