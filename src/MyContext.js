import { createContext, useState } from "react";

export const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [editId, setEditId] = useState(null);

  return (
    <MyContext.Provider
      value={{ todos, setTodos, editId, setEditId, filtered, setFiltered }}
    >
      {children}
    </MyContext.Provider>
  );
};
