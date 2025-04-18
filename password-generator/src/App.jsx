import React from 'react';
import PasswordGenerator from './components/PasswordGenerator';
import './styles/App.css';

function App() {
    return (
        <div className="App">
            <h1>Password Generator</h1>
            <PasswordGenerator />
        </div>
    );
}

export default App;