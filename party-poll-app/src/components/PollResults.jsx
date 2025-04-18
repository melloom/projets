import React, { useEffect, useState } from 'react';
import { useVotes } from '../hooks/useVotes';

const PollResults = ({ pollId }) => {
    const { votes, loading } = useVotes(pollId);
    const [tallies, setTallies] = useState({});

    useEffect(() => {
        if (!loading) {
            const newTallies = {};
            votes.forEach(vote => {
                newTallies[vote.option] = (newTallies[vote.option] || 0) + 1;
            });
            setTallies(newTallies);
        }
    }, [votes, loading]);

    if (loading) {
        return <div>Loading results...</div>;
    }

    return (
        <div>
            <h2>Poll Results</h2>
            <ul>
                {Object.entries(tallies).map(([option, count]) => (
                    <li key={option}>
                        {option}: {count} votes
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PollResults;