import React from 'react';
import BookmarkItem from './BookmarkItem';

const BookmarkList = ({ bookmarks }) => {
    return (
        <div>
            {bookmarks.length === 0 ? (
                <p>No bookmarks available.</p>
            ) : (
                bookmarks.map((bookmark) => (
                    <BookmarkItem key={bookmark.id} bookmark={bookmark} />
                ))
            )}
        </div>
    );
};

export default BookmarkList;