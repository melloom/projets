import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getPost, createPost, updatePost } from '../../services/api';

const PostEditor = () => {
  const { id } = useParams();
  const history = useHistory();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (id) {
      setIsEditing(true);
      getPost(id).then(post => {
        setTitle(post.title);
        setContent(post.content);
      });
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const postData = { title, content };

    if (isEditing) {
      updatePost(id, postData).then(() => {
        history.push('/admin/dashboard');
      });
    } else {
      createPost(postData).then(() => {
        history.push('/admin/dashboard');
      });
    }
  };

  return (
    <div className="post-editor">
      <h2>{isEditing ? 'Edit Post' : 'Create Post'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Content:</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <button type="submit">{isEditing ? 'Update Post' : 'Create Post'}</button>
      </form>
    </div>
  );
};

export default PostEditor;