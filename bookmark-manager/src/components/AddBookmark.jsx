import React, { useState } from 'react';

const AddBookmark = ({ onAdd }) => {
    const [url, setUrl] = useState('');
    const [title, setTitle] = useState('');
    const [tags, setTags] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!url || !title) return;

        const newBookmark = {
            url,
            title,
            tags: tags.split(',').map(tag => tag.trim()),
        };

        onAdd(newBookmark);
        setUrl('');
        setTitle('');
        setTags('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter URL"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Enter Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Enter Tags (comma separated)"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
            />
            <button type="submit">Add Bookmark</button>
        </form>
    );
};

export default AddBookmark;