import React, { useState } from 'react';
import { useVotes } from '../hooks/useVotes';

const PollVote = ({ pollId }) => {
    const { vote, votes } = useVotes(pollId);
    const [selectedOption, setSelectedOption] = useState('');

    const handleVote = (e) => {
        e.preventDefault();
        if (selectedOption) {
            vote(selectedOption);
            setSelectedOption('');
        }
    };

    return (
        <div>
            <h2>Vote for the Poll</h2>
            <form onSubmit={handleVote}>
                <div>
                    <label>
                        <input
                            type="radio"
                            value="Option 1"
                            checked={selectedOption === 'Option 1'}
                            onChange={(e) => setSelectedOption(e.target.value)}
                        />
                        Option 1
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            type="radio"
                            value="Option 2"
                            checked={selectedOption === 'Option 2'}
                            onChange={(e) => setSelectedOption(e.target.value)}
                        />
                        Option 2
                    </label>
                </div>
                <button type="submit">Vote</button>
            </form>
            <h3>Current Votes:</h3>
            <ul>
                {Object.entries(votes).map(([option, count]) => (
                    <li key={option}>{option}: {count}</li>
                ))}
            </ul>
        </div>
    );
};

export default PollVote;