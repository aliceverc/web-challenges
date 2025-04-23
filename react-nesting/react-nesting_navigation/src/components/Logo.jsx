import { Image } from "./Image";
import logo from "../img/logo.jpg";

// logo component that renders a linked logo image
export function Logo({ href, children }) {
  return (
    <a href={href}>
      {/* display the logo image */}
      <Image src={logo} alt="logo" />

      {/* render any additional nested content*/}
      {children}
    </a>
  );
}
