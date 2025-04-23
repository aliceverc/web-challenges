import "./styles.css";

// import components
import { Header } from "./components/Header";
import { Navigation } from "./components/Navigation";
import { Link } from "./components/Link";
import { Logo } from "./components/Logo";
import { Avatar } from "./components/Avatar";

export default function App() {
  return (
    <>

      {/*
      Header handles the outer container and spacing.
      Everything inside these tags is available as `children` in Header.jsx. 
      */}
      <Header>

        {/* Logo on the left */}
        <Logo />

        {/* 
        Navigation wraps the links in a <nav>.
        The Link component handles each <a> tag’s className & href.
        */}
        <Navigation>
          <Link href="#home">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#impressum">Impressum</Link>
        </Navigation>

        {/* Avatar button on the right */}
        <Avatar />
      </Header>

      {/* Main content area */}
      <main>content goes here…</main>
    </>
  );
}
