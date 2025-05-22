import React from "react"; 
import { createContext, useState, useCallback } from "react";
import axios from "axios";

const TodoContext = createContext();

function Provider({ children }) {
  const [todos, setTodos] = useState([]);

  const fetchTodos = useCallback(async () => {
    const response = await axios.get("http://localhost:3001/todos");
    setTodos(response.data);
  }, []);

  const addTodo = async (todo) => {
    const response = await axios.post("http://localhost:3001/todos", todo);
    setTodos((prev) => [...prev, response.data]);
  };

  const deleteTodo = async (id) => {
    await axios.delete(`http://localhost:3001/todos/${id}`);
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  const updateTodo = async (id, updatedTodo) => {
    const response = await axios.put(`http://localhost:3001/todos/${id}`, updatedTodo);
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? response.data : t))
    );
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        fetchTodos,
        addTodo,
        deleteTodo,
        updateTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { Provider };
export default TodoContext;
