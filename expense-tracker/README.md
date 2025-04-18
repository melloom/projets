# Simple Expense Tracker

This is a simple expense tracker application built with React. It allows users to log their expenses, view a running total, and see the last five entries.

## Features

- Log expenses with a description, amount, and date.
- View a running total of all expenses.
- Display the last five logged expenses.

## Project Structure

```
expense-tracker
├── public
│   ├── index.html          # Main HTML file
│   └── favicon.ico         # Favicon for the application
├── src
│   ├── components          # React components
│   │   ├── App.js          # Main application component
│   │   ├── ExpenseForm.js   # Form for adding expenses
│   │   ├── ExpenseList.js    # Displays last 5 expenses
│   │   └── ExpenseSummary.js  # Shows running total
│   ├── utils               # Utility functions
│   │   └── localStorage.js  # Functions for localStorage interaction
│   ├── styles              # CSS styles
│   │   └── index.css       # Styles for the application
│   └── index.js            # Entry point for the React application
├── package.json            # npm configuration file
├── README.md               # Project documentation
└── .gitignore              # Git ignore file
```

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/expense-tracker.git
   ```
2. Navigate to the project directory:
   ```
   cd expense-tracker
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

1. Start the development server:
   ```
   npm start
   ```
2. Open your browser and go to `http://localhost:3000` to view the application.

## License

This project is licensed under the MIT License.