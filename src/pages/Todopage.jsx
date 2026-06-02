import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";
import Text from "../components/Text";
import TodoList from "../components/TodoList";

function TodoPage({
  type,
  todos,
  addTodo,
  deleteTodo,
  toggleTodo,
  updateTodo,
}) {
  const [todo, setTodo] = useState("");

  const pageConfig = useMemo(() => {
    if (type === "active") {
      return {
        subtitle: "Active tasks",
        visibleTodos: todos.filter((item) => !item.completed),
        countText: `${todos.filter((item) => !item.completed).length} tasks remaining`,
      };
    }

    if (type === "completed") {
      return {
        subtitle: "Completed tasks",
        visibleTodos: todos.filter((item) => item.completed),
        countText: `${todos.filter((item) => item.completed).length} completed tasks`,
      };
    }

    return {
      subtitle: "What needs to be done?",
      visibleTodos: todos,
      countText: `${todos.filter((item) => !item.completed).length} tasks remaining`,
    };
  }, [type, todos]);

  const handleAddTodo = () => {
    const trimmed = todo.trim();

    // UI 레벨에서도 한 번 더 방지
    if (!trimmed) return;

    addTodo(trimmed);
    setTodo("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAddTodo();
    }
  };

  const getFilterVariant = (filterType) => {
    return type === filterType ? "activeFilter" : "filter";
  };

  return (
    <div className="app">
      <div className="todo-card">
        <h1 className="title">TodoMatic</h1>
        <Text className="subtitle">{pageConfig.subtitle}</Text>

        {type === "all" && (
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
        )}

        <div className="filter-box">
          <Link to="/" className="filter-link">
            <Button variant={getFilterVariant("all")}>All</Button>
          </Link>

          <Link to="/active" className="filter-link">
            <Button variant={getFilterVariant("active")}>Active</Button>
          </Link>

          <Link to="/completed" className="filter-link">
            <Button variant={getFilterVariant("completed")}>Completed</Button>
          </Link>
        </div>

        <Text className="count-text">{pageConfig.countText}</Text>

        <TodoList
          todos={pageConfig.visibleTodos}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
          updateTodo={updateTodo}
        />
      </div>
    </div>
  );
}

export default TodoPage;