# Personal Blog

This is a personal blog application where the owner can create posts, and users can comment, like, and share those posts. The application consists of a frontend built with React and a backend built with Node.js and Express.

## Features

- Admin Dashboard for managing posts and comments
- User authentication for secure access
- Ability to create, edit, and delete blog posts
- Comment moderation for user comments
- Like and share functionality for blog posts

## Project Structure

- `src/`: Contains all the frontend code
  - `components/`: React components for different parts of the application
    - `Admin/`: Components for admin functionalities
    - `Blog/`: Components for displaying blog posts and comments
    - `Common/`: Common components like Header, Footer, and Navigation
    - `Auth/`: Components for user authentication
  - `services/`: API and authentication services
  - `styles/`: CSS files for styling the application
  - `utils/`: Utility functions for formatting and validation
  - `App.js`: Main application component
  - `index.js`: Entry point of the application

- `public/`: Contains static files
  - `index.html`: Main HTML file
  - `favicon.ico`: Favicon for the website

- `server/`: Contains all the backend code
  - `controllers/`: Functions for handling requests
  - `models/`: Database models for posts, comments, and users
  - `middleware/`: Middleware for authentication and access control
  - `routes/`: API routes for handling requests
  - `server.js`: Entry point of the backend server

- `.env`: Environment variables for the application
- `package.json`: Configuration file for npm
- `README.md`: Documentation for the project

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   cd personal-blog
   ```

2. Install dependencies for the frontend:
   ```
   cd src
   npm install
   ```

3. Install dependencies for the backend:
   ```
   cd server
   npm install
   ```

4. Set up environment variables in the `.env` file.

5. Start the backend server:
   ```
   cd server
   node server.js
   ```

6. Start the frontend application:
   ```
   cd src
   npm start
   ```

## Usage

- Access the blog at `http://localhost:3000`.
- Use the admin dashboard to manage posts and comments.
- Users can log in, comment on posts, and share them.

## License

This project is licensed under the MIT License.