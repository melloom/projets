import React, { useContext } from 'react';
import InventoryItem from './InventoryItem';
import { InventoryContext } from '../context/InventoryContext';

const InventoryList = () => {
    const { inventory } = useContext(InventoryContext);

    return (
        <div className="inventory-list">
            {inventory.map(item => (
                <InventoryItem key={item.id} item={item} />
            ))}
        </div>
    );
};

export default InventoryList;