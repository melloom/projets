import React from 'react';

const InventoryItem = ({ item, onIncrement, onDecrement }) => {
    const isLowStock = item.count <= item.threshold;

    return (
        <div className={`inventory-item ${isLowStock ? 'low-stock' : ''}`}>
            <span>{item.name}</span>
            <span>{item.count}</span>
            <button onClick={() => onIncrement(item.id)}>+</button>
            <button onClick={() => onDecrement(item.id)}>-</button>
        </div>
    );
};

export default InventoryItem;