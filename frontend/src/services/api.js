import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:5000/api', // Replace this with your backend URL if different
});

// Fetch all tasks
export const fetchTasks = () => API.get('/tasks');

// Create a new task
export const createTask = (task) => API.post('/tasks', task);

// Update a task
export const updateTask = (id, updatedTask) => API.put(`/tasks/${id}`, updatedTask);

// Delete a task
export const deleteTask = (id) => API.delete(`/tasks/${id}`);
