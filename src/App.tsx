import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import List from "./components/List";
import ADDToList from "./components/AddToList";

export interface IState {
  people: {
    name: string;
    img: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([
    { name: "LeBron James", img: "", url: "", age: 36, note: "fdvfd" },
  ]);

  return (
    <div className="App">
      <h1>You are invited to the party</h1>
      <List people={people} />
      <ADDToList />
    </div>
  );
}

export default App;
