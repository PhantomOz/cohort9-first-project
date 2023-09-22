import React, { useState } from "react";

function AddItem({ add }) {
  const [todo, setTodo] = useState("");

  const handleClick = () => {
    add(todo);
  };
  return (
    <div>
      <input
        style={{ padding: "10px", width: "100%" }}
        type="text"
        placeholder="item"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        style={{
          backgroundColor: "green",
          color: "white",
          border: "none",
          width: "100%",
          fontSize: "20px",
          padding: "10px",
        }}
        disabled={todo === ""}
        onClick={handleClick}
      >
        Add
      </button>
    </div>
  );
}

export default AddItem;
