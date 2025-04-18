import React, { useState } from 'react';
import Header from './Header';
import InventoryList from './InventoryList';
import SettingsPage from './SettingsPage';
import { InventoryProvider } from '../context/InventoryContext';

const App = () => {
    const [showSettings, setShowSettings] = useState(false);

    const toggleSettings = () => {
        setShowSettings(prev => !prev);
    };

    return (
        <InventoryProvider>
            <div className="app">
                <Header toggleSettings={toggleSettings} />
                {showSettings ? <SettingsPage /> : <InventoryList />}
            </div>
        </InventoryProvider>
    );
};

export default App;