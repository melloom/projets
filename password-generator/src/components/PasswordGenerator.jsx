import React, { useState } from 'react';
import CharacterOptions from './CharacterOptions';
import CopyButton from './CopyButton';
import { generatePassword } from '../utils/passwordUtils';
import './PasswordGenerator.css';

const PasswordGenerator = () => {
    const [length, setLength] = useState(12);
    const [includeUppercase, setIncludeUppercase] = useState(true);
    const [includeLowercase, setIncludeLowercase] = useState(true);
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeSymbols, setIncludeSymbols] = useState(true);
    const [password, setPassword] = useState('');

    const handleGeneratePassword = () => {
        const newPassword = generatePassword(length, {
            includeUppercase,
            includeLowercase,
            includeNumbers,
            includeSymbols,
        });
        setPassword(newPassword);
    };

    return (
        <div className="password-generator">
            <h1>Password Generator</h1>
            <CharacterOptions
                length={length}
                setLength={setLength}
                includeUppercase={includeUppercase}
                setIncludeUppercase={setIncludeUppercase}
                includeLowercase={includeLowercase}
                setIncludeLowercase={setIncludeLowercase}
                includeNumbers={includeNumbers}
                setIncludeNumbers={setIncludeNumbers}
                includeSymbols={includeSymbols}
                setIncludeSymbols={setIncludeSymbols}
            />
            <button onClick={handleGeneratePassword}>Generate</button>
            <div className="generated-password">{password}</div>
            <CopyButton password={password} />
        </div>
    );
};

export default PasswordGenerator;