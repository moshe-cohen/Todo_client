import React, { useState } from 'react';

function AddTodo({ onAdd }) {
  const [description, setDescription] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (description.trim() !== '') {
      onAdd(description);
      setDescription('');
    }
  }


  return (
    <form className='add-todo-form' onSubmit={handleSubmit}>
      <input className='add-todo-input' type="text" value={description} onChange={e => setDescription(e.target.value)} />
      <button className='add-todo-button' type="submit">Add</button>
    </form>
  );
}

export default AddTodo;
