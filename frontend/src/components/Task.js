import React from 'react';

const Task = ({ task, onDelete, onToggleCompletion }) => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <span
                style={{
                    textDecoration: task.completed ? 'line-through' : 'none',
                    flexGrow: 1,
                }}
            >
                {task.title}
            </span>
            <button onClick={() => onToggleCompletion(task)}>
                {task.completed ? 'Undo' : 'Complete'}
            </button>
            <button onClick={() => onDelete(task._id)}>Delete</button>
        </div>
    );
};

export default Task;
