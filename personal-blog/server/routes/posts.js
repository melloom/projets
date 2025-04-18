const express = require('express');
const router = express.Router();
const postsController = require('../controllers/posts');
const authMiddleware = require('../middleware/auth');
const adminOnlyMiddleware = require('../middleware/adminOnly');

// Get all posts
router.get('/', postsController.getAllPosts);

// Get a single post by ID
router.get('/:id', postsController.getPostById);

// Create a new post (admin only)
router.post('/', authMiddleware, adminOnlyMiddleware, postsController.createPost);

// Update a post by ID (admin only)
router.put('/:id', authMiddleware, adminOnlyMiddleware, postsController.updatePost);

// Delete a post by ID (admin only)
router.delete('/:id', authMiddleware, adminOnlyMiddleware, postsController.deletePost);

module.exports = router;