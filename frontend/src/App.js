import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const App = () => {
    const [tasks, setTasks] = useState([]);

    const handleTaskAdded = (newTask) => {
        setTasks((prevTasks) => [...prevTasks, newTask]);
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>To-Do List</h1>
            <TaskForm onTaskAdded={handleTaskAdded} />
            <TaskList />
        </div>
    );
};

export default App;
