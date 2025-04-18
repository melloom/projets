import React from 'react';

const LikeShareButtons = ({ postId }) => {
  const handleLike = () => {
    // Logic for liking the post
    console.log(`Post ${postId} liked!`);
  };

  const handleShare = () => {
    // Logic for sharing the post
    console.log(`Post ${postId} shared!`);
  };

  return (
    <div className="like-share-buttons">
      <button onClick={handleLike} className="like-button">
        Like
      </button>
      <button onClick={handleShare} className="share-button">
        Share
      </button>
    </div>
  );
};

export default LikeShareButtons;