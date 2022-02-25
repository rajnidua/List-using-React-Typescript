import React from "react";

const AddToList = () => {
  return (
    <div className="AddToList">
      <input type="text" placeholder="Name" className="AddToList-input" />
      <input type="text" placeholder="Age" className="AddToList-input" />
      <input type="text" placeholder="Image Url" className="AddToList-input" />
      <input type="text" placeholder="Notes" className="AddToList-input" />
    </div>
  );
};

export default AddToList;
