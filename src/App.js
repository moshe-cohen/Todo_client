
import React, { useState, useEffect } from 'react';
import TodoItem from './component/TodoItem';
import AddTodo from './component/AddTodo';
import useTodoApi from './function/useTasks.js';

import './App.css';
  
function App() {
  const [page, setPage] = useState(1);
  const { tasks, createTask, updateTask, deleteTask, fetchNextTasks, fetchTasks } = useTodoApi(); // using custom hook


  useEffect(() => {
    fetchTasks();
  }, []);

  const handleAddTodo = description => {
    createTask(description);
  }

  const handleEditTodo = (id, newDescription, done) => {
    updateTask(id, newDescription, done);
  }

  const handleDeleteTodo = id => {
    deleteTask(id);
  }

  const handlethePreviousTasksClick = () => {
    if (page === 1) {
      fetchNextTasks(page);
    }
    setPage(prevPage => prevPage - 1);
    fetchNextTasks(page);
    console.log(page);
  }

  const handleLoadMoreClick = () => {
    setPage(prevPage => prevPage + 1);
    fetchNextTasks(page);
    console.log(page);
  }
  const handleAllTasksClick = () => {
    fetchTasks();
  }

  return (
    <div className="App">
      <h1>Todo List</h1>

      <AddTodo onAdd={handleAddTodo} />
      {tasks.map(todo => (
        <TodoItem key={todo.id} todo={todo} onEdit={handleEditTodo} onDelete={handleDeleteTodo} />
      ))}
      <button className='add-todo-button'  onClick={handleLoadMoreClick}>Load page</button>
      <button className='add-todo-button' onClick={handlethePreviousTasksClick}> previous page</button>
      <button className='add-todo-button' onClick={handleAllTasksClick}>All pages</button>
    </div>
  );
}

export default App;
