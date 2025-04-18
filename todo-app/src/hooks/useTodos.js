import { useState, useEffect } from 'react';
import { getTasks, saveTasks } from '../utils/localStorage';

const useTodos = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const storedTodos = getTasks();
        if (storedTodos) {
            setTodos(storedTodos);
        }
    }, []);

    const addTodo = (task) => {
        const newTodos = [...todos, task];
        setTodos(newTodos);
        saveTasks(newTodos);
    };

    const removeTodo = (id) => {
        const newTodos = todos.filter(todo => todo.id !== id);
        setTodos(newTodos);
        saveTasks(newTodos);
    };

    const toggleComplete = (id) => {
        const newTodos = todos.map(todo => 
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(newTodos);
        saveTasks(newTodos);
    };

    const filterTodosByCategory = (category) => {
        return category ? todos.filter(todo => todo.category === category) : todos;
    };

    return {
        todos,
        addTodo,
        removeTodo,
        toggleComplete,
        filterTodosByCategory,
    };
};

export default useTodos;