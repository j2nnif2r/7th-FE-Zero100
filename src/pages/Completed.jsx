

import { Link } from "react-router-dom";
import Button from "../components/Button";
import Text from "../components/Text";
import TodoList from "../components/TodoList";

function Completed({ todos, deleteTodo, toggleTodo, updateTodo }) {
  const completedTodos = todos.filter((item) => item.completed);

  return (
    <div className="app">
      <div className="todo-card">
        <h1 className="title">TodoMatic</h1>
        <Text className="subtitle">Completed tasks</Text>

        <div className="filter-box">
          <Link to="/" className="filter-link">
            <Button variant="filter">All</Button>
          </Link>

          <Link to="/active" className="filter-link">
            <Button variant="filter">Active</Button>
          </Link>

          <Link to="/completed" className="filter-link">
            <Button variant="activeFilter">Completed</Button>
          </Link>
        </div>

        <Text className="count-text">
          {completedTodos.length} completed tasks
        </Text>

        <TodoList
          todos={completedTodos}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
          updateTodo={updateTodo}
        />
      </div>
    </div>
  );

}

export default Completed;