import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

interface IState {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([]);

  return (
    <div className="App">
      <h1>You are invited to the party</h1>
    </div>
  );
}

export default App;
