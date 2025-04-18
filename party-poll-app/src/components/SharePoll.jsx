import React from 'react';

const SharePoll = ({ pollId }) => {
    const shareLink = `${window.location.origin}/poll/${pollId}`;

    const copyToClipboard = () => {
        navigator.clipboard.writeText(shareLink)
            .then(() => alert('Link copied to clipboard!'))
            .catch(err => console.error('Failed to copy: ', err));
    };

    return (
        <div className="share-poll">
            <h2>Share this Poll</h2>
            <p>Poll ID: {pollId}</p>
            <button onClick={copyToClipboard}>Copy Link</button>
            <p>Share this link with your friends!</p>
        </div>
    );
};

export default SharePoll;