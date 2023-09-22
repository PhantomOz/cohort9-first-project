import React from "react";

function ListItem({
  todo,
  editId,
  handleCheck,
  handleDelete,
  handleEdit,
  setEditId,
}) {
  return (
    <li className="todo" key={todo.id}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => handleCheck(todo.id)}
      />
      {editId === todo.id ? (
        <input type="text" value={todo.title} onChange={handleEdit} />
      ) : (
        <span className={`todo-title ${todo.completed && "checked"}`}>
          {todo.title}
        </span>
      )}
      {editId === todo.id ? (
        <button onClick={() => setEditId(null)}>✅</button>
      ) : (
        <button
          className="del-button"
          onClick={() => setEditId(todo.id)}
          disabled={todo.completed}
        >
          ✏️
        </button>
      )}
      <button className="del-button" onClick={() => handleDelete(todo.id)}>
        🗑️
      </button>
    </li>
  );
}

export default ListItem;
