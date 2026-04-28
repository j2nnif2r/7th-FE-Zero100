import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import Checkbox from "./Checkbox";

function TodoItem({ item, onDelete, onToggle, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(item.text);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  useEffect(() => {
    if (!isEditing) {
      setEditText(item.text);
    }
  }, [item.text, isEditing]);

  const startEdit = () => {
    setIsEditing(true);
    setEditText(item.text);
  };

  const cancelEdit = () => {
    setIsEditing(false);
    setEditText(item.text);
  };

  const saveEdit = () => {
    const isUpdated = onUpdate(item.id, editText);
    if (isUpdated) {
      setIsEditing(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") saveEdit();
    if (e.key === "Escape") cancelEdit();
  };

  return (
    <div className="todo-item">
      <div className="todo-top">
        <Checkbox checked={item.completed} onChange={() => onToggle(item.id)} />

        {isEditing ? (
          <input
            ref={inputRef}
            className="input"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={`New name for ${item.text}`}
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