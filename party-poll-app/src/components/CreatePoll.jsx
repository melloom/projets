import React, { useState } from 'react';
import { db } from '../firebase/config'; // Adjust the import based on your Firebase setup
import { collection, addDoc } from 'firebase/firestore';

const CreatePoll = () => {
    const [question, setQuestion] = useState('');
    const [options, setOptions] = useState(['', '']);
    
    const handleOptionChange = (index, value) => {
        const newOptions = [...options];
        newOptions[index] = value;
        setOptions(newOptions);
    };

    const addOption = () => {
        setOptions([...options, '']);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (question && options.every(option => option)) {
            try {
                const docRef = await addDoc(collection(db, 'polls'), {
                    question,
                    options,
                    votes: Array(options.length).fill(0),
                });
                console.log('Poll created with ID: ', docRef.id);
                // Optionally reset the form or redirect
            } catch (error) {
                console.error('Error creating poll: ', error);
            }
        } else {
            alert('Please fill in all fields');
        }
    };

    return (
        <div>
            <h2>Create a New Poll</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Poll Question:</label>
                    <input 
                        type="text" 
                        value={question} 
                        onChange={(e) => setQuestion(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Options:</label>
                    {options.map((option, index) => (
                        <input 
                            key={index} 
                            type="text" 
                            value={option} 
                            onChange={(e) => handleOptionChange(index, e.target.value)} 
                            required 
                        />
                    ))}
                    <button type="button" onClick={addOption}>Add Option</button>
                </div>
                <button type="submit">Create Poll</button>
            </form>
        </div>
    );
};

export default CreatePoll;