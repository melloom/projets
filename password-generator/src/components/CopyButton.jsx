import React from 'react';

const CopyButton = ({ password }) => {
    const copyToClipboard = () => {
        navigator.clipboard.writeText(password)
            .then(() => {
                alert('Password copied to clipboard!');
            })
            .catch(err => {
                console.error('Failed to copy: ', err);
            });
    };

    return (
        <button onClick={copyToClipboard}>
            Copy
        </button>
    );
};

export default CopyButton;