import { useContext } from "react";
import "./App.css";
import ListItem from "./components/ListItem";
import { MyContext } from "./MyContext";
import Header from "./components/Header";

function App() {
  const { todos, setTodos, editId, setEditId, filtered } = useContext(
    MyContext
  );

  const handleCheck = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
  };

  const handleDelete = (id) => {
    const targetTodoIndex = todos.findIndex((todo) => todo.id === id);

    const newTodos = [...todos];
    newTodos.splice(targetTodoIndex, 1);
    setTodos(newTodos);
  };

  const handleEdit = (e) => {
    if (e.target.value === "") {
      const todo = todos.find((todo) => todo.id === editId);
      e.target.value = todo.title;
    } else {
      const newTodos = todos.map((todo) =>
        todo.id === editId ? { ...todo, title: e.target.value } : todo
      );
      setTodos(newTodos);
    }
  };

  return (
    <div className="App">
      <div className="todo-wrapper">
        <Header />
        <ul>
          {filtered.length > 0 ? (
            filtered?.map((todo) => (
              <ListItem
                todo={todo}
                editId={editId}
                handleCheck={handleCheck}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
                setEditId={setEditId}
              />
            ))
          ) : (
            <p>No Todo To Display</p>
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;
