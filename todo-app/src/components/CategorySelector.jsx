import React, { useState } from 'react';

const CategorySelector = ({ categories, onSelectCategory, onCreateCategory }) => {
    const [newCategory, setNewCategory] = useState('');

    const handleCategoryChange = (event) => {
        onSelectCategory(event.target.value);
    };

    const handleCreateCategory = () => {
        if (newCategory.trim()) {
            onCreateCategory(newCategory);
            setNewCategory('');
        }
    };

    return (
        <div>
            <select onChange={handleCategoryChange}>
                <option value="">Select a category</option>
                {categories.map((category, index) => (
                    <option key={index} value={category}>
                        {category}
                    </option>
                ))}
            </select>
            <input
                type="text"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                placeholder="New category"
            />
            <button onClick={handleCreateCategory}>Add Category</button>
        </div>
    );
};

export default CategorySelector;