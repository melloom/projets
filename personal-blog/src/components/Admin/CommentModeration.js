import React, { useEffect, useState } from 'react';
import { fetchComments, moderateComment } from '../../services/api';

const CommentModeration = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const loadComments = async () => {
      const fetchedComments = await fetchComments();
      setComments(fetchedComments);
    };
    loadComments();
  }, []);

  const handleModerate = async (commentId, action) => {
    await moderateComment(commentId, action);
    setComments(comments.filter(comment => comment.id !== commentId));
  };

  return (
    <div className="comment-moderation">
      <h2>Comment Moderation</h2>
      <ul>
        {comments.map(comment => (
          <li key={comment.id}>
            <p>{comment.text}</p>
            <button onClick={() => handleModerate(comment.id, 'approve')}>Approve</button>
            <button onClick={() => handleModerate(comment.id, 'delete')}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentModeration;