import React, { useState, useEffect } from 'react';
import AddBookmark from './components/AddBookmark';
import BookmarkList from './components/BookmarkList';
import SearchFilter from './components/SearchFilter';
import { saveBookmark, getBookmarks } from './utils/storage';

const App = () => {
    const [bookmarks, setBookmarks] = useState([]);
    const [filter, setFilter] = useState('');

    useEffect(() => {
        const storedBookmarks = getBookmarks();
        setBookmarks(storedBookmarks);
    }, []);

    const addBookmark = (bookmark) => {
        const updatedBookmarks = [...bookmarks, bookmark];
        setBookmarks(updatedBookmarks);
        saveBookmark(updatedBookmarks);
    };

    const filteredBookmarks = bookmarks.filter(bookmark => 
        bookmark.title.toLowerCase().includes(filter.toLowerCase()) || 
        (bookmark.tags && bookmark.tags.some(tag => tag.toLowerCase().includes(filter.toLowerCase())))
    );

    return (
        <div className="App">
            <h1>Bookmark Manager</h1>
            <SearchFilter filter={filter} setFilter={setFilter} />
            <AddBookmark addBookmark={addBookmark} />
            <BookmarkList bookmarks={filteredBookmarks} />
        </div>
    );
};

export default App;