import React, { useState } from "react";
import { IState as Props } from "../App";

interface IProps {
  setPeople: React.Dispatch<React.SetStateAction<IProps["people"]>>;
  people: Props["people"];
}

const AddToList: React.FC<IProps> = ({ people, setPeople }) => {
  const [input, setInput] = useState({
    name: "",
    age: "",
    image: "",
    note: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    console.log(e.target);
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    if (!input.name || !input.age || !input.image || !input.note) {
      alert("field cannot be empty");
      return;
    } else {
      setPeople([
        ...people,
        {
          name: input.name,
          age: parseInt(input.age),
          img: input.image,
          note: input.note,
          url: "",
        },
      ]);
    }
  };

  return (
    <div className="AddToList">
      <input
        type="text"
        onChange={handleChange}
        className="AddToList-input"
        name="name"
        value={input.name}
        placeholder="Name"
      />
      <input
        type="text"
        onChange={handleChange}
        className="AddToList-input"
        name="age"
        value={input.age}
        placeholder="Age"
      />
      <input
        type="text"
        placeholder="Image Url"
        className="AddToList-input"
        value={input.image}
        onChange={handleChange}
        name="image"
      />
      <textarea
        placeholder="Notes"
        className="AddToList-input"
        value={input.note}
        onChange={handleChange}
        name="note"
      />
      {console.log(input)}
      <button className="AddToList-btn" onClick={handleClick}>
        Add to List
      </button>
    </div>
  );
};

export default AddToList;
