export const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
};

export const validatePassword = (password) => {
    return password.length >= 6; // Minimum length for password
};

export const validateComment = (comment) => {
    return comment.trim().length > 0; // Comment should not be empty
};

export const validatePostTitle = (title) => {
    return title.trim().length > 0; // Title should not be empty
};

export const validatePostContent = (content) => {
    return content.trim().length > 0; // Content should not be empty
};