import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import TodoPage from "./pages/TodoPage";

const STORAGE_KEY = "zerobase-todos";

const defaultTodos = [
  { id: 1, text: "Eat", completed: false },
  { id: 2, text: "Sleep", completed: false },
  { id: 3, text: "Repeat", completed: false },
];

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem(STORAGE_KEY);

    if (!savedTodos) return defaultTodos;

    try {
      const parsed = JSON.parse(savedTodos);
      return Array.isArray(parsed) ? parsed : defaultTodos;
    } catch (error) {
      return defaultTodos;
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    const trimmed = text.trim();

    // 빈칸 입력 방지
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

    if (!trimmed) return false;

    setTodos((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, text: trimmed } : item
      )
    );

    return true;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <TodoPage
              type="all"
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
            <TodoPage
              type="active"
              todos={todos}
              addTodo={addTodo}
              deleteTodo={deleteTodo}
              toggleTodo={toggleTodo}
              updateTodo={updateTodo}
            />
          }
        />
        <Route
          path="/completed"
          element={
            <TodoPage
              type="completed"
              todos={todos}
              addTodo={addTodo}
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