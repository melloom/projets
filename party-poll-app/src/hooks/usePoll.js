import { useState, useEffect } from 'react';
import { db } from '../firebase/config'; // Adjust the import based on your Firebase config file
import { ref, set, onValue } from 'firebase/database';

const usePoll = (pollId) => {
    const [poll, setPoll] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const pollRef = ref(db, `polls/${pollId}`);
        onValue(pollRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                setPoll(data);
            }
            setLoading(false);
        });

        return () => {
            // Cleanup listener
            pollRef.off();
        };
    }, [pollId]);

    const createPoll = (question, options) => {
        const newPollRef = ref(db, `polls/${pollId}`);
        set(newPollRef, {
            question,
            options,
            votes: Array(options.length).fill(0),
        });
    };

    return { poll, loading, createPoll };
};

export default usePoll;