const Comment = require('../models/Comment');

// Add a new comment
exports.addComment = async (req, res) => {
    try {
        const { postId, content, author } = req.body;
        const newComment = new Comment({ postId, content, author });
        await newComment.save();
        res.status(201).json(newComment);
    } catch (error) {
        res.status(500).json({ message: 'Error adding comment', error });
    }
};

// Get comments for a specific post
exports.getCommentsByPostId = async (req, res) => {
    try {
        const { postId } = req.params;
        const comments = await Comment.find({ postId });
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching comments', error });
    }
};

// Moderate a comment
exports.moderateComment = async (req, res) => {
    try {
        const { commentId } = req.params;
        const { approved } = req.body;
        const updatedComment = await Comment.findByIdAndUpdate(commentId, { approved }, { new: true });
        res.status(200).json(updatedComment);
    } catch (error) {
        res.status(500).json({ message: 'Error moderating comment', error });
    }
};