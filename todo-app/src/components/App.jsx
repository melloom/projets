import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import CategoryFilter from './CategoryFilter';
import { useTodos } from '../hooks/useTodos';

const App = () => {
    const { todos, addTodo, toggleTodo, removeTodo } = useTodos();
    const [selectedCategory, setSelectedCategory] = useState('');

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const filteredTodos = selectedCategory
        ? todos.filter(todo => todo.category === selectedCategory)
        : todos;

    return (
        <div className="app">
            <h1>To-Do List</h1>
            <CategoryFilter onCategoryChange={handleCategoryChange} />
            <TodoForm addTodo={addTodo} />
            <TodoList 
                todos={filteredTodos} 
                toggleTodo={toggleTodo} 
                removeTodo={removeTodo} 
            />
        </div>
    );
};

export default App;