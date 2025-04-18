import React, { createContext, useState, useEffect } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export const InventoryContext = createContext();

export const InventoryProvider = ({ children }) => {
    const [inventory, setInventory] = useLocalStorage('inventory', []);
    const [threshold, setThreshold] = useState(5);

    const addItem = (name) => {
        setInventory((prev) => [...prev, { name, count: 0 }]);
    };

    const updateItemCount = (name, count) => {
        setInventory((prev) =>
            prev.map((item) =>
                item.name === name ? { ...item, count } : item
            )
        );
    };

    const setLowStockThreshold = (newThreshold) => {
        setThreshold(newThreshold);
    };

    return (
        <InventoryContext.Provider
            value={{
                inventory,
                addItem,
                updateItemCount,
                threshold,
                setLowStockThreshold,
            }}
        >
            {children}
        </InventoryContext.Provider>
    );
};