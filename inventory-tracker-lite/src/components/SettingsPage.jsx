import React, { useContext, useState } from 'react';
import { InventoryContext } from '../context/InventoryContext';

const SettingsPage = () => {
    const { lowStockThreshold, setLowStockThreshold } = useContext(InventoryContext);
    const [threshold, setThreshold] = useState(lowStockThreshold);

    const handleThresholdChange = (e) => {
        setThreshold(e.target.value);
    };

    const handleSave = () => {
        setLowStockThreshold(threshold);
    };

    return (
        <div className="settings-page">
            <h2>Settings</h2>
            <div>
                <label htmlFor="low-stock-threshold">Low Stock Threshold:</label>
                <input
                    type="number"
                    id="low-stock-threshold"
                    value={threshold}
                    onChange={handleThresholdChange}
                />
            </div>
            <button onClick={handleSave}>Save</button>
        </div>
    );
};

export default SettingsPage;