import React from 'react';

const BookmarkItem = ({ bookmark }) => {
    const { title, url, tags } = bookmark;

    const openBookmark = () => {
        window.open(url, '_blank');
    };

    return (
        <div className="bookmark-item">
            <h3>{title}</h3>
            <p>{url}</p>
            {tags && tags.length > 0 && (
                <div className="tags">
                    {tags.map((tag, index) => (
                        <span key={index} className="tag">
                            {tag}
                        </span>
                    ))}
                </div>
            )}
            <button onClick={openBookmark}>Open</button>
        </div>
    );
};

export default BookmarkItem;