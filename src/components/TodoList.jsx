import TodoItem from "./TodoItem";

function TodoList({ todos, deleteTodo, toggleTodo, updateTodo }) {
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