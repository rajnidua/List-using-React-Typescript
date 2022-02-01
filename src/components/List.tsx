import React from "react";

interface IProps {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

const List: React.FC<IProps> = ({ people }) => {
  const renderList = () => {
    people.map((person) => {
      return <li>{person.name}</li>;
    });
  };

  return <ul>{renderList}</ul>;
};

export default List;
