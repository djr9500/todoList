import React, { useEffect, useState } from 'react';
import { fetchTasks, deleteTask, updateTask } from '../services/api';
import Task from './Task';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const loadTasks = async () => {
            try {
                const { data } = await fetchTasks();
                setTasks(data);
            } catch (error) {
                console.error('Error fetching tasks:', error);
            }
        };

        loadTasks();
    }, []);

    const handleDelete = async (id) => {
        try {
            await deleteTask(id);
            setTasks(tasks.filter((task) => task._id !== id));
        } catch (error) {
            console.error('Error deleting task:', error);
        }
    };

    const handleToggleCompletion = async (task) => {
        try {
            const updatedTask = { ...task, completed: !task.completed };
            await updateTask(task._id, updatedTask);
            setTasks(tasks.map((t) => (t._id === task._id ? updatedTask : t)));
        } catch (error) {
            console.error('Error updating task:', error);
        }
    };

    return (
        <div>
            {tasks.map((task) => (
                <Task
                    key={task._id}
                    task={task}
                    onDelete={handleDelete}
                    onToggleCompletion={handleToggleCompletion}
                />
            ))}
        </div>
    );
};

export default TaskList;
