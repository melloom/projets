import React from 'react';

const CharacterOptions = ({ options, onChange }) => {
    return (
        <div className="character-options">
            <label>
                <input
                    type="checkbox"
                    checked={options.uppercase}
                    onChange={() => onChange('uppercase')}
                />
                Uppercase Letters
            </label>
            <label>
                <input
                    type="checkbox"
                    checked={options.lowercase}
                    onChange={() => onChange('lowercase')}
                />
                Lowercase Letters
            </label>
            <label>
                <input
                    type="checkbox"
                    checked={options.numbers}
                    onChange={() => onChange('numbers')}
                />
                Numbers
            </label>
            <label>
                <input
                    type="checkbox"
                    checked={options.symbols}
                    onChange={() => onChange('symbols')}
                />
                Symbols
            </label>
        </div>
    );
};

export default CharacterOptions;