const express = require('express');
const router = express.Router();
const commentsController = require('../controllers/comments');

// Route to get comments for a specific post
router.get('/:postId', commentsController.getComments);

// Route to add a new comment
router.post('/:postId', commentsController.addComment);

// Route to moderate a comment (admin only)
router.put('/:commentId', commentsController.moderateComment);

// Route to delete a comment (admin only)
router.delete('/:commentId', commentsController.deleteComment);

module.exports = router;