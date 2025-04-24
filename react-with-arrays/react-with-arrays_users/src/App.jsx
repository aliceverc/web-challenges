import React from "react";
import "./styles.css";
import Card from "./components/Card";
import Title from "./components/Title";
import { USERS } from "./db";

// main App component that renders a list of user cards
// it uses the imported USERS array and a Title component
export default function App() {
  return (
    <main className="app">
      {/* display application title */}
      <Title text="ClientBoard" />
      <div>
        {/*
        render a list of user cards dynamically:
          - map over USERS arrray
          - use each user's unique id as the React key
          - pass the entire user object into the Card component
        */}
        {USERS.map((user) => (
          <Card key={user.id} user={user} />
        ))}
      </div>
    </main>
  );
}
