import React, { useState } from 'react';

const SearchFilter = ({ onFilter }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event) => {
        const value = event.target.value;
        setSearchTerm(value);
        onFilter(value);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search by title or tag"
                value={searchTerm}
                onChange={handleChange}
            />
        </div>
    );
};

export default SearchFilter;