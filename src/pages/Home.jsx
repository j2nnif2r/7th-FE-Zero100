import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";
import Text from "../components/Text";
import TodoList from "../components/TodoList";

function Home({ todos, addTodo, deleteTodo, toggleTodo, updateTodo }) {
  const [todo, setTodo] = useState("");

  const handleAddTodo = () => {
    addTodo(todo);
    setTodo("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAddTodo();
    }
  };

  return (
    <div className="app">
      <div className="todo-card">
        <h1 className="title">TodoMatic</h1>
        <Text className="subtitle">What needs to be done?</Text>

        <div className="add-box">
          <Input
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Add a new task"
          />
          <Button onClick={handleAddTodo} variant="add">
            Add
          </Button>
        </div>

        <div className="filter-box">
          <Link to="/" className="filter-link">
            <Button variant="activeFilter">All</Button>
          </Link>

          <Link to="/active" className="filter-link">
            <Button variant="filter">Active</Button>
          </Link>

          <Link to="/completed" className="filter-link">
            <Button variant="filter">Completed</Button>
          </Link>
        </div>

        <Text className="count-text">{todos.length} tasks remaining</Text>

        <TodoList
          todos={todos}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
          updateTodo={updateTodo}
        />
      </div>
    </div>
  );
}

export default Home;