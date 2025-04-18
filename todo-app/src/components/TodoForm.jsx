import React, { useState } from 'react';
import CategorySelector from './CategorySelector';

const TodoForm = ({ addTodo }) => {
    const [task, setTask] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!task || !category) return;
        addTodo({ task, category, completed: false });
        setTask('');
        setCategory('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Add a new task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <CategorySelector selectedCategory={category} setCategory={setCategory} />
            <button type="submit">Add Task</button>
        </form>
    );
};

export default TodoForm;