import { Image } from "./Image";
import avatar from "../img/avatar.jpg";

// avatar component that renders a clickable user avatar
export function Avatar({ onClick, children }) {
  return (
    <button onClick={onClick} aria-label="toggle profile">
      {/* display the avatar image */}
      <Image src={avatar} alt="avatar" />

      {/* render any additional nested content*/}
      {children}
    </button>
  );
}
