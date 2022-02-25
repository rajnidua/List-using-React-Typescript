import React, { useState } from "react";

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
    {
      name: "John Smith",
      img: "./images/party-1.jpeg",
      url: "",
      age: 10,
      note: "Vegetarian",
    },
    {
      name: "Issabella",
      img: "./images/party-1.jpeg",
      url: "",
      age: 12,
      note: "Gluten",
    },
    {
      name: "Julia",
      img: "./images/party-1.jpeg",
      url: "",
      age: 10,
      note: "no preference",
    },
    {
      name: "Jimmy",
      img: "./images/party-1.jpeg",
      url: "",
      age: 11,
      note: "Non-veg",
    },
  ]);

  return (
    <div className="App">
      <h1>You are invited to the party</h1>
      <List people={people} />
      <ADDToList setPeople={setPeople} people={people} />
    </div>
  );
}

export default App;
