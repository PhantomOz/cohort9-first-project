import React, { useContext, useEffect, useState } from "react";
import AddItem from "./AddItem";
import { MyContext } from "../MyContext";

function Header() {
  const { todos, setTodos, setFiltered } = useContext(MyContext);
  const [tab, setTab] = useState("all");

  useEffect(() => {
    let canceled = false;
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => {
        if (!canceled) {
          setTodos(data.slice(0, 10));
        }
      })
      .catch((err) => {
        console.error(err);
      });

    return () => (canceled = true);
  }, [setTodos]);

  useEffect(() => {
    if (tab === "uncompleted") {
      const uncompleted = todos?.filter((todo) => todo.completed === false);
      setFiltered(uncompleted);
    } else if (tab === "completed") {
      const completed = todos?.filter((todo) => todo.completed === true);
      setFiltered(completed);
    } else {
      setFiltered(todos);
    }
  }, [setFiltered, tab, todos]);

  const handleAll = () => {
    setTab("all");
  };
  const handleCompleted = () => {
    setTab("completed");
  };
  const handleUncompleted = () => {
    setTab("uncompleted");
  };
  const handleAddTodo = (todo) => {
    const nTodo = {
      userId: 1,
      id: todos.length * todo.length,
      title: todo,
      completed: false,
    };
    const newTodos = [nTodo, ...todos];
    setTodos(newTodos);
  };

  return (
    <div>
      <p>Favour's Todo</p>
      <AddItem add={handleAddTodo} />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button className="tab teal" onClick={handleAll}>
          All
        </button>
        <button className="tab green" onClick={handleCompleted}>
          Completed
        </button>
        <button className="tab yellow" onClick={handleUncompleted}>
          Uncompleted
        </button>
      </div>
    </div>
  );
}

export default Header;
