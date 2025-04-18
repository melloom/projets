import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ tasks, filter }) => {
    const filteredTasks = filter ? tasks.filter(task => task.category === filter) : tasks;

    return (
        <ul>
            {filteredTasks.map(task => (
                <TodoItem key={task.id} task={task} />
            ))}
        </ul>
    );
};

export default TodoList;