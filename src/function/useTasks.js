
import { useState } from 'react';
import httpRequest from './httpRequest';
import axios from 'axios';

const useTasks = () => {
  const [tasks, setTasks] = useState([]);

  const fetchNextTasks = async (page) => {
    
    try {
      const fetchedTasks = await httpRequest('GET', `http://localhost:3000/tasks/page/${page}`);
      setTasks(fetchedTasks);
    } catch (error) {
      console.error("Failed to create task:", error);
    }
  };
  

  const fetchTasks = async () => {
    try {
      const fetchedTasks = await httpRequest('GET', `http://localhost:3000/tasks`);
      setTasks(fetchedTasks);
    } catch (error) {
      console.error("Failed to create task:", error);
    }
  };

  const createTask = async (task) => {
    try {
      const newTask = await httpRequest('POST', 'http://localhost:3000/tasks', { name: 'task', description: task });
      setTasks(prevTasks => [...prevTasks, newTask]);
      console.log("Task created successfully!");
    } catch (error) {
      console.error("Failed to create task:", error);
    }
  };

  const updateTask = async (id, newDescription = null, done = null) => {
    console.log("updateTask");
    axios.put(`http://localhost:3000/tasks/${id}`, { description: newDescription, done: done }, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(response => setTasks(prevTodos => prevTodos.map(todo => todo.id === id ? response.data : todo)))
      .catch(error => {
        console.error('An error occurred while adding the todo:', error.message);
      });;
  };

  const deleteTask = async (id) => {
    axios.delete(`http://localhost:3000/tasks/${id}`, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(() => setTasks(prevTodos => prevTodos.filter(todo => todo.id !== id)))
      .catch(error => console.error('There was an error!', error));
  };

  return {
    fetchNextTasks,
    tasks,
    setTasks,
    fetchTasks,
    createTask,
    updateTask,
    deleteTask,
  };
};

export default useTasks;
