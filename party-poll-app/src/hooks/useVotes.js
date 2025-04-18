import { useEffect, useState } from 'react';
import { db } from '../firebase/config'; // Adjust the import based on your Firebase config file
import { ref, onValue, set } from 'firebase/database';

const useVotes = (pollId) => {
    const [votes, setVotes] = useState({});
    
    useEffect(() => {
        const votesRef = ref(db, `polls/${pollId}/votes`);
        
        onValue(votesRef, (snapshot) => {
            const data = snapshot.val();
            setVotes(data || {});
        });

        return () => {
            // Cleanup listener on unmount
            votesRef.off();
        };
    }, [pollId]);

    const submitVote = async (option) => {
        const votesRef = ref(db, `polls/${pollId}/votes/${option}`);
        await set(votesRef, (votes[option] || 0) + 1);
    };

    return { votes, submitVote };
};

export default useVotes;