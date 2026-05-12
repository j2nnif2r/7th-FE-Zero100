import { Link } from "react-router-dom";
import Button from "../components/Button";
import Text from "../components/Text";
import TodoList from "../components/TodoList";

function Active({ todos, deleteTodo, toggleTodo, updateTodo }) {
  const activeTodos = todos.filter((item) => !item.completed);

  return (
    <div className="app">
      <div className="todo-card">
        <h1 className="title">TodoMatic</h1>
        <Text className="subtitle">Active tasks</Text>

        <div className="filter-box">
          <Link to="/" className="filter-link">
            <Button variant="filter">All</Button>
          </Link>

          <Link to="/active" className="filter-link">
            <Button variant="activeFilter">Active</Button>
          </Link>

          <Link to="/completed" className="filter-link">
            <Button variant="filter">Completed</Button>
          </Link>
        </div>

        <Text className="count-text">{activeTodos.length} tasks remaining</Text>

        <TodoList
          todos={activeTodos}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
          updateTodo={updateTodo}
        />
      </div>
    </div>
  );
}

export default Active;