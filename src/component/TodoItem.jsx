import React, { useState } from 'react';

function TodoItem({ todo, onEdit, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(todo.description);

  function handleDoubleClick() {
    setIsEditing(true);
  }

  function handleSave() {
    onEdit(todo.id, editedDescription);
    setIsEditing(false);
  }

  function handleDelete() {
    console.log(todo.id);
    onDelete(todo.id);
  }
  function handleToggleComplete() {
    onEdit(todo.id, editedDescription, !todo.done);
  }
  
  return (
  
  <div className='add-todo-form'>
      {isEditing ? (
        <input className='add-todo-input' type="text" value={editedDescription} onChange={e => setEditedDescription(e.target.value)} onBlur={handleSave} />
      ) : (
        <span className='add-todo-input' onDoubleClick={handleDoubleClick}>
          {todo.done ? <s className='task-completed'>{editedDescription}</s> : todo.description}
        </span>
      )}
      <button className='task-delete' onClick={handleDelete}>Delete</button>
      <button className='task-delete' onClick={handleToggleComplete}>Done</button>
      {/* <input type='checkbox' checked={todo.done} onChange={handleToggleComplete}/> */}
    </div>
  );
}

export default TodoItem;