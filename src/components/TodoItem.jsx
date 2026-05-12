import { useState } from "react";
import Button from "./Button";
import Checkbox from "./Checkbox";
import Input from "./Input";

function TodoItem({ item, onDelete, onToggle, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(item.text);

  const startEdit = () => {
    setIsEditing(true);
    setEditText(item.text);
  };

  const cancelEdit = () => {
    setIsEditing(false);
    setEditText(item.text);
  };

  const saveEdit = () => {
    const trimmed = editText.trim();
    if (!trimmed) return;

    onUpdate(item.id, trimmed);
    setIsEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      saveEdit();
    }

    if (e.key === "Escape") {
      cancelEdit();
    }
  };

  return (
    <div className="todo-item">
      <div className="todo-top">
        <Checkbox checked={item.completed} onChange={() => onToggle(item.id)} />

        {isEditing ? (
          <Input
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Edit task"
          />
        ) : (
          <span className={item.completed ? "todo-text completed" : "todo-text"}>
            {item.text}
          </span>
        )}
      </div>

      <div className="todo-actions">
        {isEditing ? (
          <>
            <Button variant="edit" onClick={saveEdit}>
              Save
            </Button>
            <Button variant="filter" onClick={cancelEdit}>
              Cancel
            </Button>
          </>
        ) : (
          <>
            <Button variant="edit" onClick={startEdit}>
              Edit
            </Button>
            <Button variant="delete" onClick={() => onDelete(item.id)}>
              Delete
            </Button>
          </>
        )}
      </div>
    </div>
  );
}

export default TodoItem;