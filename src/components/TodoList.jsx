import Text from "./Text";
import TodoItem from "./TodoItem";

function TodoList({ todos, deleteTodo, toggleTodo, updateTodo }) {
  if (todos.length === 0) {
    return <Text className="empty-text">No tasks found.</Text>;
  }

  return (
    <div className="todo-list">
      {todos.map((item) => (
        <TodoItem
          key={item.id}
          item={item}
          onDelete={deleteTodo}
          onToggle={toggleTodo}
          onUpdate={updateTodo}
        />
      ))}
    </div>
  );
}

export default TodoList;