import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Active from "./pages/Active";
import Completed from "./pages/Completed";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Eat", completed: false },
    { id: 2, text: "Sleep", completed: false },
    { id: 3, text: "Repeat", completed: false },
  ]);

  const addTodo = (text) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    const newTodo = {
      id: Date.now(),
      text: trimmed,
      completed: false,
    };

    setTodos((prev) => [...prev, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const updateTodo = (id, newText) => {
    const trimmed = newText.trim();
    if (!trimmed) return;

    setTodos((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, text: trimmed } : item
      )
    );
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              todos={todos}
              addTodo={addTodo}
              deleteTodo={deleteTodo}
              toggleTodo={toggleTodo}
              updateTodo={updateTodo}
            />
          }
        />
        <Route
          path="/active"
          element={
            <Active
              todos={todos}
              deleteTodo={deleteTodo}
              toggleTodo={toggleTodo}
              updateTodo={updateTodo}
            />
          }
        />
        <Route
          path="/completed"
          element={
            <Completed
              todos={todos}
              deleteTodo={deleteTodo}
              toggleTodo={toggleTodo}
              updateTodo={updateTodo}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;