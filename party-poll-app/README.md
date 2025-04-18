# Party Poll Voting App

## Overview
The Party Poll Voting App is a fun and interactive application that allows users to create polls, vote on them, and see live results. It is designed for friend groups to easily share opinions on various topics, such as movies, events, or any other questions.

## Features
- Create a one-question poll with multiple options.
- Share the poll ID with friends to gather votes.
- Vote on polls and see live tallies of the results.
- Simple and user-friendly interface.

## Technologies Used
- React: A JavaScript library for building user interfaces.
- Firebase Realtime Database: A cloud-hosted database that allows real-time data synchronization.
- Vite: A fast build tool for modern web applications.

## Getting Started

### Prerequisites
- Node.js and npm installed on your machine.
- A Firebase account to set up the Realtime Database.

### Installation
1. Clone the repository:
   ```
   git clone https://github.com/yourusername/party-poll-app.git
   ```
2. Navigate to the project directory:
   ```
   cd party-poll-app
   ```
3. Install the dependencies:
   ```
   npm install
   ```

### Configuration
1. Create a `.env` file in the root directory and add your Firebase configuration:
   ```
   REACT_APP_FIREBASE_API_KEY=your_api_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
   REACT_APP_FIREBASE_DATABASE_URL=your_database_url
   REACT_APP_FIREBASE_PROJECT_ID=your_project_id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   REACT_APP_FIREBASE_APP_ID=your_app_id
   ```

### Running the App
To start the development server, run:
```
npm run dev
```
Open your browser and navigate to `http://localhost:3000` to view the app.

## Usage
- Create a new poll by entering a question and options.
- Share the poll ID with friends to gather votes.
- Vote on the poll and watch the results update in real-time.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.