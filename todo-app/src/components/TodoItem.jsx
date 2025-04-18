import React from 'react';

const TodoItem = ({ task, onComplete }) => {
    return (
        <div className="todo-item">
            <span className={task.completed ? 'completed' : ''}>{task.title}</span>
            <span className="category">{task.category}</span>
            <button onClick={() => onComplete(task.id)}>Complete</button>
        </div>
    );
};

export default TodoItem;